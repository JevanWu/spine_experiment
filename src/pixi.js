import 'pixi.js';
// import * as PIXI from 'pixi.js';
import 'pixi-spine';
//
const app = new PIXI.Application();
//
document.body.appendChild(app.view);
//
app.loader
    .add('spineCharacter', 'assets/brothersun.json')
    .load(function (loader, resources) {
        var animation = new PIXI.spine.Spine(resources.spineCharacter.spineData);
        console.log(animation.getBounds());
      // animation.setTransform


        app.stage.interactive = true;
        animation.x = 200;
        animation.y = 300;
        // add the animation to the scene and render...
        app.stage.addChild(animation);
        //app.stage.add

        // run
        // var animation = new PIXI.spine.Spine(spineBoyData);
        // if (animation.state.hasAnimation('speed1')) {
        //     // run forever, little boy!
        //     animation.state.setAnimation(0, 'speed1', true);
        //     // dont run too fast
        //     animation.state.timeScale = 1;
        //     // animation.state.setTimelineModes = 0.1;
        // }

        app.stage.on("click", function(){
          console.log("hello there");
          animation.state.setAnimation(0, 'speed1', false);
        })

        app.start();
    });

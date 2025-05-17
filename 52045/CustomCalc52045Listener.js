import Calc52045Listener from "./generated/Calc52045Listener.js";

export class CustomCalc52045Listener extends Calc52045Listener {

    enterStat(ctx) {
        console.log(`Se detectó una: ${ctx.constructor.name}`);
    }

}
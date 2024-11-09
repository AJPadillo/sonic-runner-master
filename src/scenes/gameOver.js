import k from "../kaplayCtx";

export default function gameOver(citySfx) {
    citySfx.paused = true;
    let bestScore = k.getData("best-score");
    const currentScore = k.getData("current-score");

    
}
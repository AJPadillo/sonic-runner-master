import k from "../kaplayCtx";

export default function gameOver(citySfx) {
    citySfx.paused = true;
    let bestScore = k.getData("best-score");
    const currentScore = k.getData("current-score");

    const rankGrades = ["F", "E", "D", "C", "B", "A", "S"];
    const rankValues = [50, 280, 500, 720, 980, 1200, 1780];

    let currentRank = "F";
    let bestRank = "F";

    for (let i = 0; i < rankValues.length; i++) {
        if (rankValues[i] < currentScore) {
            currentRank = rankGrades[i];
        }
        
        if (rankValues[i] < bestScore) {
            bestRank = rankGrades[i];
        }
    }
}
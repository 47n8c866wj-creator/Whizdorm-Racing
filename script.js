const player = document.getElementById("player");
const enemy = document.getElementById("enemy");

let playerX = 135;
let enemyY = -100;
let enemyX = Math.floor(Math.random() * 3) * 90 + 45;

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft" && playerX > 45) {
        playerX -= 90;
    }

    if (e.key === "ArrowRight" && playerX < 225) {
        playerX += 90;
    }

    player.style.left = playerX + "px";
});

function gameLoop() {
    enemyY += 5;

    if (enemyY > 600) {
        enemyY = -100;
        enemyX = Math.floor(Math.random() * 3) * 90 + 45;
    }

    enemy.style.top = enemyY + "px";
    enemy.style.left = enemyX + "px";

    if (
        enemyY > 470 &&
        enemyY < 560 &&
        enemyX === playerX
    ) {
        alert("💥 Game Over!");
        enemyY = -100;
    }

    requestAnimationFrame(gameLoop);
}

gameLoop();

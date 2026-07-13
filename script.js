const player = document.getElementById("player");
const enemy = document.getElementById("enemy");

let playerX = 175;
let enemyY = -120;
let enemyX = Math.floor(Math.random() * 300) + 30;
let score = 0;

document.addEventListener("keydown", movePlayer);

function movePlayer(e) {
    if (e.key === "ArrowLeft" && playerX > 20) {
        playerX -= 20;
    }

    if (e.key === "ArrowRight" && playerX < 330) {
        playerX += 20;
    }

    player.style.left = playerX + "px";
}

function gameLoop() {

    enemyY += 6;

    if (enemyY > 700) {
        enemyY = -120;
        enemyX = Math.floor(Math.random() * 300) + 30;
        score++;
    }

    enemy.style.top = enemyY + "px";
    enemy.style.left = enemyX + "px";

    requestAnimationFrame(gameLoop);
}

gameLoop();

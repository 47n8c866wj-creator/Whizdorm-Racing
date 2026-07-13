const player = document.getElementById("player");
const enemy = document.getElementById("enemy");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
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
// Collision Detection
const playerRect = player.getBoundingClientRect();
const enemyRect = enemy.getBoundingClientRect();

if (
    playerRect.left < enemyRect.right &&
    playerRect.right > enemyRect.left &&
    playerRect.top < enemyRect.bottom &&
    playerRect.bottom > enemyRect.top
) {
    alert("💥 Game Over!");
    location.reload();
    return;
}
    requestAnimationFrame(gameLoop);
}

gameLoop();
leftBtn.addEventListener("click", () => {
    if (playerX > 20) {
        playerX -= 20;
        player.style.left = playerX + "px";
    }
});

rightBtn.addEventListener("click", () => {
    if (playerX < 330) {
        playerX += 20;
        player.style.left = playerX + "px";
    }
});

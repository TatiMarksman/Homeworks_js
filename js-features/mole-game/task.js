const deadCounter = document.getElementById('dead');
const lostCounter = document.getElementById('lost');

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

function resetGame() {
    deadCounter.textContent = 0;
    lostCounter.textContent = 0;
}

function showAlert(message) {
    alert(message);
    resetGame();
}

for (let i = 1; i <= 9; i++) {
    getHole(i).onclick = function() {
        if (this.classList.contains('hole_has-mole')) {
            deadCounter.textContent = Number(deadCounter.textContent) + 1;
            if (Number(deadCounter.textContent) === 10) {
                showAlert('Вы победили!');
            }
        } else {
            lostCounter.textContent = Number(lostCounter.textContent) + 1;
            if (Number(lostCounter.textContent) === 5) {
                showAlert('Вы проиграли!');
            }
        }
    };
}

function setRandomMole() {
    const previousMole = document.querySelector('.hole_has-mole');
    if (previousMole) previousMole.classList.remove('hole_has-mole');
    
    const randomIndex = Math.floor(Math.random() * 9) + 1;
    getHole(randomIndex).classList.add('hole_has-mole');
}

setInterval(setRandomMole, 1000);

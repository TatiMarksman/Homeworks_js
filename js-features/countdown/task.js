const timerBack = document.getElementById('timer');

const countdown = setInterval(() => {
    timerBack.textContent = Number(timerBack.textContent) - 1;
    if (Number(timerBack.textContent) <= 0) {
        clearInterval(countdown);
        alert('Вы победили в конкурсе!');
    }
}, 1000);

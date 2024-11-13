const img = document.getElementById('cookie');
const clicker__counter = document.getElementById('clicker__counter');

img.onclick = () => {
    img.height += 40;
    img.width += 40;
    clicker__counter.textContent = Number(clicker__counter.textContent) + 1;

    setTimeout(() => {
        img.width -= 40;
        img.height -= 40;
    }, 100);
};

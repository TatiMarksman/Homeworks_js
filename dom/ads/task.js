function startRotator(rotator) {
    const cases = Array.from(rotator.querySelectorAll('.rotator__case'));
    let activeIndex = 0;

    function switchCase() {
        cases[activeIndex].classList.remove('rotator__case_active');
        activeIndex = (activeIndex + 1) % cases.length;

        const nextCase = cases[activeIndex];
        nextCase.classList.add('rotator__case_active');
        nextCase.style.color = nextCase.dataset.color;

        setTimeout(switchCase, nextCase.dataset.speed);
    }

    setTimeout(switchCase, cases[activeIndex].dataset.speed);
}

document.querySelectorAll('.rotator').forEach(startRotator);

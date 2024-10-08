let envelopeOpen = false;

function openEnvelope() {
    if (!envelopeOpen) {
        document.querySelector('.envelope-top').style.transform = 'rotateX(-180deg)';
        document.querySelectorAll('.letter').forEach((letter, index) => {
            setTimeout(() => {
                letter.style.transform = 'translateY(0)';
                letter.style.opacity = '1';
            }, index * 300);
        });
        envelopeOpen = true;
    }
}

document.querySelectorAll('.letter').forEach(letter => {
    letter.addEventListener('click', () => {
        resetLetters();
        letter.style.transform = 'translateY(-150%)';  // Move letters visually outside
        letter.style.zIndex = '5';
    });
});

function resetLetters() {
    document.querySelectorAll('.letter').forEach(letter => {
        letter.style.transform = 'translateY(0)';
        letter.style.zIndex = '';
    });
}

// Selecting elements
const overlay = document.querySelector('#overlay');
const content = document.querySelector('#content');
const backgroundMusic = document.querySelector('#background-music');
const volumeController = document.getElementById('volume-controller');
const volumeSlider = document.getElementById('volume-slider');

// Handle entering the site
overlay.addEventListener('click', function () {
    overlay.classList.add('hidden');
    content.style.display = 'block';
    backgroundMusic.play();
    volumeController.style.display = 'block';
});

// Handle typing effect
const phrases = ["Skid Master."];
const typingTextElement = document.getElementById('typing-text');
let currentPhraseIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

function type() {
    const currentPhrase = phrases[currentPhraseIndex];
    const delay = isDeleting ? 50 : 100;

    if (!isDeleting && currentCharIndex < currentPhrase.length) {
        typingTextElement.textContent += currentPhrase[currentCharIndex];
        currentCharIndex++;
    } else if (isDeleting && currentCharIndex > 0) {
        typingTextElement.textContent = currentPhrase.slice(0, currentCharIndex - 1);
        currentCharIndex--;
    } else if (!isDeleting && currentCharIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(type, 1000);
        return;
    } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
    }

    setTimeout(type, delay);
}

setTimeout(type, 500);

// Handle volume control
volumeSlider.addEventListener('input', function () {
    backgroundMusic.volume = volumeSlider.value;
});
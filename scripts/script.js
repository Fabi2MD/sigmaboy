// Redirect to https://exit.rip if the URL has any path
if (window.location.hostname === 'exit.rip' && window.location.pathname !== '/') {
    window.location.href = 'https://exit.rip';  // Redirect to the homepage
}

// When the user clicks to enter
document.querySelector('#overlay').addEventListener('click', function() {
    this.classList.add('hidden');
    document.querySelector('#content').style.display = 'block';
    document.querySelector('#background-music').play(); // Start the music automatically
});
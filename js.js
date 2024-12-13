const toggleButton = document.getElementById('home');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
});

window.addEventListener('load', () => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'enabled') {
    document.body.classList.add('dark-mode');
    }
});
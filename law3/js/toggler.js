
const toggleBtn =
document.getElementById('toggle-btn');

const isDark = 
localStorage.getItem('dark-mode') === 'true';

if (isDark) {
    document.body.classList.add('dark-mode');
}

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'))
})
















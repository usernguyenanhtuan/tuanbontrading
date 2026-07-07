const card = document.querySelector('.broker-card');
const btn = document.querySelector('.floating-app-btn');

window.addEventListener('scroll', () => {
    const rect = card.getBoundingClientRect();

    const half = rect.height / 2;

    if (rect.top <= rect.height *0.2 && rect.bottom >= rect.height *0.5) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
});
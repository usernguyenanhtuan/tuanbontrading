const card = document.querySelector('.broker-card');
const btn = document.querySelector('.floating-app-btn');

window.addEventListener('scroll', () => {
    const rect = card.getBoundingClientRect();

    const half = rect.height / 2;

    if (rect.top <= half && rect.bottom >= half) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
});
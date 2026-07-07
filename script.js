const card = document.querySelector('.broker-card');
const btn = document.querySelector('.floating-app-btn');

window.addEventListener('scroll', () => {
    const rect = card.getBoundingClientRect();

    // Chưa tới khối hoặc đã qua khối thì ẩn
    if (rect.top > window.innerHeight || rect.bottom < 50) {
        btn.style.display = 'none';
    } else {
        btn.style.display = 'block';
    }
});
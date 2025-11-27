// Удаляем анимацию счетчиков статистики и добавляем анимацию для follow-text
function initAnimations() {
    // Intersection Observer для анимации появления
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Наблюдаем за элементами для анимации
    const animateElements = document.querySelectorAll('.hero-subtitle, .follow-block, .btn, .feature-card');
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    // Добавляем задержки для кнопок
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach((btn, index) => {
        btn.classList.add(`fade-in-delay-${index + 1}`);
    });
    
    // Добавляем анимацию для текста "СЛЕДУЙ ЗА МНОЙ!"
    const followText = document.querySelector('.follow-text');
    if (followText) {
        observer.observe(followText);
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    initAnimations();
    
    // Плавный скролл для якорей
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Эффект параллакса для фона
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const rate = scrolled * -0.5;
        
        if (hero) {
            hero.style.transform = `translateY(${rate}px)`;
        }
    });
});

// Добавляем классы для анимации при загрузке
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});
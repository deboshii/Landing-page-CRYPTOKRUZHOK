
function initAnimations() {
  
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

    const animateElements = document.querySelectorAll('.hero-subtitle, .follow-block, .btn, .feature-card');
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach((btn, index) => {
        btn.classList.add(`fade-in-delay-${index + 1}`);
    });
    
    const followText = document.querySelector('.follow-text');
    if (followText) {
        observer.observe(followText);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    initAnimations();
    
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
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const rate = scrolled * -0.5;
        
        if (hero) {
            hero.style.transform = `translateY(${rate}px)`;
        }
    });
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

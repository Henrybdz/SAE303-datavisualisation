// Initialisation de GSAP
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    // Animation du loader
    const loader = document.querySelector('.loader');
    if (loader) {
        gsap.to(loader, {
            opacity: 0,
            duration: 1,
            onComplete: () => {
                loader.style.display = 'none';
            }
        });
    }

    // Animation du menu burger
    const burger = document.querySelector('.burger-menu');
    const nav = document.querySelector('.nav-links');
    if (burger && nav) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('active');
            burger.classList.toggle('active');
        });
    }

    // Animation simple du titre principal
    const mainTitle = document.querySelector('h1');
    if (mainTitle) {
        gsap.from(mainTitle, {
            y: -50,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });
    }

    const animations = new UIAnimations();
    
    // Exposer l'instance pour une utilisation dans d'autres fichiers
    window.uiAnimations = animations;
});

// Animation du Hero
function animateHero() {
    const tl = gsap.timeline();
    
    tl.to('.main-title', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out'
    })
    .to('.subtitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.5')
    .to('.figure', {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
    }, '-=0.5');

    // Animation des chiffres
    animateNumbers();
}

// Animation des chiffres clés
function animateNumbers() {
    const numbers = document.querySelectorAll('.number');
    
    numbers.forEach(number => {
        const finalValue = parseInt(number.getAttribute('data-value'));
        let startValue = 0;
        const duration = 2000;
        const increment = finalValue / (duration / 16);

        const updateNumber = () => {
            startValue += increment;
            if(startValue < finalValue) {
                number.textContent = Math.floor(startValue);
                requestAnimationFrame(updateNumber);
            } else {
                number.textContent = finalValue;
            }
        };

        updateNumber();
    });
}

// Animations au scroll
function initScrollAnimations() {
    // Animation des sections
    gsap.utils.toArray('.section').forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power3.out'
        });
    });

    // Animation des cartes statistiques
    gsap.utils.toArray('.stats-card').forEach(card => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out'
        });
    });
}

// Parallax Effect sur le Hero
function initParallax() {
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        
        const moveX = (mouseX - windowWidth/2) * 0.01;
        const moveY = (mouseY - windowHeight/2) * 0.01;

        gsap.to('.hero-content', {
            x: moveX,
            y: moveY,
            duration: 1,
            ease: 'power3.out'
        });
    });
}

// Smooth Scroll
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            gsap.to(window, {
                duration: 1,
                scrollTo: {
                    y: target,
                    offsetY: 70
                },
                ease: 'power3.inOut'
            });
        });
    });
}

// Animation des facteurs de sécurité
function animateFactors() {
    gsap.utils.toArray('.factor-bar').forEach(bar => {
        gsap.to(bar, {
            width: bar.style.width,
            duration: 1.5,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: bar,
                start: 'top 80%'
            }
        });
    });
}

// Animation des cartes d'insights
function animateInsightCards() {
    gsap.from('.insight-card', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.insights-grid',
            start: 'top 80%'
        }
    });
}

// Animation de la timeline de prévention
function animateTimeline() {
    const timelineItems = gsap.utils.toArray('.timeline-item');
    
    timelineItems.forEach((item, index) => {
        gsap.from(item, {
            x: -50,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.2,
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    });
}

// Animation des cartes de prévention
function animatePreventionCards() {
    const cards = gsap.utils.toArray('.prevention-card');
    
    cards.forEach((card, index) => {
        gsap.from(card, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.2,
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });

        // Animation des statistiques
        const stats = card.querySelectorAll('.stat-number');
        stats.forEach(stat => {
            const value = parseInt(stat.textContent);
            gsap.from(stat, {
                textContent: 0,
                duration: 2,
                ease: 'power1.out',
                snap: { textContent: 1 },
                scrollTrigger: {
                    trigger: stat,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            });
        });
    });
}

// Animation de la section contact
function animateContact() {
    // Animation de la carte d'information
    gsap.from('.info-card', {
        x: -50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: '.info-card',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });

    // Animation des éléments d'information
    gsap.from('.info-item', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.info-content',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });

    // Animation du formulaire
    gsap.from('.contact-form', {
        x: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: '.contact-form',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });
}

// Animation des liens sociaux
function animateSocialLinks() {
    const socialBtns = gsap.utils.toArray('.social-btn');
    
    socialBtns.forEach((btn, index) => {
        gsap.from(btn, {
            y: 20,
            opacity: 0,
            duration: 0.5,
            delay: index * 0.1,
            scrollTrigger: {
                trigger: '.social-links',
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            }
        });
    });
}

// Animation de la section Méthodologie
function animateMethodology() {
    // Animation du titre de la section
    gsap.from('.methodology .section-title', {
        opacity: 0,
        y: 30,
        duration: 1,
        scrollTrigger: {
            trigger: '.methodology',
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });

    // Animation des cartes de méthodologie
    gsap.utils.toArray('.methodology-card').forEach((card, index) => {
        // Animation de la carte
        gsap.from(card, {
            opacity: 0,
            y: 50,
            duration: 0.8,
            delay: index * 0.2,
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        });

        // Animation de l'icône
        const icon = card.querySelector('.methodology-icon');
        if (icon) {
            gsap.from(icon, {
                opacity: 0,
                scale: 0,
                rotation: -180,
                duration: 0.6,
                delay: (index * 0.2) + 0.3,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            });
        }

        // Animation du texte
        const content = card.querySelector('.methodology-content');
        if (content) {
            gsap.from(content, {
                opacity: 0,
                x: -30,
                duration: 0.8,
                delay: (index * 0.2) + 0.4,
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            });
        }
    });

    // Animation des points clés si présents
    gsap.utils.toArray('.key-point').forEach((point, index) => {
        gsap.from(point, {
            opacity: 0,
            x: index % 2 === 0 ? -50 : 50,
            duration: 0.8,
            scrollTrigger: {
                trigger: point,
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        });
    });
}

// Fonction d'initialisation principale
function initAnimations() {
    initScrollAnimations();
    animateFactors();
    animateInsightCards();
    animateTimeline();
    animatePreventionCards();
    animateContact();
    animateSocialLinks();
    animateMethodology();
    initParallax();
    initSmoothScroll();
}

// Initialisation au chargement de la page
window.addEventListener('load', initAnimations);

// Animations GSAP pour l'interface
class UIAnimations {
    constructor() {
        this.initScrollAnimations();
        this.initHoverEffects();
        this.initLoaderAnimation();
        this.initChartAnimations();
    }

    initScrollAnimations() {
        // Animation des cartes de prévention
        gsap.from('.prevention-card', {
            scrollTrigger: {
                trigger: '.prevention-section',
                start: 'top 80%'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2
        });

        // Animation des statistiques
        gsap.from('.stats-grid-national > div', {
            scrollTrigger: {
                trigger: '.stats-dashboard',
                start: 'top 75%'
            },
            scale: 0.5,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1
        });

        // Animation des actualités
        gsap.from('.news-card', {
            scrollTrigger: {
                trigger: '.news-section',
                start: 'top 70%'
            },
            x: -50,
            opacity: 0,
            duration: 0.7,
            stagger: 0.15
        });
    }

    initHoverEffects() {
        // Effet de survol sur les boutons
        const buttons = document.querySelectorAll('button, .filter-btn');
        buttons.forEach(button => {
            button.addEventListener('mouseenter', () => {
                gsap.to(button, {
                    scale: 1.05,
                    duration: 0.3
                });
            });

            button.addEventListener('mouseleave', () => {
                gsap.to(button, {
                    scale: 1,
                    duration: 0.3
                });
            });
        });

        // Animation des cartes au survol
        const cards = document.querySelectorAll('.prevention-card, .news-card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                gsap.to(card, {
                    y: -10,
                    boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
                    duration: 0.3
                });
            });

            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    y: 0,
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    duration: 0.3
                });
            });
        });
    }

    initLoaderAnimation() {
        const tl = gsap.timeline();
        
        tl.to('.loader', {
            opacity: 0,
            duration: 1,
            onComplete: () => {
                document.querySelector('.loader').style.display = 'none';
            }
        });

        tl.from('.hero', {
            y: 30,
            opacity: 0,
            duration: 1
        }, '-=0.5');

        tl.from('.nav-links li', {
            y: -20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1
        }, '-=0.5');
    }

    initChartAnimations() {
        // Animation des graphiques lors de leur création
        const animateChart = (chart) => {
            gsap.from(chart.canvas, {
                scale: 0.8,
                opacity: 0,
                duration: 1,
                ease: "back.out(1.7)"
            });
        };

        // Observer pour détecter les nouveaux graphiques
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.tagName === 'CANVAS') {
                        animateChart(node);
                    }
                });
            });
        });

        // Observer le conteneur des graphiques
        const chartContainers = document.querySelectorAll('.chart-container');
        chartContainers.forEach(container => {
            observer.observe(container, { childList: true });
        });
    }

    // Animation spéciale pour la comparaison des régions
    animateComparison(data) {
        const elements = document.querySelectorAll('.comparison-item');
        
        gsap.from(elements, {
            x: -30,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out"
        });

        // Animation des barres de progression
        gsap.from('.progress-bar', {
            width: 0,
            duration: 1,
            ease: "power1.inOut",
            stagger: 0.2
        });
    }

    // Animation pour les mises à jour de données
    animateDataUpdate(element) {
        gsap.from(element, {
            backgroundColor: 'rgba(255,255,0,0.2)',
            duration: 1,
            clearProps: "backgroundColor"
        });
    }
}

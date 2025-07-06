// Typing animation
const typingText = document.querySelector('.typing-text');
const words = [
    'Mahasiswa Sistem Informasi',
    'Aktif Organisasi',
    'Web & App Enthusiast'
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }
    
    let typeSpeed = 100;
    
    if (isDeleting) {
        typeSpeed = 50;
    }
    
    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 2000; // Pause at end
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500; // Pause before typing next word
    }
    
    setTimeout(typeWriter, typeSpeed);
}

// Start typing animation after page loads
window.addEventListener('load', () => {
    setTimeout(typeWriter, 2000); // Start after 2 seconds
});

// Enhanced smooth scrolling with animations
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Add scroll animation class
            target.classList.add('scroll-target');
            
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Remove class after animation
            setTimeout(() => {
                target.classList.remove('scroll-target');
            }, 1000);
        }
    });
});

// Scroll progress bar
function initScrollProgress() {
    const progressBar = document.querySelector('.scroll-progress-bar');
    
    if (progressBar) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            
            progressBar.style.width = scrollPercent + '%';
        });
    }
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Add staggered animations for child elements
                const animatedElements = entry.target.querySelectorAll('.animate-stagger');
                animatedElements.forEach((el, index) => {
                    setTimeout(() => {
                        el.classList.add('animate-in');
                    }, index * 100);
                });
            }
        });
    }, observerOptions);

    // Observe sections for animations
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Parallax effect for hero section
function initParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax');
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Enhanced navigation with active section highlighting
function initActiveSectionHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    function updateActiveSection() {
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveSection);
    updateActiveSection(); // Initial call
}

// Enhanced scroll to top with progress indicator
function initScrollToTop() {
    const scrollTopBtn = document.querySelector('.scroll-top');
    
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            const scrollPercent = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('show');
                scrollTopBtn.style.setProperty('--scroll-progress', `${scrollPercent}%`);
            } else {
                scrollTopBtn.classList.remove('show');
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Theme toggle functionality
const themeToggle = document.querySelector('.theme-toggle');
const html = document.documentElement;

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);

// Mobile menu toggle with enhanced animations
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu) navMenu.classList.remove('active');
        if (navToggle) navToggle.classList.remove('active');
    });
});

// Skills toggle functionality
function initSkillsToggle() {
    const skillCategories = document.querySelectorAll('.skill-category');
    const badgeGroups = document.querySelectorAll('.badge-group');
    
    if (skillCategories.length === 0) {
        return;
    }
    
    skillCategories.forEach(category => {
        category.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const categoryId = this.getAttribute('data-category');
            
            // Remove active class from all categories and badge groups
            skillCategories.forEach(cat => cat.classList.remove('active'));
            badgeGroups.forEach(group => group.classList.remove('active'));
            
            // Add active class to clicked category and corresponding badge group
            this.classList.add('active');
            const targetGroup = document.getElementById(categoryId);
            if (targetGroup) {
                targetGroup.classList.add('active');
            }
        });
    });
}

// Book animation functionality
function initBookAnimation() {
    const bookContainers = document.querySelectorAll('.book-container');
    
    bookContainers.forEach(container => {
        const closeBtn = container.querySelector('.close-book');
        
        // Open book on click
        container.addEventListener('click', function(e) {
            if (!this.classList.contains('open')) {
                this.classList.add('open');
            }
        });
        
        // Close book on close button click
        if (closeBtn) {
            closeBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                container.classList.remove('open');
            });
        }
        
        // Close book when clicking outside
        document.addEventListener('click', function(e) {
            if (!container.contains(e.target)) {
                container.classList.remove('open');
            }
        });
    });
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initScrollProgress();
    initScrollAnimations();
    initParallax();
    initActiveSectionHighlight();
    initScrollToTop();
    initSkillsToggle();
    initBookAnimation();
    
    // Set skill bar width based on data-level
    document.querySelectorAll('.skill-bar').forEach(bar => {
        const level = bar.getAttribute('data-level');
        if (level) {
            bar.style.width = level + '%';
        }
    });

    // Set circle progress for soft skills
    document.querySelectorAll('.skill-item .circle-bar').forEach(bar => {
        const item = bar.closest('.skill-item');
        if (item) {
            const level = item.getAttribute('data-level');
            if (level) {
                const percent = Math.max(0, Math.min(100, parseInt(level)));
                const circumference = 88;
                const offset = circumference * (1 - percent / 100);
                bar.style.strokeDashoffset = offset;
            }
        }
    });
});

// Initialize on window load as well
window.addEventListener('load', () => {
    initSkillsToggle();
    initBookAnimation();
});

 
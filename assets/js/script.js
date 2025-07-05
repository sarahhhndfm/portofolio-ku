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

// Smooth scrolling for navigation links
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

// Mobile menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu) navMenu.classList.remove('active');
    });
});

// Scroll to top functionality
const scrollTopBtn = document.querySelector('.scroll-top');

if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('show');
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

document.addEventListener('DOMContentLoaded', initSkillsToggle);
window.addEventListener('load', initSkillsToggle);
setTimeout(initSkillsToggle, 1000);

document.addEventListener('DOMContentLoaded', () => {
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

document.addEventListener('DOMContentLoaded', initBookAnimation);
window.addEventListener('load', initBookAnimation);

 
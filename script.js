function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    // Save preference
    const isDark = body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Apply theme immediately to prevent flashing
(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
})();

// Initialize Navbar and Theme Toggle
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');

    if (navLinks && !document.querySelector('.theme-toggle')) {
        const toggleLi = document.createElement('li');
        toggleLi.className = 'theme-toggle-container';
        toggleLi.style.cssText = 'display: flex; align-items: center; margin-left: 15px;';
        toggleLi.innerHTML = `
            <div class="theme-toggle" onclick="toggleTheme()" title="Toggle Theme">
                <div class="toggle-circle"></div>
            </div>
        `;
        navLinks.appendChild(toggleLi);
    }

    // Mobile Menu Logic
    if (navbar && navLinks) {
        const mobileBtn = document.createElement('button');
        mobileBtn.className = 'mobile-menu-btn';
        mobileBtn.setAttribute('aria-label', 'Toggle Menu');
        mobileBtn.innerHTML = '<span></span><span></span><span></span>';

        navbar.insertBefore(mobileBtn, navLinks);

        const toggleMenu = () => {
            mobileBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        };

        mobileBtn.onclick = (e) => {
            e.stopPropagation();
            toggleMenu();
        };

        // Close menu when clicking outside or on a link
        document.addEventListener('click', (e) => {
            if (navLinks.classList.contains('active') && !navLinks.contains(e.target) && !mobileBtn.contains(e.target)) {
                toggleMenu();
            }
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) toggleMenu();
            });
        });
    }

    // Scroll Effect for Navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});

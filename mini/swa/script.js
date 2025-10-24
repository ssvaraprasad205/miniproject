document.addEventListener("DOMContentLoaded", function() {

    // --- 1. TYPING EFFECT (Unchanged) ---
    const typingElement = document.querySelector(".typing-effect");
    const textsToType = [
        "Java Developer",
        "Web Developer",
        "Tech Enthusiast",
        "Problem Solver"
    ];

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    if (typingElement) { // Check if element exists
        function type() {
            const currentText = textsToType[textIndex];

            if (isDeleting) {
                typingElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentText.length) {
                setTimeout(() => isDeleting = true, 2000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % textsToType.length;
            }

            const typeSpeed = isDeleting ? 75 : 150;
            setTimeout(type, typeSpeed);
        }

        type();
    }


    // --- 2. SCROLL-IN ANIMATIONS (Intersection Observer) ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // 10% visible
    };

    function observerCallback(entries, observer) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {

                const needsStagger = entry.target.classList.contains('skill-card') ||
                    entry.target.classList.contains('project-card') ||
                    entry.target.classList.contains('resume-item') ||
                    entry.target.classList.contains('contact-item');

                const delay = needsStagger ? index * 100 : 0;

                setTimeout(() => {
                    entry.target.classList.add("show");
                }, delay);

                observer.unobserve(entry.target);
            }
        });
    }

    const scrollObserver = new IntersectionObserver(observerCallback, observerOptions);

    const elementsToAnimate = document.querySelectorAll(
        '.animated-section, .skill-card, .project-card, .resume-item,.contact-item'
    );
    elementsToAnimate.forEach(el => scrollObserver.observe(el));


    // --- 3. ACTIVE NAV LINK ON SCROLL (Unchanged) ---
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav .nav-links a");

    window.addEventListener("scroll", () => {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Adjust the offset calculation if header height changes significantly
            if (window.pageYOffset >= (sectionTop - sectionHeight / 3)) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }
        });
    });


    // --- 4. PARALLAX STARS EFFECT SCRIPT ---
    function generateShadows(n) {
        const randomPixel = () => Math.floor(Math.random() * 2000);
        let value = `${randomPixel()}px ${randomPixel()}px #FFF`;
        for (let i = 2; i <= n; i++) {
            value += `, ${randomPixel()}px ${randomPixel()}px #FFF`;
        }
        return value;
    }

    const shadowsSmall = generateShadows(700);
    const shadowsMedium = generateShadows(200);
    const shadowsBig = generateShadows(100);

    const stars1 = document.getElementById('stars');
    const stars2 = document.getElementById('stars2');
    const stars3 = document.getElementById('stars3');

    // Use requestAnimationFrame to set variables after layout is likely stable
    requestAnimationFrame(() => {
        if (stars1) {
            stars1.style.setProperty('--shadows-small', shadowsSmall);
        }
        if (stars2) {
            stars2.style.setProperty('--shadows-medium', shadowsMedium);
        }
        if (stars3) {
            stars3.style.setProperty('--shadows-big', shadowsBig);
        }
    });
    // --- END OF STAR SCRIPT ---


    // --- 5. NEW: THEME TOGGLE SCRIPT ---
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = themeToggleButton ? themeToggleButton.querySelector('i') : null;

    // Function to set the theme (light or dark)
    const setTheme = (theme) => {
        if (theme === 'light') {
            body.classList.add('light-theme');
            if (themeIcon) {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
            localStorage.setItem('theme', 'light');
        } else {
            // Default to dark theme
            body.classList.remove('light-theme');
            if (themeIcon) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            }
            localStorage.setItem('theme', 'dark');
        }
    };

    // Check localStorage for saved theme preference on page load
    const savedTheme = localStorage.getItem('theme');
    // Set initial theme based on saved preference or default to dark
    setTheme(savedTheme === 'light' ? 'light' : 'dark');


    // Add event listener to the button
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', () => {
            // Toggle the theme
            if (body.classList.contains('light-theme')) {
                setTheme('dark');
            } else {
                setTheme('light');
            }
        });
    }
    // --- END OF THEME TOGGLE SCRIPT ---

});
document.addEventListener("DOMContentLoaded", function() {

    // --- 1. TYPING EFFECT (Unchanged) ---
    const typingElement = document.querySelector(".typing-effect");
    const textsToType = [
        "Java Developer",
        "Web Developer",
        "Tech Enthusiast",
        "Problem Solver"
    ];

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    if (typingElement) { // Check if element exists
        function type() {
            const currentText = textsToType[textIndex];

            if (isDeleting) {
                typingElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentText.length) {
                setTimeout(() => isDeleting = true, 2000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % textsToType.length;
            }

            const typeSpeed = isDeleting ? 75 : 150;
            setTimeout(type, typeSpeed);
        }

        type();
    }


    // --- 2. SCROLL-IN ANIMATIONS (Intersection Observer) ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // 10% visible
    };

    function observerCallback(entries, observer) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {

                const needsStagger = entry.target.classList.contains('skill-card') ||
                    entry.target.classList.contains('project-card') ||
                    entry.target.classList.contains('resume-item') ||
                    entry.target.classList.contains('contact-item');

                const delay = needsStagger ? index * 100 : 0;

                setTimeout(() => {
                    entry.target.classList.add("show");
                }, delay);

                observer.unobserve(entry.target);
            }
        });
    }

    const scrollObserver = new IntersectionObserver(observerCallback, observerOptions);

    const elementsToAnimate = document.querySelectorAll(
        '.animated-section, .skill-card, .project-card, .resume-item,.contact-item'
    );
    elementsToAnimate.forEach(el => scrollObserver.observe(el));


    // --- 3. ACTIVE NAV LINK ON SCROLL (Unchanged) ---
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav .nav-links a");

    window.addEventListener("scroll", () => {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Adjust the offset calculation if header height changes significantly
            if (window.pageYOffset >= (sectionTop - sectionHeight / 3)) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }
        });
    });


    // --- 4. PARALLAX STARS EFFECT SCRIPT ---
    function generateShadows(n) {
        const randomPixel = () => Math.floor(Math.random() * 2000);
        let value = `${randomPixel()}px ${randomPixel()}px #FFF`;
        for (let i = 2; i <= n; i++) {
            value += `, ${randomPixel()}px ${randomPixel()}px #FFF`;
        }
        return value;
    }

    const shadowsSmall = generateShadows(700);
    const shadowsMedium = generateShadows(200);
    const shadowsBig = generateShadows(100);

    const stars1 = document.getElementById('stars');
    const stars2 = document.getElementById('stars2');
    const stars3 = document.getElementById('stars3');

    // Use requestAnimationFrame to set variables after layout is likely stable
    requestAnimationFrame(() => {
        if (stars1) {
            stars1.style.setProperty('--shadows-small', shadowsSmall);
        }
        if (stars2) {
            stars2.style.setProperty('--shadows-medium', shadowsMedium);
        }
        if (stars3) {
            stars3.style.setProperty('--shadows-big', shadowsBig);
        }
    });
    // --- END OF STAR SCRIPT ---


    // --- 5. NEW: THEME TOGGLE SCRIPT ---
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = themeToggleButton ? themeToggleButton.querySelector('i') : null;

    // Function to set the theme (light or dark)
    const setTheme = (theme) => {
        if (theme === 'light') {
            body.classList.add('light-theme');
            if (themeIcon) {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
            localStorage.setItem('theme', 'light');
        } else {
            // Default to dark theme
            body.classList.remove('light-theme');
            if (themeIcon) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            }
            localStorage.setItem('theme', 'dark');
        }
    };

    // Check localStorage for saved theme preference on page load
    const savedTheme = localStorage.getItem('theme');
    // Set initial theme based on saved preference or default to dark
    setTheme(savedTheme === 'light' ? 'light' : 'dark');


    // Add event listener to the button
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', () => {
            // Toggle the theme
            if (body.classList.contains('light-theme')) {
                setTheme('dark');
            } else {
                setTheme('light');
            }
        });
    }
    // --- END OF THEME TOGGLE SCRIPT ---

});

document.addEventListener("DOMContentLoaded", function() {

    // --- 1. TYPING EFFECT (Unchanged) ---
    const typingElement = document.querySelector(".typing-effect");
    const textsToType = [
        "Java Developer",
        "Web Developer",
        "Tech Enthusiast",
        "Problem Solver"
    ];

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    if (typingElement) { // Check if element exists
        function type() {
            const currentText = textsToType[textIndex];

            if (isDeleting) {
                typingElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentText.length) {
                setTimeout(() => isDeleting = true, 2000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % textsToType.length;
            }

            const typeSpeed = isDeleting ? 75 : 150;
            setTimeout(type, typeSpeed);
        }

        type();
    }


    // --- 2. SCROLL-IN ANIMATIONS (Intersection Observer) ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // 10% visible
    };

    function observerCallback(entries, observer) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {

                const needsStagger = entry.target.classList.contains('skill-card') ||
                    entry.target.classList.contains('project-card') ||
                    entry.target.classList.contains('resume-item') ||
                    entry.target.classList.contains('contact-item');

                const delay = needsStagger ? index * 100 : 0;

                setTimeout(() => {
                    entry.target.classList.add("show");
                }, delay);

                observer.unobserve(entry.target);
            }
        });
    }

    const scrollObserver = new IntersectionObserver(observerCallback, observerOptions);

    const elementsToAnimate = document.querySelectorAll(
        '.animated-section, .skill-card, .project-card, .resume-item,.contact-item'
    );
    elementsToAnimate.forEach(el => scrollObserver.observe(el));


    // --- 3. ACTIVE NAV LINK ON SCROLL (Unchanged) ---
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav .nav-links a");

    window.addEventListener("scroll", () => {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Adjust the offset calculation if header height changes significantly
            if (window.pageYOffset >= (sectionTop - sectionHeight / 3)) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }
        });
    });


    // --- 4. PARALLAX STARS EFFECT SCRIPT ---
    function generateShadows(n) {
        const randomPixel = () => Math.floor(Math.random() * 2000);
        let value = `${randomPixel()}px ${randomPixel()}px #FFF`;
        for (let i = 2; i <= n; i++) {
            value += `, ${randomPixel()}px ${randomPixel()}px #FFF`;
        }
        return value;
    }

    const shadowsSmall = generateShadows(700);
    const shadowsMedium = generateShadows(200);
    const shadowsBig = generateShadows(100);

    const stars1 = document.getElementById('stars');
    const stars2 = document.getElementById('stars2');
    const stars3 = document.getElementById('stars3');

    // Use requestAnimationFrame to set variables after layout is likely stable
    requestAnimationFrame(() => {
        if (stars1) {
            stars1.style.setProperty('--shadows-small', shadowsSmall);
        }
        if (stars2) {
            stars2.style.setProperty('--shadows-medium', shadowsMedium);
        }
        if (stars3) {
            stars3.style.setProperty('--shadows-big', shadowsBig);
        }
    });
    // --- END OF STAR SCRIPT ---


    // --- 5. NEW: THEME TOGGLE SCRIPT ---
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = themeToggleButton ? themeToggleButton.querySelector('i') : null;

    // Function to set the theme (light or dark)
    const setTheme = (theme) => {
        if (theme === 'light') {
            body.classList.add('light-theme');
            if (themeIcon) {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
            localStorage.setItem('theme', 'light');
        } else {
            // Default to dark theme
            body.classList.remove('light-theme');
            if (themeIcon) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            }
            localStorage.setItem('theme', 'dark');
        }
    };

    // Check localStorage for saved theme preference on page load
    const savedTheme = localStorage.getItem('theme');
    // Set initial theme based on saved preference or default to dark
    setTheme(savedTheme === 'light' ? 'light' : 'dark');


    // Add event listener to the button
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', () => {
            // Toggle the theme
            if (body.classList.contains('light-theme')) {
                setTheme('dark');
            } else {
                setTheme('light');
            }
        });
    }
    // --- END OF THEME TOGGLE SCRIPT ---

});
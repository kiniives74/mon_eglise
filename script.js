
        // Burger menu
        const burgerBtn = document.getElementById('burgerBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        const burgerIcon = burgerBtn.querySelector('i');

        burgerBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
            burgerIcon.className = mobileMenu.classList.contains('open')
                ? 'fa-solid fa-x'
                : 'fa-solid fa-bars';
        });

        mobileMenu.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
                burgerIcon.className = 'fa-solid fa-bars';
            });
        });

        // Gallery slider
        const gallery = document.getElementById('gallery');
        const scrollAmt = 420;

        document.getElementById('next').addEventListener('click', () => {
            gallery.scrollBy({ left: scrollAmt, behavior: 'smooth' });
        });

        document.getElementById('prev').addEventListener('click', () => {
            gallery.scrollBy({ left: -scrollAmt, behavior: 'smooth' });
        });

        // Header opacity on scroll
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            header.style.background = window.scrollY > 60
                ? 'rgba(10, 12, 16, 0.98)'
                : 'rgba(10, 12, 16, 0.85)';
        });
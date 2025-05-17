   const menuToggle = document.querySelector('.menuToggle');
    const navMenu = document.querySelector('.navMenu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });

document.querySelectorAll('.ham-menu__nav a').forEach((link) => {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        const href = this.getAttribute('href');
        const section = document.querySelector(href);

        const top = section.offsetTop - (window.innerHeight / 2) + (section.offsetHeight / 2);

        window.scrollTo({
            top: top,
            behavior: 'smooth'
        });

        // Desmarcar o checkbox
        document.querySelector('.menu-faketrigger').checked = false;
    });
});

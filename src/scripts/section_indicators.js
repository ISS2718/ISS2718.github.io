const scrollContainer = document.querySelector('.offer__scroll-container');
const sectionIndicators = {
    'about-section': document.querySelector('.sidebar__navigation ul li a[href="#about-section"] .fa'),
    'project-section': document.querySelector('.sidebar__navigation ul li a[href="#project-section"] .fa'),
    'contribution-section': document.querySelector('.sidebar__navigation ul li a[href="#contribution-section"] .fa')
};

scrollContainer.addEventListener('scroll', function() {
    const hamMenu = document.querySelector('.ham-menu');
    const style = window.getComputedStyle(hamMenu);

    // Se o ham-menu estiver oculto, retorne imediatamente
    if (style.display !== 'none') {
        return;
    }

    const sections = document.querySelectorAll('section');
    let scrollPos = scrollContainer.scrollTop + (scrollContainer.offsetHeight / 2);

    sections.forEach((section) => {
        let offsetTop = section.offsetTop - scrollContainer.offsetTop;
        if ((offsetTop <= scrollPos) && (offsetTop + section.offsetHeight > scrollPos)) {
            let sectionCenter = section.offsetTop - scrollContainer.offsetTop + (section.offsetHeight / 2);
            let distanceToCenter = Math.abs(scrollPos - sectionCenter);
            let scale = 2 - (distanceToCenter / (scrollContainer.offsetHeight / 2));
            scale = Math.max(scale, 1);

            Object.keys(sectionIndicators).forEach((key) => {
                sectionIndicators[key].style.transform = `scaleX(${section.id === key ? scale : 1})`;
                Object.keys(sectionIndicators).forEach((key) => {
                    let indicator = sectionIndicators[key];
                    indicator.style.transform = `scaleX(${section.id === key ? scale : 1})`;
                    if (section.id === key) {
                        indicator.classList.add('fast-transition');
                    } else {
                        indicator.classList.remove('fast-transition');
                    }
                });
            });
        }
    });
});

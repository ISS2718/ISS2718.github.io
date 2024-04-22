window.addEventListener('load', function(){
    new Glider(document.querySelector('.projects .glider'), {
        slidesToShow: 1,
        dots: '#project-nav-bars',
        draggable: true,
        arrows: {
          prev: '.projects .glider-prev',
          next: '.projects .glider-next'
        }
    });

    new Glider(document.querySelector('.contribution .glider'), {
        slidesToShow: 1,
        dots: '#contribution-nav-bars',
        draggable: true,
        arrows: {
          prev: '.contribution .glider-prev',
          next: '.contribution .glider-next'
        }
    });
})
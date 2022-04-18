let left_burger = document.getElementById('left-burger'),
socials_menu = document.getElementById('socials-menu'),
menu_burger = document.getElementById('menu-burger'),
burger_hide = document.querySelector('#burger_hide'),
left_menu = document.querySelector('#left-menu'),
side_menu = document.querySelector('.side-menu');

left_burger.addEventListener('click', function(e) {
    e.preventDefault();
    this.style.display = 'none';
    left_menu.classList.add('active');
    side_menu.classList.remove('active');
    socials_menu.style.setProperty('display', 'none', 'important');
    menu_burger.style.setProperty('display', 'flex', 'important');
    burger_hide.classList.remove("burger_hide");
    burger_hide.classList.add('col-2', 'col-sm-2', 'col-md-1', 'col-lg-1');
});
menu_burger.addEventListener('click', function() {
    burger_hide.classList.remove('col-2', 'col-sm-2', 'col-md-1', 'col-lg-1');
    burger_hide.classList.add("burger_hide");
    this.style.display = 'none';
    socials_menu.style.setProperty('display', 'flex', 'important');
    left_burger.style.display = 'flex';
    left_menu.classList.remove('active');
    side_menu.classList.add('active');
});

// 

const open_item = document.getElementsByClassName('openitem');

for(i = 0; i < open_item.length;i++) {
    open_item[i].addEventListener('click', function() {
        this.classList.toggle('active');
    });
}


// 

$(document).ready(function() {
    var slider = $('#Slider-Bar').lightSlider({
        autoWidth:true,
        loop:true,
        controls: false,
        pager: false,
        speed: 1000,
        onSliderLoad: function() {
            $('#Slider-Bar').removeClass('cS-hidden');
        } 
    });
    $('#goToPrevSlide').on('click', function () {
        slider.goToPrevSlide();
    });
    $('#goToNextSlide').on('click', function () {
        slider.goToNextSlide();
    });
});
console.log('Web-Developer: AvoPro');
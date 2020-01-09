/*=*=*==*=*=*=*
	VERSION       		:  3.0,
	CODED BY      		:  AHMED ALI SALIH,
	MY WORK EMAIL 		: Ahmedsalihdev@gmail.com,
	MY PORTFOLIO			: https://ahmedsalih.netlify.com
*=*=*==*=*=*=*/


// # START PROJECT SCRIPT.

//=> HANDLING THE USED LIBS.
// Fire the mixer plug-in [mixItUp].
var shuffler = document.querySelector('#mixGallery_elements');
var mixer = mixitup(shuffler);



// SwiperJS settings.
var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows : true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});



// Add [AOS] animation library to deal with DOM content. 
AOS.init({
  easing: 'ease-in-out-sine'
});




//=> WRITE MY CUSTOM SCRIPT.
// Make header height more responsive.
window.addEventListener('resize', function () {
  var header = document.querySelector('#header');

  header.offsetHeight == this.height;
  // console.log(header.offsetHeight)
})

// Sudo site nav [active list].  DDDD
$('nav.sudo_nav ul li').on('click', function () {
  $(this).addClass('sudoNaveElActive').siblings().removeClass('sudoNaveElActive')
})

// Gallery nav [active list].
$('nav.gallery_nav ul li').on('click', function () {
  $(this).addClass('galleryNaveElActive').siblings().removeClass('galleryNaveElActive')
})


//=> Handling the mini screens navbar.
// Toggle nav menu
var navBtn = document.querySelector('button.close_control')
var navMenu = document.querySelector('section.lists')

navBtn.addEventListener('click', function () {
  // Btn Toggler.
  navMenu.classList.toggle('toggleNavMenu');


  var barOne = document.querySelector('#bar_one')
  var barTow = document.querySelector('#bar_tow')
  var barThree = document.querySelector('#bar_three')

  // Animate the toggler button.
  barOne.classList.toggle('barOneStyle')
  barTow.classList.toggle('barTowStyle')
  barThree.classList.toggle('barThreeStyle')
})

// Toggle opacity in nav bar.
window.onscroll = function () {
  var sudoNav = document.querySelector('nav.sudo_nav');

  (this.pageYOffset >= sudoNav.offsetHeight) ?
    sudoNav.style.opacity = '0.9' :
    sudoNav.style.opacity = '1'
}

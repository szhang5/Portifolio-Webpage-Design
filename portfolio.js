function goToHomepage() {
	window.location.href = "profile.html";
}

function goToPortifolio() {
	// alert("click");
	window.location.href = "portfolio.html";
} 


/*-- 3D CAROUSEL FUNCTION --*/
let carousel = document.querySelector('.carousel');
let cell = document.querySelector('.cell');
let object = document.querySelector('.object');
// console.log(carousel.offsetWidth);

let cellCount = 4;
let selectedIndex = 0;

function rotateCarousel() {
  let angle = selectedIndex / cellCount * -360;
  carousel.style.transform = 'translateZ(-712px) rotateY(' + angle + 'deg)';
}


let prevButton = document.querySelector('.left-btn');
if(prevButton) {
	prevButton.addEventListener( 'click', function() {
	  selectedIndex--;
	  rotateCarousel();
	});
}

let nextButton = document.querySelector('.right-btn');
if(nextButton){
	nextButton.addEventListener( 'click', function() {
	  selectedIndex++;
	  rotateCarousel();
	});
}


/*-- HAMBUGER FUNCTION --*/
let nav = document.querySelector('.js--nav-icon');
let navIcon = document.querySelector('.js--nav-icon i');
let mainNav = document.querySelector('.main-nav');
if (nav) {
  nav.addEventListener('click', function () {
    navIcon.classList.toggle('fa-times');
    navIcon.classList.toggle('fa-bars');

    if (mainNav.classList.contains('is-visible')) {
        mainNav.classList.remove('is-visible');
    } else {
      let getHeight = function () {
        mainNav.style.display = 'block'; 
        let height = mainNav.scrollHeight + 'px'; 
        mainNav.style.display = ''; 
        return height;
      };
      
      let height = getHeight(); 
      mainNav.classList.add('is-visible'); 
      mainNav.style.height = height; 

      window.setTimeout(function () {
        mainNav.style.height = '';
      }, 350);
    }
  });
}


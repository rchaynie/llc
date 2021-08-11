const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);
const slideWidth = slides[0].getBoundingClientRect().width;


// arrange slide next to one another 


const setSlidePosition = (slide, index) => {
	slide.style.left = slideWidth * index + 'px';
}


slides.forEach(setSlidePosition);

  
// functions ==============================
// ============================================

const moveToSlide = (track, currentSlide, targetSlide) => {
	track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
	currentSlide.classList.remove('current-slide');
	// currentSlide.classList.add('is-hidden');
	targetSlide.classList.add('current-slide');
	// targetSlide.classList.remove('is-hidden');
}

const updateDots = (currentDot, targetDot) => {
	currentDot.classList.remove('current-slide');
	targetDot.classList.add('current-slide');
}

const hideShowArrows = (slides,prevButton,nextButton,targetIndex) =>{ if (targetIndex === 0) {
		prevButton.classList.add('is-hidden');
		nextButton.classList.remove('is-hidden');
	}
	else if (targetIndex === slides.length - 1) {
		prevButton.classList.remove('is-hidden');
		nextButton.classList.add('is-hidden');
	}
	else {
		prevButton.classList.remove('is-hidden');
		nextButton.classList.remove('is-hidden');

	}
}


// right button 
nextButton.addEventListener('click', e => {
	// move the slide
	const currentSlide = track.querySelector('.current-slide');
	const nextSlide = currentSlide.nextElementSibling;
	const currentDot = dotsNav.querySelector('.current-slide');
	const nextDot = currentDot.nextElementSibling;
	const nextIndex = slides.findIndex(slide => slide === nextSlide);
	
	moveToSlide(track, currentSlide, nextSlide);
	updateDots(currentDot, nextDot);
	hideShowArrows(slides,prevButton,nextButton,nextIndex);
});


//left button
prevButton.addEventListener('click', e => {
	const currentSlide = track.querySelector('.current-slide');
	const prevSlide = currentSlide.previousElementSibling;
	const currentDot = dotsNav.querySelector('.current-slide');
	const prevDot = currentDot.previousElementSibling;
	const prevIndex = slides.findIndex(slide => slide === prevSlide);

	moveToSlide(track, currentSlide, prevSlide);
	updateDots(currentDot, prevDot);
	hideShowArrows(slides,prevButton,nextButton,prevIndex)
});

// dots

dotsNav.addEventListener('click', e => {


	const targetDot = e.target.closest('button');

	const currentSlide = track.querySelector('.current-slide');
	const currentDot = dotsNav.querySelector('.current-slide');
	const targetIndex = dots.findIndex(dot => dot === targetDot);
	const targetSlide = slides[targetIndex];

	moveToSlide(track, currentSlide, targetSlide);
	updateDots(currentDot, targetDot);
	hideShowArrows(slides,prevButton,nextButton,targetIndex)



});



const viewPort = document.querySelector('.carousel__track-container');
const viewPortWidth = viewPort.getBoundingClientRect().width;
console.log(viewPortWidth);

console.log(slideWidth)




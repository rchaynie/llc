$('.menu-toggle').click(function() {
	$('.site-nav').toggleClass('nav-open', 350);
	$(this).toggleClass('open');

})


const altLogo = document.getElementById("alt_logo");

const parallax1 = document.getElementById("parallax1");
const parallax2 = document.getElementById('parallax2');

const scrollDownClick = document.getElementById("scroll-down");

console.log(parallax1);


// window.addEventListener("scroll", function(){
// 	let offset = window.pageYOffset;
// 	parallax1.style.backgroundPositionY = offset * 0.7 + "px";
// 	if(offset >=599){
// 		altLogo.style.display="block";
// 	}
// 	else {
// 		altLogo.style.display="none";
// 	}
// });



// =============================SMOOTH SCROLLING =========
// ============================================================================

function smoothScroll(target,duration,targetPosition){
    target = document.querySelector(target);
    // let targetPosition = 1550;
    console.log(targetPosition)
    // let startPosition = 0;
    let startPosition = window.pageYOffset;
    // let startPosition = documment.getElementById("clickMe2");

    let distance = targetPosition - startPosition;
    let startTime = null;   

    function animation(currentTime){
        if(startTime === null) startTime = currentTime;
        let timeElapsed = currentTime - startTime;
        let run = ease(timeElapsed,startPosition,distance,duration)
        window.scrollTo(0,run);
        if(timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t,b,c,d){
        t /= d/2;
	    if (t < 1) return c/2*t*t + b;
	    t--;
	    return -c/2 * (t*(t-2) - 1) + b;
        }

    requestAnimationFrame(animation);
}



window.addEventListener("scroll", function(){
	let offset = window.pageYOffset;
	if(offset >=300){
		scrollDownClick.style.display="none";
	}
	else {
		scrollDownClick.style.display="block";
	}
});





const workScroll = document.getElementById('work-scroll');
const servicesScroll = document.getElementById('services-scroll');
const brandingScroll = document.getElementById('branding-scroll');
const mailScroll = document.getElementById('mail-scroll');

console.log(servicesScroll)



const brandIcon = document.getElementById('brand-icon');
const brandDiv = document.getElementById('branding-full');
const gcICON = document.getElementById('gc-icon');
const gcDiv = document.getElementById('gencon-full');

console.log(brandIcon);

brandIcon.addEventListener("click", function(){
	smoothScroll('.branding-full', 950, 555)
	if(brandDiv.style.display === "none"){
		brandDiv.style.display = "block";
	}
	else {
		brandDiv.style.display = "none";
	}
})

gcICON.addEventListener("click", function(){
	smoothScroll('.branding-full', 950, 555)
	if(brandDiv.style.display === "none"){
		gcICON.style.display = "block";
	}
	else {
		gcICON.style.display = "none";
	}
})




scrollDownClick.addEventListener("click", function() {
	smoothScroll(".box1",950, 755)
})


scrollDownClick.addEventListener("click", function() {
	smoothScroll(".box1",950, 755)
})

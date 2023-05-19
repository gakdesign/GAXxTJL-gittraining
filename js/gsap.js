( function($) {
	$(document).ready(function() {

// GSAP Initial
		console.clear();
		gsap.registerPlugin(ScrollTrigger);




gsap.to(".text-block", {
  scrollTrigger: {
    trigger: ".pin-this",
    markers: true,
    start: "top 5%",
    end: "100%",
    pin: ".text-block",
    scrub: 2,
  },
});
gsap.to(".image-block", {
  scale: 1.5,
  ease: "none",
  force3D: true,
  scrollTrigger: {
    scale: 2,
    trigger: ".pin-this",
    markers: true,
    start: "top 5%",
    end: "100%",
    pin: ".image-block",
    scrub: 0.5,
  },
  
});



});
} ) ( jQuery );
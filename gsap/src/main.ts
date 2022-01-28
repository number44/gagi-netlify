import './style.scss';
import gsap from 'gsap';
// gsap.registerPlugin(ScrollTrigger);
// const tl = gsap.timeline({ defaults: { duration: 1 } });

// tl.from('.link', { opacity: 0, scale: 0.1, stagger: 0.1 }).from('.greet', { scale: 0.1, x: 100, opacity: 0, stagger: 0.3 });
// gsap.from('.box', {
// 	scrollTrigger: {
// 		trigger: '#about',
// 		toggleActions: 'restart none none none',
// 	},
// 	opacity: 0,
// 	x: 10,
// 	rotate: 360,
// 	duration: 3,
// 	ease: 'circ',
// });

import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

gsap.to('.box', {
	scrollTrigger: {
		trigger: '.box',
		toggleActions: 'restart none none restart',
		markers: true,
		start: 'center center',
	},
	x: 0,
});

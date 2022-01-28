import './style.scss';
import gallery from './scripts/gallery';
import Map from './scripts/map';
import Scrolling from './scripts/scrolling';
import Swipers from './scripts/Swipers';
import Jumps from './scripts/jumps';
history.scrollRestoration = 'manual';
window.onbeforeunload = function () {
	window.scrollTo(0, 0);
};
gallery();
Map();
Scrolling();
Swipers();
Jumps();
// core version + navigation, pagination modules:
// import Swiper and modules styles
// configure Swiper to use modules

const preloader = document.querySelector('.preloader-bg');

const hero = document.querySelector('#hero');
import gsap from 'gsap';
window.onload = function () {
	preloader?.classList.add('hide');
	hero?.classList.remove('hidden');
	jump('#hero');
};
document.addEventListener('load', () => {});

import ScrollTrigger from 'gsap/ScrollTrigger';
import jump from 'jump.js';
gsap.registerPlugin(ScrollTrigger);

// gsap.to('.xdsad', {
// 	scrollTrigger: {
// 		trigger: '.tar',
// 		start: '-100px top',
// 		end: '+=300',
// 		pin: '.swiper-info',
// 	},
// });

ScrollTrigger.matchMedia({
	'(min-width : 768px)': () => {
		gsap.to('.xdsad', {
			scrollTrigger: {
				trigger: '.tar',
				start: '-100px top',
				end: '+=300',
				pin: '.swiper-info',
			},
		});
	},
});

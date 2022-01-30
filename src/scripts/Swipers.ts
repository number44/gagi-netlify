import 'swiper/css';
import 'swiper/css/pagination';

import 'swiper/css/effect-cube';
import 'swiper/css/effect-creative';
import Swiper, { Pagination, EffectCube, EffectCoverflow, EffectCards, Autoplay, Scrollbar, Navigation } from 'swiper';

const Swipers = () => {
	Swiper.use([Scrollbar, Pagination, EffectCube, EffectCoverflow, EffectCards, Autoplay, Navigation]);

	const swiper = new Swiper('.swiper', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,
		effect: 'fade',
		fadeEffect: {
			crossFade: true,
		},
		speed: 400,

		pagination: {
			el: '.swiper-pagination',
		},

		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		scrollbar: {
			el: '.swiper-scrollbar',
		},
	});
	swiper.init();

	// swiper.on('slideChangeTransitionStart', () => {
	// 	gsap.to('.hero-anim', { xPercent: 0, stagger: 0.1 });
	// });
	// swiper.on('slideChangeTransitionEnd', () => {
	// 	gsap.to('.hero-anim', { xPercent: 100, stagger: 0.1 });
	// });
	const swiper2 = new Swiper('.swiper2', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,

		speed: 400,
		slidesPerView: 1,
		pagination: {
			el: '.swiper-pagination',
		},
		keyboard: {
			enabled: true,
		},
		// Navigation arrows
		navigation: {
			nextEl: '.swiper2-button-next',
			prevEl: '.swiper2-button-prev',
		},

		scrollbar: {
			el: '.swiper-scrollbar',
		},
	});
	swiper2.init();
	const swiperInfo = new Swiper('.swiper-info', {
		effect: 'cards',
		cardsEffect: {
			slideShadows: false,
		},
		autoplay: true,
		loop: true,

		navigation: {
			nextEl: '.swiperinfo-button-next',
			prevEl: '.swiperinfo-button-prev',
		},
	});
	swiperInfo.init();
};

export default Swipers;

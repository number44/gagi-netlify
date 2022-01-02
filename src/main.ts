import './style.scss';

function init() {
	const progressBar = document.querySelector('.progress-bar') as HTMLDivElement;
	const winHeight: number = window.document.body.scrollHeight - window.innerHeight;
	const navbar = document.querySelector('header') as HTMLHeadElement;
	const logo = document.querySelector('.logo') as HTMLImageElement;
	console.log('winHeight :', winHeight);

	function progressFoo() {
		const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
		const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
		const scrolled = (winScroll / height) * 100;

		progressBar.style.width = scrolled + '%';
		if (scrolled > 5) {
			navbar.classList.add('header-scrolled');
			logo.classList.add('logo-scrolled');
			navbar.classList.add('shadow-md');
		} else {
			navbar.classList.remove('header-scrolled');
			navbar.classList.remove('shadow-md');
			logo.classList.remove('logo-scrolled');
		}
	}

	window.addEventListener('scroll', progressFoo);
}
init();
// core version + navigation, pagination modules:
import Swiper, { Pagination, EffectCube } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cube';
// configure Swiper to use modules
Swiper.use([Pagination, EffectCube]);

var swiper = new Swiper('.swiper', {
	effect: 'cube',
	grabCursor: true,
	loop: true,
	cubeEffect: {
		shadow: true,
		slideShadows: true,
		shadowOffset: 20,
		shadowScale: 0.94,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});
swiper.autoplay;

let lists = document.querySelectorAll<HTMLElement>('[data-target]');

const links = Array.from(lists);
import jump from 'jump.js';

links.forEach((link) => {
	link.addEventListener('click', () => {
		jump(`#${link.dataset.target}`);
	});
});
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
var map = L.map('map', {
	center: L.latLng(51.794479, 19.43786),
	zoom: 15,
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);
var logoIcon = L.icon({
	iconUrl: 'https://m2m3.pl/assets/marker-white.png',
	// shadowUrl: '../assets/marker-white.png',

	iconSize: [38, 50], // size of the icon
	shadowSize: [50, 64], // size of the shadow
	iconAnchor: [22, 74], // point of the icon which will correspond to marker's location
	shadowAnchor: [4, 62], // the same for the shadow
	popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});
L.marker([51.794479, 19.43786], { icon: logoIcon }).addTo(map).bindPopup("<div style='text-align: center'><strong>M2M3</strong><br>Łódź<br>Sierakowskiego 69</div>").openPopup();

const preloader = document.querySelector('.preloader-bg');

window.onload = function () {
	preloader?.classList.add('hide');
};
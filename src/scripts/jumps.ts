import jump from 'jump.js';
const Jumps = () => {
	let lists = document.querySelectorAll<HTMLElement>('[data-target]');

	const links = Array.from(lists);

	links.forEach((link) => {
		link.addEventListener('click', () => {
			jump(`#${link.dataset.target}`);
		});
	});
};
export default Jumps;

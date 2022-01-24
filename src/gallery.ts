const gallery = () => {
	const close = document.querySelector('.close-slideshow') as HTMLDivElement;
	const slideshow = document.querySelector('.slideshow') as HTMLDivElement;
	close?.addEventListener('click', () => {
		slideshow.classList.add('d-none');
	});
};
export default gallery;

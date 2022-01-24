const gallery = () => {
	const close = document.querySelector('.close-slideshow') as HTMLDivElement;
	const slideshow = document.querySelector('.slideshow') as HTMLDivElement;
	const thumbs = document.querySelectorAll('.gallery-thumb');
	close?.addEventListener('click', () => {
		slideshow.classList.add('d-none');
	});

	thumbs.forEach((t) => {
		t.addEventListener('click', () => {
			slideshow.classList.remove('d-none');
		});
	});
};
export default gallery;

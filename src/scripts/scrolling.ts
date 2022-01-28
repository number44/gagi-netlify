const Scrolling = () => {
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
};
export default Scrolling;

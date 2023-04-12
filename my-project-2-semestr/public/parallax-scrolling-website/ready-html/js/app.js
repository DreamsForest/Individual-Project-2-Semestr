window.addEventListener('scroll', e => {
	document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) // Update method
})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content'
})

function updateProgressBar() {
	const windowHeight = window.innerHeight || document.documentElement.clientHeight;
	const documentHeight = document.documentElement.scrollHeight;
	const scrollTop = window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);
	
	const percent = (scrollTop / (documentHeight - windowHeight)) * 100;
	
	const progressBar = document.querySelector('.progress-bar');
	progressBar.style.width = `${percent}%`;
  }
  
  window.addEventListener('scroll', updateProgressBar);
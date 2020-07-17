const navMenu = document.getElementById('navMenu');
const nav = document.getElementById('nav');
const closeBtn = document.getElementById('closeBtn');

navMenu.addEventListener('click', () => {
	nav.style.transform = 'translateX(0px)';
});
closeBtn.addEventListener('click', () => (nav.style.transform = 'translateX(250px)'));

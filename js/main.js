// Navbar toggle functionality for small screens
document.addEventListener('DOMContentLoaded', function() {
	var toggler = document.querySelector('.navbar-toggler');
	var menu = document.querySelector('.ig-manu');
	if (toggler && menu) {
		toggler.addEventListener('click', function(e) {
			e.stopPropagation();
			menu.classList.toggle('open');
			toggler.classList.toggle('active');
		});
		// Close menu when a link or button is clicked (for better UX)
		menu.querySelectorAll('a, button').forEach(function(item) {
			item.addEventListener('click', function() {
				if (window.innerWidth <= 992) {
					menu.classList.remove('open');
					toggler.classList.remove('active');
				}
			});
		});
		// Close menu when clicking outside
		document.addEventListener('click', function(e) {
			if (window.innerWidth <= 992 && menu.classList.contains('open')) {
				if (!menu.contains(e.target) && !toggler.contains(e.target)) {
					menu.classList.remove('open');
					toggler.classList.remove('active');
				}
			}
		});
	}
});

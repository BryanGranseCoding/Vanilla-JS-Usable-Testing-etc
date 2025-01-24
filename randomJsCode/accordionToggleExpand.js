var closeOtherToggles = true; // Set this to true to close all other accordions when an accordion is expanded.

//** That's it, stop editing! **/
var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => { 
	// Expand the content when row is clicked.
	document.querySelectorAll('.oxel_accordion__row').forEach( accordion => {
		accordion.addEventListener('click', function(e) {
			accordion.classList.toggle('oxel_accordion__row--active');
			accordion.nextElementSibling.classList.toggle('oxel_accordion__content__hidden');
			
			switch( accordion.getAttribute('aria-expanded') ) {
				case 'true':
					accordion.setAttribute('aria-expanded', 'false');
				break;
				case 'false':
					accordion.setAttribute('aria-expanded', 'true');
				break;
			}
			
			if( closeOtherToggles == true ) {
				accordion.parentElement.querySelectorAll('.oxel_accordion__row--active').forEach( row => {
					if( row != accordion ) { 
						row.classList.remove('oxel_accordion__row--active');
						row.setAttribute('aria-expanded', 'false');
						row.nextElementSibling.classList.add('oxel_accordion__content__hidden');
					}
				});
			}
		})
	})

});


(function() {
	'use strict';

	var loginButton = document.querySelector('.btn-login');
	var loginModal = document.querySelector('.modal-login');
	var modalCloseButton = loginModal.querySelector('.btn-close');
	var overlay = document.querySelector('.overlay');
	var loginForm = loginModal.querySelector('.form');

	loginButton.addEventListener('click', function(evt) {
		evt.preventDefault();

		loginModal.classList.add('modal-login-shown');
		overlay.classList.add('overlay-shown');
	});

	modalCloseButton.addEventListener('click', function(evt) {
		evt.preventDefault();

		loginModal.classList.remove('modal-login-shown');
		overlay.classList.remove('overlay-shown');
	});

	overlay.addEventListener('click', function(evt) {
		evt.preventDefault();

		loginModal.classList.remove('modal-login-shown');
		this.classList.remove('overlay-shown');
	});

	loginForm.addEventListener('submit', function(evt) {
		evt.preventDefault();

		var hasEmptyInput = [].some.call(evt.target, function(formElement) {
			return formElement.tagName.toLowerCase() !== 'button' 
				&& formElement.value.length === 0
		});

		hasEmptyInput && loginModal.classList.add('error');

		setTimeout(function() {
			loginModal.classList.remove('error');
		}, 2000);
	})
}());
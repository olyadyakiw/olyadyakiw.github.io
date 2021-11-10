const burger = document.querySelector(".header__burger");
const contacts = document.querySelector(".header__contact");

if (burger) {
    burger.addEventListener("click", function (e) {
        contacts.classList.toggle("active");
        burger.classList.toggle("active");
    });
}

$(function () {
	$('.popup-modal').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#username',
		modal: true
	});
	$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
});
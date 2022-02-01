let menu = document.getElementById("menu");
let menuOpen = document.getElementById("menu-open");
let menuClose = document.getElementById("menu-close");
let cartToggle = document.getElementById("cart-toggle");
let cart = document.getElementById("cart");
let amount = document.getElementById("amount");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");

menuOpen.addEventListener("click", (e) => {
	menu.classList.add("show");
});

menuClose.addEventListener("click", (e) => {
	menu.classList.remove("show");
});

cartToggle.addEventListener("click", (e) => {
	cart.classList.toggle("show");
});

plus.addEventListener("click", (e) => {
	+amount.innerHTML++;
});

minus.addEventListener("click", (e) => {
	if (+amount.innerHTML > 0) {
		+amount.innerHTML--;
	}
});

let imageLis = document.querySelectorAll(".imgs .thumbs li");
let bigImage = document.getElementById("big-image");

imageLis.forEach((li) => {
	li.addEventListener("click", (e) => {
		imageLis.forEach((li) => {
			li.classList.remove("active");
		});
		li.classList.add("active");
	});
});

imageLis[0].addEventListener("click", (e) => {
	bigImage.src = "images/image-product-1.jpg";
});

imageLis[1].addEventListener("click", (e) => {
	bigImage.src = "images/image-product-2.jpg";
});

imageLis[2].addEventListener("click", (e) => {
	bigImage.src = "images/image-product-3.jpg";
});

imageLis[3].addEventListener("click", (e) => {
	bigImage.src = "images/image-product-4.jpg";
});

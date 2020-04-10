const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const clos = document.querySelector(".close");
cartButton.addEventListener("click", function (event) {
  modal.classList.add("is-open");
});
clos.addEventListener("click", function (event) {
  modal.classList.remove("is-open");
});

const arrow = document.querySelector(".arrow");
const options = document.querySelector(".options");
const option = document.querySelectorAll(".option");
const input = document.querySelector(".input");
const optionValue = document.querySelector(".optionValue");

let isVisible = false;

arrow.addEventListener("click", function () {
  isVisible = !isVisible;
  options.style.display = isVisible ? "block" : "none";
  arrow.classList.toggle("rotated", isVisible);
});

document.addEventListener("click", function (event) {
  const optionsChild = options.contains(event.target);
  const arrowChild = arrow.contains(event.target);
  if (!optionsChild && !arrowChild) {
    options.style.display = "none";
    isVisible = false;
    arrow.classList.remove("rotated");
  }
});

option.forEach(function (data) {
  data.addEventListener("click", function () {
    optionValue.value = data.textContent;
    options.style.display = "none";
    arrow.classList.toggle("rotated");
  });
});

option.forEach(function (option) {
  option.addEventListener("click", function () {
    const selectedOption = document.querySelector(".option.selected");
    if (selectedOption) {
      selectedOption.classList.remove("selected");
    }
    option.classList.add("selected");
  });
});

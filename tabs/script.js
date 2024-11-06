const buttons = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab");
const btnContainer = document.querySelector(".btn-container");

btnContainer.addEventListener("click", (event) => {
  const clickedButtonId = event.target.dataset.id;

  // remove active class for all buttons (reset)
  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  // remove active class for all contents (reset)
  contents.forEach((content) => {
    content.classList.remove("active");
  });

  // add active class to the clicked button
  event.target.classList.add("active");

  // add active class to content
  const content = document.getElementById(clickedButtonId);
  content.classList.add("active");
});

const button = document.querySelector("button");
const body = document.querySelector("body");
const currentColor = document.querySelector(".current-color");

button.addEventListener("click", () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  // Color example
  const randomColor = `rgb(${red}, ${green}, ${blue})`;
  body.style.backgroundColor = randomColor;
  button.style.color = randomColor;
  currentColor.textContent = randomColor;

  // Gradient example
  // const randomGradient = `linear-gradient(90deg, rgba(${red}, ${green}, ${blue}, 1) 0%, rgba(${green}, ${blue}, ${red}, 1) 48%, rgba(${blue}, ${red}, ${green}, 1) 100%)`;
  // body.style.background = randomGradient;
  // currentColor.textContent = randomGradient;
});

//
// Example with predefined colors
//

// const colors = [
//   "red",
//   "green",
//   "blue",
//   "yellow",
//   "purple",
//   "orange",
//   "pink",
//   "brown",
//   "black",
//   "white",
// ];

// button.addEventListener("click", () => {
//   const randomNumber = Math.floor(Math.random() * colors.length);
//   const randomColor = colors[randomNumber];
//   body.style.backgroundColor = randomColor;
//   currentColor.textContent = randomColor;
// });

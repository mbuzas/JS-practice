const width = document.getElementById("width");
const height = document.getElementById("height");
const imagePlace = document.querySelector("#randomImage");

const button = document.querySelector(".btn");

const defaultWidth = 300;
const defaultHeight = 300;

const fetchRandomImage = async () => {
  if (!width.value) {
    width.value = defaultWidth;
    console.log("Width is not set, using default width of 200");
  }

  if (!height.value) {
    height.value = defaultHeight;
    console.log("Height is not set, using default height of 300");
  }

  const url = `https://picsum.photos/${width.value}/${height.value}`;

  try {
    const response = await fetch(url);
    imagePlace.src = response.url;
  } catch (error) {
    console.error("Error fetching the image:", error);
  }
};

button.addEventListener("click", fetchRandomImage);

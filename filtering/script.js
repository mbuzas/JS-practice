import data from "./data.js";

const sectionCenter = document.querySelector(".section-center");
const filterBtns = document.querySelectorAll(".filter-btn");
const searchInput = document.getElementById("search-input");

// Generate HTML for a single item
const generateItemTemplate = (item) => `
  <div class="card">
    <img src="${item.img}" alt="${item.name}" />
    <div> 
            <h2>${item.name}</h2>
            <p>${item.city}</p>
            <span>ID: ${item.id}</span>
            <h5>category: ${item.categories.join(", ")}</h5>
    </div>
  </div>
`;

// Render items to the page
const renderItems = (items) => {
  const htmlArray = items.map((item) => generateItemTemplate(item));
  sectionCenter.innerHTML = htmlArray.join("");
};

// Filter items by search query
const filterBySearch = (query) => {
  return data.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );
};
// Handle search input
searchInput.addEventListener("input", (e) => {
  const searchedItems = filterBySearch(e.target.value);
  renderItems(searchedItems);
});

// Function to filter items by category
const filterByCategory = (category) => {
  if (category === "all") {
    return data;
  }
  return data.filter((item) => item.categories.includes(category));
};

// Handle category button clicks
filterBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const category = e.currentTarget.dataset.id;
    const filteredItems = filterByCategory(category);
    renderItems(filteredItems);
  });
});

// Initial render of all items
renderItems(data);

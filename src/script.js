const loading = document.getElementById("loading");
const header = document.getElementById("main-header");
const cardContainer = document.getElementById("card-container");
const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");
const cartIcon = document.getElementById("cart-icon");
const cartCount = document.getElementById("cart-count");
const cartModal = document.getElementById("cart-modal");
const cartItems = document.getElementById("cart-items");
const noResults = document.getElementById("no-results");

let allProducts = [];
let cart = [];

setTimeout(() => {
    loading.classList.add("hidden");
    header.classList.remove("hidden");
    fetchProducts();
}, 2000);

function fetchProducts() {
    fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
            allProducts = data;
            renderCategories(data);
            renderProducts(data);
        });
}

function renderCategories(products) {
    const uniqueCategories = [...new Set(products.map(p => p.category))];
    uniqueCategories.forEach(cat => {
        const option = document.createElement("option");
        option.value = cat;
        option.textContent = cat;
        categorySelect.appendChild(option);
    });
}

function renderProducts(products) {
    cardContainer.innerHTML = "";
    noResults.classList.add("hidden");

    if (products.length === 0) {
        noResults.classList.remove("hidden");
        return;
    }

    products.forEach((ele) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
      <img src="${ele.image}" alt="${ele.title}">
      <div class="rating">⭐${ele.rating.rate}</div>
      <h3>${ele.title}</h3>
      <p>${ele.description.slice(0, 80)}...</p>
      <p class="price">$${ele.price}</p>
      <div class="add-cart"><i class="fas fa-cart-plus"></i></div>
    `;
        card.querySelector(".add-cart").addEventListener("click", () => addToCart(ele));
        cardContainer.appendChild(card);
    });
}

function filterProducts() {
    const searchText = searchInput.value.toLowerCase().trim();
    const category = categorySelect.value;
    let filtered = [...allProducts];

    if (category !== "all") {
        filtered = filtered.filter(p => p.category === category);
    }

    if (searchText) {
        const queryWords = searchText.split(/\s+/);
        filtered = filtered.filter(p =>
            queryWords.some(q => p.title.toLowerCase().includes(q))
        );
    }

    renderProducts(filtered);
}

function addToCart(product) {
    cart.push(product);
    updateCart();
}

function updateCart() {
    cartCount.textContent = cart.length;
    cartItems.innerHTML = cart.map(p => `<li>${p.title}</li>`).join("");
}

searchInput.addEventListener("input", filterProducts);
categorySelect.addEventListener("change", filterProducts);
cartIcon.addEventListener("click", () => {
    cartModal.classList.toggle("hidden");
});

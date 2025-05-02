const cardContainer = document.getElementById("card-container");
const load = document.getElementById("loading");
const search = document.getElementById("search");
const btn = document.getElementById("btn");

window.addEventListener('DOMContentLoaded', () => {
    fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
            setTimeout(() => {
                renderCards(data);
                load.style.display = "none";
                search.style.display = "inline-block";
                btn.style.display = "inline-block";
            }, 2000);

            btn.addEventListener('click', () => handleSearch(data));
            search.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') handleSearch(data);
            });
        });
});

function handleSearch(data) {
    const query = search.value.toLowerCase().trim();
    const queryWords = query.split(/\s+/);
    let filteredCards = "";

    data.forEach(ele => {
        const titleWords = ele.title.toLowerCase().split(/\s+/);
        const match = queryWords.some(word => titleWords.includes(word));

        if (match || query === "") {
            filteredCards += generateCardHTML(ele);
        }
    });

    cardContainer.innerHTML = filteredCards || "<p>No products found.</p>";
}

function renderCards(data) {
    let card = "";
    data.forEach(ele => {
        card += generateCardHTML(ele);
    });
    cardContainer.innerHTML = card;
}

function generateCardHTML(ele) {
    return `<div class="card">
                <div class="image">
                    <img src="${ele.image}" id="img" alt="${ele.title}" loading="lazy">
                    <div class="rating">
                        <p id="rating">⭐${ele.rating.rate}</p>
                    </div>
                </div>
                <div class="details">
                    <h3 id="title">${ele.title}</h3>
                    <p id="desc">${ele.description}</p>
                    <p id="price">$${ele.price}</p>
                </div>
            </div>`;
}

const cardContainer = document.getElementById("card-container");
const load = document.getElementById("loading");

window.addEventListener('DOMContentLoaded', () => {
    fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
            setTimeout(() => {
                let card = "";
                data.forEach(ele => {
                    card += `<div class="card">
                <div class="image">
                    <img src="${ele.image}" id="img" alt="${ele.title}">
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
                });
                cardContainer.innerHTML = card;
                load.style.display = "none";
            }, 2000)
        })
})
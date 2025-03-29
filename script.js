const cardContainer = document.getElementById("card-container");
const load = document.getElementById("loading");
const search = document.getElementById("search");
const btn = document.getElementById("btn");

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
                search.style.display = "inline-block"
                btn.style.display = "inline-block"
            }, 2000)

            btn.addEventListener('click', () => {
                data.forEach(ele => {
                    if (ele.title.includes(search.value)){
                        
                    }
                })
            })
        });
})
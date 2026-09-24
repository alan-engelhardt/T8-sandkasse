
const id = new URLSearchParams(window.location.search).get("id");

const endpoint = `https://kea-alt-del.dk/t7/api/products/${id}`;

const product = document.querySelector("#product");

fetch(endpoint).then(res => res.json()).then(visData);

function visData(element) {
    console.log(element);
    product.innerHTML = `
        <a href=productdetails.html?id=${element.id}>
            <article class="card">
            <img src=https://kea-alt-del.dk/t7/images/webp/1000/${element.id}.webp alt="produktbillede" />
            <h2>${element.productdisplayname}</h2>
            <h3>${element.brandname}</h3>
            <p>${element.price}</p>
            <p>${element.subcategory}</p>
        </article>
        </a>`
}

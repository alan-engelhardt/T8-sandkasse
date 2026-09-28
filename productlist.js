const cat = new URLSearchParams(window.location.search).get("cat"); // Gem værdien af URL-parameteren i cat
const endpoint = `https://kea-alt-del.dk/t7/api/products?category=${cat}`; // Tilpas endpoint til valgt kategori

document.querySelector("h2").textContent = cat; // Vis bruger hvilken kategori der vises

const produktliste = document.querySelector("#produktliste");

fetch(endpoint).then(res => res.json()).then(visData);

function visData(json) {
    console.log(json);
    json.forEach(produkt => {
        produktliste.innerHTML += `
        <a href=productdetails.html?id=${produkt.id}>
            <article class="card ${produkt.soldout ? "udsolgt" : ""}">
            <img src=https://kea-alt-del.dk/t7/images/webp/640/${produkt.id}.webp alt="produktbillede" />
            <h2>${produkt.productdisplayname}</h2>
            <h3>${produkt.brandname}</h3>
            <p>${produkt.price}</p>
            <p>${produkt.subcategory}</p>
        </article>
        </a>`
    });
}
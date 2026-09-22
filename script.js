const endpoint = "https://kea-alt-del.dk/t7/api/products?limit=20";

const produktliste = document.querySelector(".produktliste");

fetch(endpoint).then(res => res.json()).then(visData);

function visData(json) {
    console.log(json);
    json.forEach(element => {
        produktliste.innerHTML += `
            <article class="card">
            <h2>${element.productdisplayname}</h2>
            <h3>${element.brandname}</h3>
            <p>${element.price}</p>
            <p>${element.subcategory}</p>
        </article>`
    });
}


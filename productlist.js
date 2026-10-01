const cat = new URLSearchParams(window.location.search).get("cat"); // Gem værdien af URL-parameteren i cat
const endpoint = `https://kea-alt-del.dk/t7/api/products?category=${cat}&limit=30`; // Tilpas endpoint til valgt kategori
const visantal = document.querySelector("#filtre span");
const produktliste = document.querySelector("#produktliste");

let alleData, udsnit;

document.querySelector("h2").textContent = cat; // Vis bruger hvilken kategori der vises
document.querySelectorAll("#filtre button").forEach(knap => knap.addEventListener("click", filtrer));
document.querySelectorAll("#sortering button").forEach(knap => knap.addEventListener("click", sorter));

function hentData() {
    fetch(endpoint)
        .then(res => res.json())
        .then((data) => {
            alleData = udsnit = data;
            visData(data);
        });
}

function filtrer(event) {
    const valgt = event.target.textContent; // hvad står der i den knap der blev klikket på?
    if (valgt == "Alle") {
        udsnit = alleData;
    } else {
        udsnit = alleData.filter(element => element.gender == valgt);
    }
    visData(udsnit);
}

function sorter(event) {
    const valgt = event.target.textContent;
    console.log(valgt);
    if (valgt == "Pris lav-høj") {
        udsnit.sort((a, b) => (a.price - b.price));
    } else if (valgt == "Pris høj-lav") {
        udsnit.sort((a, b) => (b.price - a.price));
    } else if (valgt == "A-Z") {
        udsnit.sort((a, b) => a.productdisplayname.localeCompare(b.productdisplayname));
    } else if (valgt == "Z-A") {
        udsnit.sort((a, b) => b.productdisplayname.localeCompare(a.productdisplayname));
    }
    visData(udsnit);
}


function visData(json) {
    visantal.textContent = json.length;
    //console.log(json);
    produktliste.innerHTML = "";
    json.forEach(element => {
        const tilbudspris = Math.round(element.price - (element.price * element.discount / 100));
        produktliste.innerHTML += `
        <a href=productdetails.html?id=${element.id} class=${element.soldout ? "udsolgt" : ""}>
            <article class="card">
            <img src=https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp alt="produktbillede" />
            <div>
                <h2>${element.productdisplayname}</h2>
                <h3>${element.brandname}</h3>
                ${element.discount
                ?
                `<p class="tilbudslabel">-${element.discount}%</p>
                 <p>Før kr. ${element.price},- <span class="tilbudspris">Nu ${tilbudspris},-</span></p> `
                :
                `<p> kr. ${element.price}, - </p> `
            }
                <p>${element.gender}</p>
            </div>
        </article>
        </a>`
    });
}

hentData();
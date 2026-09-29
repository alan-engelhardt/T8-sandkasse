const cat = new URLSearchParams(window.location.search).get("cat"); // Gem værdien af URL-parameteren i cat
const endpoint = `https://kea-alt-del.dk/t7/api/products?category=${cat}`; // Tilpas endpoint til valgt kategori

document.querySelector("h2").textContent = cat; // Vis bruger hvilken kategori der vises

const produktliste = document.querySelector("#produktliste");

document.querySelectorAll("#filtre button").forEach(knap => knap.addEventListener("click", filtrer));

let alleData, udsnit;

fetch(endpoint).
    then(res => res.json()).
    then((data) => {
        alleData = udsnit = data;
        visData(data);
    });

function filtrer(e) {
    console.log(e.target.textContent); // hvad står der i den knap der blev klikket på?
    const valgt = e.target.textContent;
    if (valgt == "Alle") {
        udsnit = alleData;
    } else {
        udsnit = alleData.filter(element => element.gender == valgt);
    }
    visData(udsnit);
}

function visData(json) {
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

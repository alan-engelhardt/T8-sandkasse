const biler = [{
    pris: 23000,
    model: "Turbo",
    brand: "Trabant",
    farve: "beige",
    udstyr: ["rat", "sæder", "vinduer"]
},
{
    pris: 330000,
    model: "Super",
    brand: "VW",
    farve: "rød",
    udstyr: ["rat", "sæder", "vinduer", "fartpilot"]
},
{
    pris: 2000,
    model: "Basic",
    brand: "Lade",
    farve: "gul",
    udstyr: ["rat", "sæder"]
}];

console.log(biler);

const produktliste = document.querySelector(".produktliste");

biler.forEach(visBiler);

function visBiler(element) {
    produktliste.innerHTML += `
    <article class="card">
            <h2>${element.brand}</h2>
            <h3>${element.model}</h3>
            <p>${element.pris}</p>
            <p>${element.udstyr}</p>
        </article>`
}


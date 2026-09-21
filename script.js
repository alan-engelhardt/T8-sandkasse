const bil1 = {
    pris: 23000,
    model: "Turbo",
    brand: "Trabant",
    farve: "beige",
    udstyr: ["rat", "sæder", "vinduer"]
}
const bil2 = {
    pris: 330000,
    model: "Super",
    brand: "VW",
    farve: "rød",
    udstyr: ["rat", "sæder", "vinduer", "fartpilot"]
}

const card = document.querySelector(".card");

card.innerHTML += `
    <h2>${bil1.brand} ${bil1.model}</h2>
    <p>kr. ${bil1.pris},-</p>
`
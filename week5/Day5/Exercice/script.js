const divContainer = document.getElementById("sub-container");
const btn = document.getElementById("search");

btn.addEventListener("click", getData);

function getData(e) {
    const num = Math.floor(Math.random() * 83)
    const url = `https://www.swapi.tech/api/people/${num}`;
    divContainer.textContent = " ";
    fetch(url)
        .then((response) => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error("Wrong artwork");
            }
        })
        .then((data) => {
            displayData(data);

        })
        .catch(function (error) {
            console.log(`We got the error ${error}`)
        });
}

function displayData(data) {
    const informations = data.result.properties
    // console.log(informations);

    const name = document.createElement("p")
    const height = document.createElement("p")
    const gender = document.createElement("p")
    const birthday = document.createElement("p")
    const world = document.createElement("p")

    world.textContent = `Home World: ${informations.homeworld}`
    birthday.textContent = `Birth Year : ${informations.birth_year}`
    gender.textContent = `Gender : ${informations.gender}`
    height.textContent = `Height : ${informations.height}`
    name.textContent = informations.name

    divContainer.append(name, birthday, height, gender)
};
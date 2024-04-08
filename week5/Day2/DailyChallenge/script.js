// const url = "https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=1"
// console.log(url);


const form = document.querySelector("form");
const input = document.getElementById("search");
const container = document.getElementById("container");
const buttonDeleteAll = document.getElementById("deleteAll")
form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
    e.preventDefault();
    const searTearm = input.value;
    input.value = "";
    getGifs(searTearm);
}


function getGifs(word) {

    let xhr = new XMLHttpRequest();
    xhr.open('GET', `https://api.giphy.com/v1/gifs/search?q=${word}&rating=g&offset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=1`);
    xhr.responseType = 'json';
    xhr.send();

    xhr.onload = function () {
        if (xhr.status != 200) { // analyze HTTP status of the response
            alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
        } else { // show the result
            // console.log(xhr.response.data); // response is the server
            const data = xhr.response.data[0]
            const imagesUrl = data.images.fixed_width.webp
            const altText = data.title
            createImage(imagesUrl, altText);
        };
    };
}


function createImage(url, alt) {
    const parentDiv = document.createElement("div");

    const img = document.createElement("img");
    img.src = url;
    img.alt = alt;

    const button = document.createElement("button");
    button.textContent = "Delete";

    parentDiv.prepend(button, img);
    container.prepend(parentDiv);

    button.addEventListener("click", () => {
        parentDiv.remove();
    })

    buttonDeleteAll.addEventListener("click", () => {
        container.remove();
    });
}


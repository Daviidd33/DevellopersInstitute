document.querySelector("form").addEventListener("submit", handlSubmit)

function handlSubmit(e) {
    e.preventDefault();
    const dataForm = new FormData(document.querySelector("form"));
    const data = Object.fromEntries(dataForm.entries());

    const datastring = JSON.stringify(data);
    const p = document.createElement("p");
    p.textContent = datastring;
    document.body.appendChild(p);
}
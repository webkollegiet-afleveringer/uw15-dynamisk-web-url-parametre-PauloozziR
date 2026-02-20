const pageSearch = window.location.search;
console.log(pageSearch);
const params = new URLSearchParams(pageSearch);
console.log(params);
const id = params.get("id");
console.log(id);
const mainWrapperDom = document.querySelector("#main-wrapper");
const url = `./data/${id}.json`;
console.log(url);

fetch(url)
    .then((respons) => respons.json())
    .then((data) => {
        console.log(data);
    })

function page(data) {
    console.log(data);
    console.log(mainWrapperDom);
    showData(data.destinations);
}

function showData() {
    const {id, image, destination, title, subtitle, text, facilities} = data;
    return /* html */ `

    `
}
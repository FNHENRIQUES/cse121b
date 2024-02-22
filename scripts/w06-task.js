/* W05: Programming Tasks */

/* Declare and initialize global variables */
let imagesElement = document.querySelector('#image');
let imageList = [];

/* async displayImages Function */
function displayImages(images) {

    images.forEach((images) => {
        const articleElement = document.createElement('article');

        const h3Element = document.createElement('h3');
        h3Element.textContent += image.imageName;

        const imgElement = document.createElement('img');
        imgElement.setAttribute('src', `${image.imageUrl}`);
        imgElement.setAttribute('alt', image.imageName);
        imgElement.setAttribute('width', "270em");

        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);
        imagesElement.appendChild(articleElement);
    });
} 

/* async getImages Function using fetch()*/
const getImages = async () => {
    const response = await fetch("https://run.mocky.io/v3/92fc2060-943e-45cd-bf37-4cae3d5937c1");

    imageList.push(await response.json());
    displayImages(imageList[0]);
}


/* reset Function */
function reset () {
    imagesElement.innerHTML = "";
}

/* filterImages Function */
const filterImages = (images) => {
    reset();

    const filter = document.querySelector('#filtered').value;

    switch(filter) {
        case "apple":
            const imagesApple = images[0].filter(image => image.location.includes("Apple"));
            displayImages(imagesApple);

            break;
        case "banana":
            const imagesBanana = images[0].filter(image => !image.location.includes("Banana"));
            displayImages(imagesBanana);

            break;
        case "strawberry":
            const imagesStrawberry = images[0].filter(image => !image.location.includes("Strawberry"));
            displayImages(imagesBanana);

            break;
        case "all":
            displayImages(images[0]);

            break;
        default:
            break;
    }
}

getImages();

/* Event Listener */
document.querySelector ('#filtered').addEventListener("change", () => {filterImages(imageList)});

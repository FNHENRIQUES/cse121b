/* W05: Programming Tasks */

/* Declare and initialize global variables */
let imagesElement = document.querySelector('#image');
let imageList = [];

/* async displayImages Function */
const displayImages = (images) => {

    images.forEach((image) =>
    {
        const articleElement = document.createElement('article');

        const h3Element = document.createElement('h3')
        h3Element.textContent += image.imageName;

        const imgElement = document.createElement ('img');
        imgElement.setAttribute ('src', `${image.imageUrl}`);
        imgElement.setAttribute ('alt', image.imageName);
        imgElement.setAttribute ('width', "270em");

        articleElement.appendChild (h3Element);
        articleElement.appendChild (imgElement);
        imagesElement.appendChild (articleElement);
    });
}; 

/* async getImages Function using fetch()*/
const getImages = async () => {
    const response = await fetch("https://gist.github.com/prayagKhanal/8cdd00d762c48b84a911eca2e2eb3449.js");

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

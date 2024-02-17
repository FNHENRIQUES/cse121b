/* W05: Programming Tasks */

/* Declare and initialize global variables */
let templesElement = document.querySelector('#temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {

    temples.forEach((temple) =>
    {
        const articleElement = document.createElement('article');

        const h3Element = document.createElement('h3')
        h3Element.textContent += temple.templeName;

        const imgElement = document.createElement ('img');
        imgElement.setAttribute ('src', `${temple.imageUrl}`);
        imgElement.setAttribute ('alt', temple.templeName);
        imgElement.setAttribute ('width', "270em");

        articleElement.appendChild (h3Element);
        articleElement.appendChild (imgElement);
        templesElement.appendChild (articleElement);
    });
}; 

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");

    templeList.push(await response.json());
    displayTemples(templeList[0]);
}


/* reset Function */
function reset () {
    templesElement.innerHTML = "";
}

/* filterTemples Function */
const filterTemples = (temples) => {
    reset();

    const filter = document.querySelector('#filtered').value;

    switch(filter) {
        case "utah":
            const templesInUtah = temples[0].filter(temple => temple.location.includes("Utah"));
            displayTemples(templesInUtah);

            break;
        case "notutah":
            const templesNotInUtah = temples[0].filter(temple => !temple.location.includes("Utah"));
            displayTemples(templesNotInUtah);

            break;
        case "older":
            const dedicatedBefore1950 = temples[0].filter(temple => {
                const dedicationDate = new Date(temple.dedicated);
                const comparisonDate = new Date(1950, 0, 1)
                
                return comparisonDate > dedicationDate;
            });  
        
            displayTemples(dedicatedBefore1950);

            break;
        case "all":
            displayTemples(temples[0]);

            break;
        default:
            break;
    }
}

getTemples();

/* Event Listener */
document.querySelector ('#filtered').addEventListener("change", () => {filterTemples(templeList)});

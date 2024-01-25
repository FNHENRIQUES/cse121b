/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Fernando Negreiros Henriques";
const year = new Date();
let currentYear = year.getFullYear();
let profilePicture = ('images/perfil.png');

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");


/* Step 4 - Adding Content */

nameElement.innerHTML = (`<strong>${fullName}</strong>`);
yearElement.innerHTML = (`${currentYear}`);
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);


/* Step 5 - Array */
let favFoods = ['lazanha', 'feijoada', 'pizza', 'potato'];
foodElement.innerHTML += `<br>${favFoods.join(`, `)}`;
favFoods.shift();
foodElement.innerHTML += `<br>${favFoods.join(`, `)}`;
favFoods.pop();
foodElement.innerHTML += `<br>${favFoods.join(`, `)}`;
favFoods.push('sushi');
foodElement.innerHTML += `<br>${favFoods.join(`, `)}`;
/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    "name": "Fernando Negreiros Henriques",
    "photo": "images/perfilo.jpg",
    "favoriteFoods": ['lazanha', 'feijoada', 'pizza', 'potato', 'sushi'],
    "hobbies": ['read', 'playguitar', 'watch movies', 'dance', 'sing'],
    "placesLived": []
};



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        "place": "São Paulo, Brazil",
        "length": "19 years"
    },
    {
        "place": "Fortaleza, Brazil",
        "length": "2 years"
    },
    {
        "place": "New York, Idaho",
        "length": "1 month"
    },
    {
        "place": "São Paulo, Brazil",
        "length": "29 years"
    },
);


/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').innerHTML = `${myProfile.name}`;

/* Photo with attributes */
document.querySelector('img').setAttribute('src', `${myProfile.photo}`);    
document.querySelector('img').setAttribute('alt', `Fernando photo`);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(function (food) {
    let listElement = document.createElement('li');
    listElement.textContent = food;

    document.querySelector('#favorite-foods').appendChild(listElement);
});

/* Hobbies List */
myProfile.hobbies.forEach(function (hobby) {
    let listElement = document.createElement('li');
    listElement.textContent = hobby;

    document.querySelector('#hobbies').appendChild(listElement);
});
/* Places Lived DataList */
myProfile.placesLived.forEach(function (place) {
    let dt = document.createElement('dt');
    let dd = document.createElement('dd');
    dt.textContent = place.place;
    dd.textContent = place.length;

    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
});



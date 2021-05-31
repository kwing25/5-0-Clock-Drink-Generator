//create api for 2 search page reusing api with clicked image's strDrink
function getParams(search) {
    var search = JSON.parse(localStorage.getItem('searchQueryIndividual'));
    console.log(search);
    

    getDrinkInfo(search);
}

function getDrinkInfo(search) {
    var apiDrink = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + (search);
    

    fetch(apiDrink)
        .then(function (response) {
            console.log(response.ok);
            if (!response.ok) {
                window.alert('Unable to connect');
                throw response.json();
            }

            return response.json()
        })
        .then(function (drinkResults) {
            printDrinkResults(drinkResults);
            
        })

}

printDrinkResults = (drinkResults) => {
    console.log(drinkResults)
    console.log(drinkResults.drinks[0].strDrink)

    const drinkDiv = document.querySelector('.drink-ingredients')
//add image thumbnail here
const drinkName = document.querySelector('.drink-title');
drinkName.innerHTML = drinkResults.drinks[0].strDrink;
const drinkImage = document.querySelector('.drink-image')
drinkImage.src = drinkResults.drinks[0].strDrinkThumb;
const drinkInstructions = document.querySelector('.card-instruction-text')
drinkInstructions.innerHTML= drinkResults.drinks[0].strInstructions;


if (drinkResults.drinks[0].strIngredient1 !== null) {
        const drinkIngredient = document.createElement('li');
        drinkIngredient.innerHTML = drinkResults.drinks[0].strIngredient1 + ": " + drinkResults.drinks[0].strMeasure1;
        drinkDiv.append(drinkIngredient);
              
} 

if (drinkResults.drinks[0].strIngredient2 !== null) {
    const drinkIngredient = document.createElement('li');
    drinkIngredient.innerHTML = drinkResults.drinks[0].strIngredient2 + ": " + drinkResults.drinks[0].strMeasure2;
    drinkDiv.append(drinkIngredient);
} 

if (drinkResults.drinks[0].strIngredient3 !== null) {
    const drinkIngredient = document.createElement('li');
    drinkIngredient.innerHTML = drinkResults.drinks[0].strIngredient3 + ": " + drinkResults.drinks[0].strMeasure3;
    drinkDiv.append(drinkIngredient);
} 


}

const saveDrinkbtn = document.querySelector("#save-drink")
saveDrinkbtn.addEventListener("click", saveDrink)

function saveDrink(event) {
    console.log(event)
    localStorage.setItem('searchQueryIndividual', JSON.stringify(event.target.innerHTML))
    
}

getParams()


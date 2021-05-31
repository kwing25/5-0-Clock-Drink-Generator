function getParams(search) {
    var search = JSON.parse(localStorage.getItem('searchQuery'));
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

function printDrinkResults(drinkResults){
    console.log(drinkResults)
    for (let i = 0; i < drinkResults.drinks.length; i++) {
        let val = drinkResults.drinks[i];
        // console.log(i);
        // const cardBody = document.querySelector('.card-body')
        const drinkDiv = document.querySelector('.drink-name');
        const drinkName = document.createElement('li');
        drinkName.innerHTML = val.strDrink;
        drinkDiv.append(drinkName);
        // cardBody.append(drinkName);
        //const drinkName = document.querySelector('.drink-name');
        //drinkName.innerHTML = drinkResults.drinks[drink].strDrink;
    }
}


// drinkResults.forEach(drink => {
//     const drinkName = document.querySelector('.drink-name');
//     drinkName.innerHTML = drinkResults.drinks[drink].strDrink;
// });

    
const drinkTarget = document.querySelector('.drink-name');

drinkTarget.addEventListener('click', setItemIndividual);

function setItemIndividual(event) {
    console.log(event)
    localStorage.setItem('searchQueryIndividual', JSON.stringify(event.target.innerHTML))
    document.location.replace('/drinkindividual');
}


getParams()

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
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
        //make a seperate div for drink image
        const drinkDiv = document.querySelector('.drink-name');
        const drinkName = document.createElement('li');
        drinkName.innerHTML = val.strDrink;
        const drinkImg = document.createElement('img');
        drinkImg.src = val.strDrinkThumb;
        drinkDiv.append(drinkName);
        drinkDiv.append(drinkImg);
        
    }
}




    
const drinkTarget = document.querySelector('.drink-name');

drinkTarget.addEventListener('click', setItemIndividual);

function setItemIndividual(event) {
    console.log(event)
    localStorage.setItem('searchQueryIndividual', JSON.stringify(event.target.innerHTML))
    document.location.replace('/drinkindividual');
}


getParams()


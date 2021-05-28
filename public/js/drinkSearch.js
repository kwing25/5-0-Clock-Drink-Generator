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
    // for (let i = 0; i < drinkResults.length; i++) {
    //     let val = drinkResults[i];
        console.log(val);
        const drinkName = document.querySelector('.drink-name');
        drinkName.innerHTML = drinkResults.drinks[val].strDrink;
    // }
}


// array.forEach(element => {
    
// });




getParams()

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
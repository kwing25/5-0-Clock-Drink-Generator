const input = document.querySelector("#homepage-search");
const button = document.querySelector('#search-btn');

function handleSearchFormSubmit(event) {
    event.preventDefault();
    console.log("works");
    const searchInputVal = document.querySelector('#homepage-search').value;
    localStorage.setItem('searchQuery', JSON.stringify(searchInputVal));

    if (searchInputVal === "")  {
        return(handleSearchFormSubmit);
        }

        document.location.replace('/drinksearch');
}


button.addEventListener('click', handleSearchFormSubmit);

// module.exports = { drinkSearch };
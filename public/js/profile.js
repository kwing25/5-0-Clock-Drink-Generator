// const note = document.querySelector('.note-save')
// const noteBtn =  document.querySelector('#noteSaveButtonThisIs')

// function saveNoteAPICall(){
//     let entry = {
//         value: note.value
//     }
//     fetch('/api/notes/new', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(entry)
//     })
//         .then(data => data.json())
//         .then(res => console.log(res))
// }
// function loadNotes(){
//     fetch('/api/notes')
//         .then(res => res.json())
//         .then(data => {
//             //here lies the array of notes from, per user
//             console.log(data)
//         })
// }
// loadNotes()
// noteBtn.addEventListener("click", saveNoteAPICall)
// //api fetch when the page loads, note.value = res.note (whatever it is saved as in the database)



//selecting the saved drink and setting it to local storage, document replace to its individual page
const drinkTarget = document.querySelector('.drink-name');

drinkTarget.addEventListener('click', setItemIndividual);

function setItemIndividual(event) {
    console.log(event)
    localStorage.setItem('searchQueryIndividual', JSON.stringify(event.target.innerHTML))
    document.location.replace('/drinkindividual');
}


const deleteButton = document.querySelector('.delete-button');

deleteButton.addEventListener('click', delButtonHandler);

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
        
        const response = await fetch(`/api/saveddrinks/${id}`, {
        method: 'DELETE',
        });
        
        if (response.ok) {
        document.location.replace('/profile');
        } else {
        alert('Failed to delete project');
        }
    }
    };
// const { not } = require("sequelize/types/lib/operators");

// const newFormHandler = async (event) => {
//   event.preventDefault();

//   const name = document.querySelector('#saveddrink-name').value.trim();
//   const needed_funding = document.querySelector('#saveddrink-funding').value.trim();
//   const description = document.querySelector('#saveddrink-desc').value.trim();

//   if (name && needed_funding && description) {
//     const response = await fetch(`/api/saveddrinks`, {
//       method: 'POST',
//       body: JSON.stringify({ name, needed_funding, description }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to create saveddrink');
//     }
//   }
// };

// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/saveddrinks/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to delete saveddrink');
//     }
//   }
// };

// document
//   .querySelector('.new-saveddrink-form')
//   .addEventListener('submit', newFormHandler);


// document
//   .querySelector('.saveddrink-list')
//   .addEventListener('click', delButtonHandler);


const note = document.querySelector('.note-save')
const noteBtn =  document.querySelector('#noteSaveButtonThisIs')
// note.value = 'get cups';

function saveNoteAPICall(){
    let entry = {
        value: note.value
    }
    fetch('/api/notes/new', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(entry)
    })
        .then(data => data.json())
        .then(res => console.log(res))
}
function loadNotes(){
    fetch('/api/notes')
        .then(res => res.json())
        .then(data => {
            //here lies the array of notes from, per user
            console.log(data)
        })
}
loadNotes()
noteBtn.addEventListener("click", saveNoteAPICall)
//api fetch when the page loads, note.value = res.note (whatever it is saved as in the database)


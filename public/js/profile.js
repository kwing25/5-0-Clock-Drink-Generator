const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#saveddrink-name').value.trim();
  const needed_funding = document.querySelector('#saveddrink-funding').value.trim();
  const description = document.querySelector('#saveddrink-desc').value.trim();

  if (name && needed_funding && description) {
    const response = await fetch(`/api/saveddrinks`, {
      method: 'POST',
      body: JSON.stringify({ name, needed_funding, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create saveddrink');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/saveddrinks/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete saveddrink');
    }
  }
};

document
  .querySelector('.new-saveddrink-form')
  .addEventListener('submit', newFormHandler);

// document
//   .querySelector('.saveddrink-list')
//   .addEventListener('click', delButtonHandler);

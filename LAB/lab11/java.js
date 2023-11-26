document.getElementById('searchButton').addEventListener('click', function () {
  const searchTerm = document.getElementById('searchField').value;
  fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
      searchTerm
    )}`
  )
    .then((response) => response.json())
    .then((data) => {
      updateBooksList(data.items);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});

function updateBooksList(books) {
  const booksList = document.getElementById('booksList');
  booksList.innerHTML = '';

  books.forEach((book) => {
    const listItem = document.createElement('li');
    listItem.classList.add('book-item');
    listItem.textContent = book.volumeInfo.title;
    listItem.onclick = () => showBookDetails(book);
    booksList.appendChild(listItem);
  });
}

function showBookDetails(book) {
  const detailsDiv = document.getElementById('detailsContent');
  detailsDiv.innerHTML = `
      <h3>${book.volumeInfo.title}</h3>
      <p>Authors: ${book.volumeInfo.authors?.join(', ') || 'N/A'}</p>
      <p>Publisher: ${book.volumeInfo.publisher || 'N/A'}</p>
      <p>Published Date: ${book.volumeInfo.publishedDate || 'N/A'}</p>
      <p>Description: ${book.volumeInfo.description || 'N/A'}</p>
  `;
  document.getElementById('bookDetails').style.display = 'block';
}

var modal = document.getElementById('bookDetails');

var span = document.getElementsByClassName('close')[0];

span.onclick = function () {
  modal.style.display = 'none';
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

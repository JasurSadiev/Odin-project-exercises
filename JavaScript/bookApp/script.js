// Book Class:  Represents a Book
class Book {
  constructor(title, author, page, readStatus) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.readStatus = readStatus;
  }
}
// UI Class: Handle UI tasks
class UI {
  static displayBooks() {
    const books = Store.getBooks();

    books.forEach((book) => {
      UI.addBookToList(book);
    })
  }
  
  static addBookToList(book) {
      const list = document.querySelector(".books__container")
      const book__box = document.createElement('div');
      book__box.classList = "book__box"
      book__box.innerHTML = `
      <div class="book">
        <div class="book__section">
          <span class="book__section_given">Title:</span> 
          <span class="book__section_given">Author:</span> 
          <span class="book__section_given">Pages:</span> 
        </div>
        <div class="book__section">
          <span>"${book.title}"</span>
          <span class="book__section_author"> ${book.author}</span>
          <span> ${book.page}</span>
        </div>
      </div>
        <input type="submit" id="read" class="read" value="Read">
        <input type="submit" id="removeBtn" class="removeBtn" value="Remove">
      `;
      list.appendChild(book__box);
  }

  static showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const main = document.querySelector(".main");
    const addBtn = document.querySelector("#addBookBtn");
    main.insertBefore(div, addBtn);

    // Vanishing alert in 2 seconds
    setTimeout(() => document.querySelector(".alert").remove(), 2000)

  }

  static clearInputFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#page").value = "";
  }

  static deleteBook(el) {
    if (el.classList.contains("removeBtn")) {
      el.parentElement.remove();
      UI.showAlert("Successfully deleted", "info");
    }
  }

  static readBook(el) {
    if (el.classList.contains("read")) {
      el.style.backgroundColor = "red";
    }
  }
}
// Store Class: Handles Storage

class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(title) {
    const books = Store.getBooks();
    books.forEach((book, index) => {
      console.log(typeof(book.title));
      if(`"${book.title}"` == title) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem('books', JSON.stringify(books));;
  }
}

// Event: display Books
document.addEventListener("DOMContentLoaded", UI.displayBooks());

// Event: Add a Book
document.querySelector("#form").addEventListener("submit", (e) => {

  e.preventDefault();
  // Get form values
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const page = document.querySelector("#page").value;

  // Validate


  // Instantiate book
  const book = new Book(title, author, page);
  
  // Add book to UI
  UI.addBookToList(book);

  // Add book to Store
  Store.addBook(book);

  // Clear input Fields
  UI.clearInputFields();

  // Closing the form after Submit
  form__div.style.display = "none";

  UI.showAlert("New book Successfully has been added!", 'success');
});

// Event: Remove a Book
document.querySelector(".books__container").addEventListener("click", (e) => {
  UI.deleteBook(e.target);

  // Remove book from the Store
  Store.removeBook(e.target.previousElementSibling.previousElementSibling.childNodes[2].nextElementSibling.firstChild.nextSibling.textContent);
  // console.log(e.target.previousElementSibling.previousElementSibling.childNodes[2].nextElementSibling.firstChild.nextSibling.innerText);
  
});

// Event:  Read a Book
document.querySelector(".books__container").addEventListener("click", (e) => {
  UI.readBook(e.target);
});


const addBookBtn = document.querySelector("#addBookBtn");
const form__div = document.querySelector(".form__div")
// Opening the pop up window
addBookBtn.addEventListener('click', () => {
  form__div.style.display = "flex";
});

// Listen for outside click
window.addEventListener("click", (e) => {
  if (e.target == form__div) {
    form__div.style.display = "none";
  }
})
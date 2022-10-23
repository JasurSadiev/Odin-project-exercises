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
const form__div = document.querySelector(".form__div");
const loginBtn = document.querySelector("#loginBtn");
const accountBtn = document.querySelector("#accountBtn");
const logoutBtn = document.querySelector("#logoutBtn");
const account = document.querySelector("#account");
const accountModal = document.querySelector("#accountText");

const setupAccountModal = (user) => {
  if (user) {
    accountModal.innerHTML = `
      <p>Logged in as</p>
      <p><strong>${user.email.split('@')[0]}</strong></p>`
  } else {
    accountModal.innerHTML = ''
  }
}

// Opening the pop up window
addBookBtn.addEventListener('click', () => {
  form__div.style.display = "flex";
});

// Firebase Auth
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBdVe3AOMZaVP2i15ZdnGebdKUMH90LtwA",
    authDomain: "book-app-33f1f.firebaseapp.com",
    projectId: "book-app-33f1f",
    storageBucket: "book-app-33f1f.appspot.com",
    messagingSenderId: "747748073551",
    appId: "1:747748073551:web:89a52e5ade17e3dd144a3a",
    measurementId: "G-R9BR5DLLZD"
});



const auth = firebase.auth();

auth.onAuthStateChanged(async (user) => {
  if (user) {
    accountBtn.style.display = "flex";
    logoutBtn.style.display = "flex";
    loginBtn.style.display = "none";
    setupRealTimeListener();
  } else {
    if (unsubscribe) unsubscribe();
    document.addEventListener("DOMContentLoaded", UI.displayBooks());
  }
  setupAccountModal(user);
})

const signInWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(googleProvider)
  .then(() => {
    location.reload();
    console.log()
    auth.onAuthStateChanged;
  })
  .catch(error => {
    console.log(error);
  })
}

const signOut = () => {
  auth.signOut()
  accountBtn.style.display = "none";
    logoutBtn.style.display = "none";
    loginBtn.style.display = "flex";
}


// // Opening the login popup window
// loginBtn.addEventListener('click', (e) => {
//   login__div.style.display = "flex";
// });
// // Listen for outside click
window.addEventListener("click", (e) => {
  if (e.target == account) {
    account.style.display = "none";
  }
});

window.addEventListener("click", (e) => {
  if (e.target == form__div) {
    form__div.style.display = "none";
  }
})

accountBtn.addEventListener("click", () => {
  account.style.display = "flex";
})

// Events;
loginBtn.addEventListener("click", signInWithGoogle);
logoutBtn.addEventListener("click", signOut);

// FireStore
const db = firebase.firestore()
let unsubscribe

const setupRealTimeListener = () => {
  let books = Store.getBooks();
  unsubscribe = db
    .collection('books')
    .where('ownerId', '==', auth.currentUser.uid)
    .orderBy('createdAt')
    .onSnapshot((snapshot) => {
      books = docsToBooks(snapshot.docs)
    })
}

const addBookDB = (newBook) => {
  db.collection('books').add(bookToDoc(newBook))
}

const removeBookDB = async (title) => {
  db.collection('books')
    .doc(await getBookIdDB(title))
    .delete()
}

const getBookIdDB = async (title) => {
  const snapshot = await db
    .collection('books')
    .where('ownerId', '==', auth.currentUser.uid)
    .where('title', '==', title)
    .get()
  const bookId = snapshot.docs.map((doc) => doc.id).join('')
  return bookId
}
















// Utils

const docsToBooks = (docs) => {
  return docs.map((doc) => {
    return new Book(
      doc.data().title,
      doc.data().author,
      doc.data().pages,
      doc.data().isRead
    )
  })
}

const JSONToBook = (book) => {
  return new Book(book.title, book.author, book.pages, book.isRead)
}

const bookToDoc = (book) => {
  return {
    ownerId: auth.currentUser.uid,
    title: book.title,
    author: book.author,
    pages: book.pages,
    isRead: book.isRead,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  }
}
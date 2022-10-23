// Book Class:  Represents a Book
// class Book {
//     constructor(title, author, page, readStatus) {
//       this.title = title;
//       this.author = author;
//       this.page = page;
//       this.readStatus = readStatus;
//     }
//   }
//   // UI Class: Handle UI tasks
//   class UI {
//     static displayBooks() {
//       const books = Store.getBooks();
  
//       books.forEach((book) => {
//         UI.addBookToList(book);
//       })
//     }
    
//     static addBookToList(book) {
//         const list = document.querySelector(".books__container")
//         const book__box = document.createElement('div');
//         book__box.classList = "book__box"
//         book__box.innerHTML = `
//         <div class="book">
//           <div class="book__section">
//             <span class="book__section_given">Title:</span> 
//             <span class="book__section_given">Author:</span> 
//             <span class="book__section_given">Pages:</span> 
//           </div>
//           <div class="book__section">
//             <span>"${book.title}"</span>
//             <span class="book__section_author"> ${book.author}</span>
//             <span> ${book.page}</span>
//           </div>
//         </div>
//           <input type="submit" id="read" class="read" value="Read">
//           <input type="submit" id="removeBtn" class="removeBtn" value="Remove">
//         `;
//         list.appendChild(book__box);
//     }
  
//     static showAlert(message, className) {
//       const div = document.createElement('div');
//       div.className = `alert alert-${className}`;
//       div.appendChild(document.createTextNode(message));
//       const main = document.querySelector(".main");
//       const addBtn = document.querySelector("#addBookBtn");
//       main.insertBefore(div, addBtn);
  
//       // Vanishing alert in 2 seconds
//       setTimeout(() => document.querySelector(".alert").remove(), 2000)
  
//     }
  
//     static clearInputFields() {
//       document.querySelector("#title").value = "";
//       document.querySelector("#author").value = "";
//       document.querySelector("#page").value = "";
//     }
  
//     static deleteBook(el) {
//       if (el.classList.contains("removeBtn")) {
//         el.parentElement.remove();
//         UI.showAlert("Successfully deleted", "info");
//       }
//     }
  
//     static readBook(el) {
//       if (el.classList.contains("read")) {
//         el.style.backgroundColor = "red";
//       }
//     }
// }

// class Store {
//     static getBooks() {
//         if (user) {

//         } else {
//             let books;
//             if (localStorage.getItem('books') === null) {
//                 books = [];
//             } else {
//                 books = JSON.parse(localStorage.getItem('books'));
//             }
//             return books;
//         }
        
//     }

//     static addBook(book) {
//         const books = Store.getBooks();
//         books.push(book);
//         localStorage.setItem('books', JSON.stringify(books));
//     }

//     static removeBook(title) {
//         const books = Store.getBooks();
//         books.forEach((book, index) => {
//         console.log(typeof(book.title));
//         if(`"${book.title}"` == title) {
//             books.splice(index, 1);
//         }
//         });

//         localStorage.setItem('books', JSON.stringify(books));;
//     }
// }

// Variables

const login = document.getElementById("loginBtn");
const logout = document.getElementById("logoutBtn");
const account = document.getElementById("accountBtn");
const login__div = document.getElementById("login__div")

// Eventlisteners
login.addEventListener("click", () => {
    login__div.style.display = "flex";
})

window.addEventListener("click", (e) => {
    if (e.target === login__div) {
        login__div.style.display = "none";
    }
})

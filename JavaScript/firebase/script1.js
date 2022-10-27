class Book {
    constructor(title, author, page, userId, uid) {
      this.title = title;
      this.author = author;
      this.page = page;
      this.userId = userId;
      this.docId = uid;
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
        if (book) {
            const list = document.querySelector(".books__container")
            const book__box = document.createElement('div');
            book__box.classList = "book__box"
            book__box.innerHTML = `
            <div class="book" data-id=${book.docId} data-email=${book.userId}>
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
        } else {
            console.log("something went wrong!")
        }
    }
  
    // static showAlert(message, className) {
    //   const div = document.createElement('div');
    //   div.className = `alert alert-${className}`;
    //   div.appendChild(document.createTextNode(message));
    //   const main = document.querySelector(".main");
    //   const addBtn = document.querySelector("#addBookBtn");
    //   main.insertBefore(div, addBtn);
  
    //   // Vanishing alert in 2 seconds
    //   setTimeout(() => document.querySelector(".alert").remove(), 2000)
  
    // }
  
    static clearInputFields() {
      document.querySelector("#title").value = "";
      document.querySelector("#author").value = "";
      document.querySelector("#page").value = "";
    }
  
    static deleteBook(el) {
      if (el.classList.contains("removeBtn")) {
        el.parentElement.remove();
        // UI.showAlert("Successfully deleted", "info");
      }
    }
  
    static readBook(el) {
      if (el.classList.contains("read")) {
        el.style.backgroundColor = "red";
      }
    }
}

class Store {
    static getBooks(user) {
        const books = []
        db.collection(user.email).get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                // console.log(doc.data().title, doc.data().author, doc.data().page);
                const book = new Book(doc.data().title, doc.data().author, doc.data().page, user.email, user.uid);
                deleteBookFromDB(doc);
                console.log();
                UI.addBookToList(book);
                books.push(book);
            });
        }).catch((err) => {
            console.log(err.message);
        });
        return books;
    }

    static addBook(book) {
        const books = Store.getBooks();
        books.push(book);
        // localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(docId) {
                // UI.deleteBook(e.target);
                // console.log(e.target.previousElementSibling.previousElementSibling.childNodes[2].nextElementSibling.firstChild.nextSibling.textContent);
                db.collection(user.email).doc(docId).delete().then(() => {
                    console.log(user.email);
                }).catch((err) => {
                    console.log(err.message);
        });
        // const books = Store.getBooks();
        // books.forEach((book, index) => {
        // console.log(typeof(book.title));
        // if(`"${book.title}"` == title) {
        //     books.splice(index, 1);
        // }
        // });

    }
}

// Variables

const login = document.getElementById("loginBtn");
const logout = document.getElementById("logoutBtn");
const account = document.getElementById("accountBtn");
const accountText = document.getElementById("accountText");
const accountDiv = document.getElementById("account__div");
const login__div = document.getElementById("login__div");
const loginForm = document.getElementById("login__form");
const signIn = document.getElementById("login");
const addBookBtn = document.getElementById("addBookBtn");
const formDiv = document.querySelector(".form__div");
const form = document.querySelector("#form");
const removeBtn = document.getElementById("removeBtn");


// Listen for auth state changes
auth.onAuthStateChanged(user => {
    if (user) {
        // deleteBookFromDB(user);
        // loadBooks(user);
        Store.getBooks(user);
        setupNavbar(user);
        // addingBook(user);
    } else {
        UI.addBookToList("");
        Store.getBooks();
        login.style.display = "flex";
        logout.style.display = "none";
        account.style.display = "none";
    }
})
// Eventlisteners
login.addEventListener("click", () => {
    login__div.style.display = "flex";
    Form.close(login__div);
});



// Registering a new User
register.addEventListener("click", (e) => {
    e.preventDefault();

    // get user info
    const email = loginForm["email"].value;
    const password = loginForm["password"].value;

    // signUp user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        console.log(cred);
        Form.reset(loginForm, loginForm, login__div);
        Form.close(login__div)
    }).catch(err => {
        console.log(err.message);
    })
});

// Login to account
signIn.addEventListener("click", (e) => {
    e.preventDefault();
    // get user info
    const email = loginForm["email"].value;
    const password = loginForm["password"].value;
    auth.signInWithEmailAndPassword(email, password).then(cred => {
        Form.reset(loginForm, loginForm, login__div);
        location.reload();
    })
})

// function loadBooks(user) {
//     if (user) {
//         db.collection(user.email).get().then((snapshot) => {
//             snapshot.docs.forEach(doc => {
//                 // console.log(doc.data().title, doc.data().author, doc.data().page);
//                 const book = new Book(doc.data().title, doc.data().author, doc.data().page);
//                 UI.addBookToList(book);
//             });
//         }).catch((err) => {
//             console.log(err.message);
//         });
//     } else {
//         console.log("No user, No books!");
//     }
// }

// Logout 
logout.addEventListener("click", (e) => {
    location.reload();
    auth.signOut().then(() => {
        console.log("Successfully logout!");
    }).catch((err) => {
        console.log(err.message);
    });
});

// Account details
account.addEventListener("click", () => {
    accountDiv.style.display = 'flex';
    Form.close(accountDiv);
})

// Setup Navbar
function setupNavbar(user) {
    if (user) {
        login.style.display = "none";
        logout.style.display = "flex";
        account.style.display = "flex";
        
        //Setting up Account details
        accountText.innerHTML = `<p class="logged">Logged In as: \n <strong>${user.email}</strong></p>`;
    }
}

class Form {
    static reset(input1, input2, formdiv) {
        input1["email"].value = "";
        input2["password"].value = "";
        formdiv.style.display = "none";
    }
    static close(div) {
        window.addEventListener("click", (e) => {
            if (e.target == div) {
                div.style.display = "none";
            }
        });
    }
}

// Adding a book to UI
function addingBook(doc) {
    addBookBtn.addEventListener("click", () =>{
        formDiv.style.display = "flex";
        Form.close(formDiv);
    });
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = form["title"].value;
        const author = form["author"].value;
        const page = form["page"].value;

        const book = new Book(title, author, page);
        if (true) {
                console.log(doc.data())
                // db.collection(doc.data().userId).doc(doc.id).set({
                //     title: title,
                //     author: author,
                //     page : page,
                //     userId: doc.data().userId,
                //     docId: doc.id
                // });
        } else {
            console.log("No user");
        }
        UI.addBookToList(book);
        form["title"].value = "";
        form["author"].value = "";
        form["page"].value = "";
        formDiv.style.display = "none";
    });
};

function deleteBookFromDB(doc) {
    window.addEventListener("click", (e) => {
        if (e.target.classList == "removeBtn") {
            UI.deleteBook(e.target);
            console.log(e.target.previousElementSibling.previousElementSibling);
            // db.collection().doc(docId).delete().then(() => {
                //     console.log(user.email);
                // }).catch((err) => {
                    //     console.log(err.message);
                    // });
                } else {
                    console.log(e.target);
                }
            });
}
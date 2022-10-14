let myLibrary = ["You don't know JS", "Why?", "Think Again", "Rich Dad, poor dad" ];

function Book() {
  // the constructor...
}

// function addBookToLibrary() {
//   // do stuff here
//   let userBook = prompt("What book do you want to add");
//   myLibrary.push(userBook);
// }

function showBooks() {
    for (i = 0; i < myLibrary.length; i++) {

        document.write("<ul>"+myLibrary[i]+"</ul>");
        
    }
}

//addBookToLibrary();
showBooks();

console.log(myLibrary);
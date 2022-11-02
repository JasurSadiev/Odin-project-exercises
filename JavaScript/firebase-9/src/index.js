import { initializeApp } from "firebase/app";
import {
    getFirestore, collection, onSnapshot,
    addDoc, deleteDoc, doc,
    query, where,
    orderBy, serverTimestamp,
    getDoc, updateDoc

} from 'firebase/firestore';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signOut,
    signInWithEmailAndPassword,
    onAuthStateChanged
} from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyB5zAC5IETy9Ct79FUCUVqv6Npv0NwYoWk",
    authDomain: "fir-9-tutorial-c8de7.firebaseapp.com",
    projectId: "fir-9-tutorial-c8de7",
    storageBucket: "fir-9-tutorial-c8de7.appspot.com",
    messagingSenderId: "63826266220",
    appId: "1:63826266220:web:ae8fdc08656d63a6ad3049"
};

// Initialize App
initializeApp(firebaseConfig);

// init services
const db = getFirestore();
const auth = getAuth();

// collection ref
const colRef = collection(db, 'books');

// queries
const q = query(colRef, orderBy("createdAt"));

// real time collection data
// getDocs(colRef)
//     .then((snapshot) => {
//         let books = [];
//         snapshot.docs.forEach((doc) => {
//             books.push({ ...doc.data(), id: doc.id });
//         })
//         console.log(books);
//     })
//     .catch(err => {
//         console.log(err.message);
//     })
const unsubCol = onSnapshot(q, (snapshot) => {
    let books = [];
    snapshot.docs.forEach((doc) => {
        books.push({ ...doc.data(), id: doc.id });
    })
    console.log(books);
})

// Adding documents
const addBookForm = document.querySelector('.add');
addBookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addDoc(colRef, {
        title: addBookForm.title.value,
        author: addBookForm.author.value,
        createdAt: serverTimestamp()
    }).then(() => {
        addBookForm.reset();
    })
})

// Deleting documents
const deleteBookForm = document.querySelector('.delete');
deleteBookForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const docRef = doc(db, 'books', deleteBookForm.id.value);
    deleteDoc(docRef)
        .then(() => {
            deleteBookForm.reset();
        })
})

// Get a single document
const docRef = doc(db, 'books', "aus1w4Wwn4ukiB0H8qb2");

const unsubDoc = onSnapshot(docRef, (doc) => {
    console.log(doc.data(), doc.id)
});

const updateForm = document.querySelector(".update")
updateForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const docRef = doc(db, 'books', updateForm.id.value);
    updateDoc(docRef, {
        title: updateForm.id.value          
    })
    .then(() => {
        updateForm.reset();
    })
});

// signing users up
const signupForm = document.querySelector(".signup");
signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, signupForm.email.value, signupForm.password.value)
        .then((cred) => {
            // console.log("User created: ", cred.user);
            signupForm.reset();
        })
        .catch((err) => {
            // console.log(err.message);
        })
});

// logging in and out
const logoutButton = document.querySelector('.logout');
logoutButton.addEventListener("click", () => {
    signOut(auth)
        .then(() => {
            // console.log("User signed out!")
        })
        .catch(err => {
            // console.log(err.message);
        })
});

const loginForm = document.querySelector('.login');
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, loginForm.email.value, loginForm.password.value)
        .then((cred) => {
            // console.log("User logged in: ", cred.user);
        })
        .catch((err) => {
            // console.log(err.message)
        });
});

// Subscribing to auth changes

const unsubAuth = onAuthStateChanged(auth, (user) => {
    console.log("User status changed: ", user);
});

const unsubButton = document.querySelector(".unsub");
unsubButton.addEventListener("click", () => {
    console.log('unsubscribing');
    unsubCol();
    unsubDoc();
    unsubAuth();
})
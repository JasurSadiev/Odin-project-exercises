const auth = firebase.auth();
const db = firebase.firestore();
// Get data
db.collection("guides").get().then(snapshot => {
    setupGuides(snapshot.docs);
});

// listen for auth state changes
auth.onAuthStateChanged(user => {
    if (user) {

    } else {

    };
});

// signup
const signupForm = document.querySelector("#signup-form");
signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // get user info
    const email = signupForm["signup-email"].value;
    const password = signupForm["signup-password"].value;
    
    // sign up user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        // console.log(cred.user);
        const modal = document.querySelector("#modal-signup");
        M.Modal.getInstance(modal).close();
        signupForm.reset();
    })
});

// Logout 
const logout = document.querySelector("#logout");
logout.addEventListener("click", (e) => {
    e.preventDefault();
    auth.signOut().then( () => {
        console.log("Successfully logout!");
    })
});

// Login
const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get user credentials
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;
    auth.signInWithEmailAndPassword(email, password).then(cred => {
        console.log("Successfully signed in! " + JSON.stringify(cred.user));
        const modal = document.querySelector("#modal-login");
        M.Modal.getInstance(modal).close();
        loginForm.reset();
    })
})

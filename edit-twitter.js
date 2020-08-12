// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCfhEIvg5aUeEbI74cuCJnd7NeCgJnOY0U",
    authDomain: "ccapdev-resume-15370.firebaseapp.com",
    databaseURL: "https://ccapdev-resume-15370.firebaseio.com",
    projectId: "ccapdev-resume-15370",
    storageBucket: "ccapdev-resume-15370.appspot.com",
    messagingSenderId: "485792061660",
    appId: "1:485792061660:web:586580c173404513ecfc19"
};
// Initialize Firebase
var defaultProject = firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

//Update Github Link
const formLink = document.querySelector("#form-edit-twitter");
formLink.addEventListener('submit', (e) =>{
    e.preventDefault();
    db.collection('others').doc('link').update({
        twitter: formLink.twitter.value
    });
    console.log("success edit");
    formLink.twitter.value = '';
    
    setTimeout(function(){
       window.location.replace('edit.html');
    }, 150);
})

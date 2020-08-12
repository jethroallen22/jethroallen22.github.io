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

//Update Data About
const formAbout = document.querySelector("#form-edit-about");
formAbout.addEventListener('submit', (e) =>{
    e.preventDefault();
    db.collection('others').doc('about').update({
        about: formAbout.aboutInfo.value
    });
    console.log("success edit");
    formAbout.aboutInfo.value = '';
    
    setTimeout(function(){
       window.location.replace('edit.html');
    }, 150);
})

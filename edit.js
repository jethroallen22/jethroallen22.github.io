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

//Save Data Education
const formEduc = document.querySelector("#form-add-educ");
formEduc.addEventListener('submit', (e) =>{
    e.preventDefault();
    db.collection("educations").add({
        school: formEduc.school.value,
        degree: formEduc.degree.value,
        year_start: formEduc.startyear.value,
        year_end: formEduc.endyear.value
    });
    formEduc.school.value = '';
    formEduc.degree.value = '';
    formEduc.startyear.value = '';
    formEduc.endyear.value = '';
    setTimeout(function(){
          window.location.replace('edit.html');
    }, 150);
});

//Save Data Organization
const formOrg = document.querySelector("#form-add-org");
formOrg.addEventListener('submit', (e) =>{
    e.preventDefault();
    db.collection('organizations').add({
        name: formOrg.name.value,
        position: formOrg.position.value,
        year_start: formOrg.startyear.value,
        year_end: formOrg.endyear.value
    });
    console.log("success add");
    formOrg.name.value = '';
    formOrg.position.value = '';
    formOrg.startyear.value = '';
    formOrg.endyear.value = '';
    setTimeout(function(){
        window.location.replace('edit.html');
    }, 150);
})

//Save Data Works
const formWork = document.querySelector("#form-add-work");
formWork.addEventListener('submit', (e) =>{
      e.preventDefault();
      db.collection('works').add({
          name: formWork.name.value,
          description: formWork.description.value,
          year_start: formWork.startyear.value
          
      });
      console.log("success add");
      formWork.name.value = '';
      formWork.description.value = '';
      formWork.startyear.value = '';
      setTimeout(function(){
          window.location.replace('edit.html');
      }, 150);
})

//Update Data About
const formAbout = document.querySelector("#form-edit-about");
formAbout.addEventListener('submit', (e) =>{
    e.preventDefault();
    db.collection('others').doc('about').update({
        about: formAbout.aboutInfo.value
    });
    console.log("success edit");
    formAbout.aboutInfo.value = '';
    
    //setTimeout(function(){
    //    window.location.replace('edit.html');
    //}, 150);
})

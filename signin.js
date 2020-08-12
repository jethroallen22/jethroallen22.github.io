
//Login Form
const loginForm = document.querySelector("#form-signin");
loginForm.addEventListener("submit", (e) => {
    //Prevent page refresh
    e.preventDefault();
                
    //Get data from form
    const email = loginForm["inputEmail"].value;
    const password = loginForm["inputPassword"].value;
                
    //Firebase Authentication
    firebase.auth().signInWithEmailAndPassword(email, password).then(function(user) {
        console.log("user signed in");
        var user = firebase.auth().currentUser;
        if(user != null){
            console.log(user.email);
            location.replace("edit.html")
        }    
    }).catch(function(err){
        if(err.code == "auth/wrong-password"){
            alert("Wrong Password");
        }else{
            alert(err.message);
        }
    });

    form.inputEmail.value = '';
    form.inputPassword.value = '';
                     
});
            
          
         
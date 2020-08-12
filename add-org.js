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
        //Save Data
        const form = document.querySelector("#form-add-org");
        form.addEventListener('submit', (e) =>{
            e.preventDefault();
            db.collection('organizations').add({
                name: form.name.value,
                position: form.position.value,
                year_start: form.startyear.value,
                year_end: form.endyear.value
            });
            console.log("success add");
            form.name.value = '';
            form.position.value = '';
            form.startyear.value = '';
            form.endyear.value = '';
            setTimeout(function(){
                window.location.replace('edit.html');
            }, 150);
        })
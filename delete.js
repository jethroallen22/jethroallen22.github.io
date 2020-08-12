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

    $('.js-nav-menu-toggle').on('click', function(){
       $(this).parents('.nav-menu').toggleClass('nav-menu-open');
    });
    
    $('html').on('click', function(e){
       if(!$(e.target).closest('.js-nav-menu').length &&  
          ($('.js-nav-menu').hasClass('nav-menu-open'))){
            $('.js-nav-menu').removeClass('nav-menu-open');
        }         
    });
    
    function myFunction() {
        document.getElementById("nav-menu2").style.display = "grid";
        document.getElementsByClassName("nav-menu").style.display = "none";
    }
    
const educContentList = document.querySelector('#educ-main-content');
// create elements
function renderEducation(doc){
    let educContent = document.createElement('div');
    let yearStart = document.createElement('span');
    let yearEnd = document.createElement('span');
    let school = document.createElement('li');
    let degree = document.createElement('li');
    let cross = document.createElement('div');

    educContent.setAttribute('data-id', doc.id);
    
    yearStart.textContent = doc.data().year_start + " - ";
    yearEnd.textContent = doc.data().year_end;
    school.textContent = doc.data().school;
    degree.textContent = doc.data().degree;
    cross.textContent = 'X';
    
    educContent.className = "educ-content";
    school.className = "school";
    cross.className = "cross2";

    educContent.appendChild(cross);
    educContent.appendChild(yearStart);
    educContent.appendChild(yearEnd);
    educContent.appendChild(school);
    educContent.appendChild(degree);

    educContentList.appendChild(educContent);

    cross.addEventListener('click', (e) => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection('educations').doc(id).delete();
    })
}
    
db.collection('educations').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderEducation(doc);
    })
});

const orgContentList = document.querySelector('#org-main-content');
function renderOrganization(doc){
    let orgContent = document.createElement('div');
    let yearStart = document.createElement('span');
    let yearEnd = document.createElement('span');
    let org_name = document.createElement('li');
    let position = document.createElement('li');
    let cross = document.createElement('div');
    
    orgContent.setAttribute('data-id', doc.id);
    
    yearStart.textContent = doc.data().year_start + " - ";
    yearEnd.textContent = doc.data().year_end;
    org_name.textContent = doc.data().name;
    position.textContent = doc.data().position;
    cross.textContent = 'X';
    
    orgContent.className = "org-content";
    org_name.className = "org-name";
    cross.className = "cross";

    orgContent.appendChild(cross);
    orgContent.appendChild(yearStart);
    orgContent.appendChild(yearEnd);
    orgContent.appendChild(org_name);
    orgContent.appendChild(position);
    orgContentList.appendChild(orgContent);

    cross.addEventListener('click', (e) => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection('organizations').doc(id).delete();
    })
}
    
db.collection('organizations').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderOrganization(doc);
    })
});

const worksContentList = document.querySelector('#works-main-content');
// create elements
function renderWorks(doc){
    let worksBox = document.createElement('div');
    let worksTitleDateContain = document.createElement('div');
    let worksTitle = document.createElement('div');
    let yearStart = document.createElement('div');
    let worksDesc = document.createElement('div');
    let cross = document.createElement('div');
    
    worksBox.setAttribute('data-id', doc.id);
    
    yearStart.textContent = doc.data().year_start;
    worksTitle.textContent = doc.data().name;
    worksDesc.textContent = doc.data().description;
    cross.textContent = 'X';
    
    cross.className = "cross3";
    worksBox.className = "works-box";
    worksTitle.className = "works-title-content";
    worksTitleDateContain.className = "works-title-date";
    worksDesc.className = "works-description";
    yearStart.className = "works-date";

    worksBox.appendChild(cross);
    worksTitleDateContain.appendChild(worksTitle);
    worksTitleDateContain.appendChild(yearStart);
    worksBox.appendChild(worksTitleDateContain);
    worksBox.appendChild(worksDesc);

    worksContentList.appendChild(worksBox);

    cross.addEventListener('click', (e) => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection('works').doc(id).delete();
    })
}
    
db.collection('works').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderWorks(doc);
    })
});

/*function renderOthers(doc){
    let github = document.getElementById("#github");
    let twitter = document.getElementById("#twitter");
    let instagram = document.getElementById("#instagram");
    
    github.setAttribute('href', '')
}

db.collection('others').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderOthers(doc);
    })
})*/
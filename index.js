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
            
            educContent.setAttribute('data-id', doc.id);
            
            yearStart.textContent = doc.data().year_start + " - ";
            yearEnd.textContent = doc.data().year_end;
            school.textContent = doc.data().school;
            degree.textContent = doc.data().degree;
            
            educContent.className = "educ-content";
            school.className = "school";

            educContent.appendChild(yearStart);
            educContent.appendChild(yearEnd);
            educContent.appendChild(school);
            educContent.appendChild(degree);

            educContentList.appendChild(educContent);
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
            
            orgContent.setAttribute('data-id', doc.id);
            
            yearStart.textContent = doc.data().year_start + " - ";
            yearEnd.textContent = doc.data().year_end;
            org_name.textContent = doc.data().name;
            position.textContent = doc.data().position;
            
            orgContent.className = "org-content";
            org_name.className = "org-name";

            orgContent.appendChild(yearStart);
            orgContent.appendChild(yearEnd);
            orgContent.appendChild(org_name);
            orgContent.appendChild(position);

            orgContentList.appendChild(orgContent);
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
            
            worksBox.setAttribute('data-id', doc.id);
            
            yearStart.textContent = doc.data().year_start;
            worksTitle.textContent = doc.data().name;
            worksDesc.textContent = doc.data().description;
            
            worksBox.className = "works-box";
            worksTitle.className = "works-title-content";
            worksTitleDateContain.className = "works-title-date";
            worksDesc.className = "works-description";
            yearStart.className = "works-date";

            worksTitleDateContain.appendChild(worksTitle);
            worksTitleDateContain.appendChild(yearStart);
            worksBox.appendChild(worksTitleDateContain);
            worksBox.appendChild(worksDesc);

            worksContentList.appendChild(worksBox);
        }
            
        db.collection('works').get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                renderWorks(doc);
            })
        });
        
        //Render Links
        const footerContent = document.querySelector('#footer');
        function renderLinks(doc){
            let footerLinks = document.createElement('div');
            let followText = document.createElement('span');
            let github = document.createElement('span');
            let githubA = document.createElement('a');
            let githubImg = document.createElement('img');
            let twitter = document.createElement('span');
            let twitterA = document.createElement('a');
            let twitterImg = document.createElement('img');
            let instagram = document.createElement('span');
            let instagramA = document.createElement('a');
            let instagramImg = document.createElement('img');
            
            footerLinks.setAttribute('data-id', doc.id);
            footerLinks.className = "links-footer";

            followText.textContent = "Follow Us";
            followText.className = "follow";

            githubImg.className = "social";
            githubImg.src = "github_logo.png";
            githubA.id = "github";
            githubA.href = doc.data().github;
            github.className = "footer-logo";

            twitterImg.className = "social";
            twitterImg.src = "twitter_logo.png";
            twitterA.id = "twitter";
            twitterA.href = doc.data().twitter;
            twitter.className = "footer-logo";

            instagramImg.className = "social";
            instagramImg.src = "instagram_logo.png";
            instagramA.id = "instagram";
            instagramA.href = doc.data().instagram;
            instagram.className = "footer-logo";

            githubA.appendChild(githubImg);
            github.appendChild(githubA);
            twitterA.appendChild(twitterImg);
            twitter.appendChild(twitterA);
            instagramA.appendChild(instagramImg);
            instagram.appendChild(instagramA);

            footerLinks.appendChild(followText);
            footerLinks.appendChild(github);
            footerLinks.appendChild(twitter);
            footerLinks.appendChild(instagram);

            footerContent.appendChild(footerLinks);
        }

        db.collection('others').doc("link").get().then(function(doc){
                renderLinks(doc);
        });
        
        //Render About
        const aboutContent = document.querySelector('#about-content');
        function renderAbout(doc){
            let about = document.createElement('span');
            let parag = document.createElement('p');
            
            about.setAttribute('data-id', doc.id);
            
            parag.textContent = doc.data().about;
            
            about.id = "about";
            about.className = "about";

            about.appendChild(parag);
            aboutContent.appendChild(about);
        }
            
        db.collection('others').doc("about").get().then(function(doc){
                renderAbout(doc);
        });
        
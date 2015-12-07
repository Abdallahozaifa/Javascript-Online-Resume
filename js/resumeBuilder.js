 /*********************************************************************************************************************************************************
																	BIO SECTION

 **********************************************************************************************************************************************************/
 var bio = {
   "name": "Hozaifa Abdalla",
   "role": "Software Engineer",
   "contacts": {
    "mobile": "814-460-4252",
    "email": "Abdallahozaifa19527@gmail.com",
    "location": "United States",
    "github": "Abdallahozaifa",
    "Website:": "HozaifaAbdalla.com"
   },
   "welcomeMessage": [
   "Hello there, welcome to my online resume built by me, if your interested in learning more about me your in the right place!", 
   "<br>Below you will find my skills, experiences, and more of my projects!"],
   "skills": ["HTML5", "CSS3", "Python", "Javascript", "C++"]
 }

 var displayBio = function(){
	 contacts = Object.keys(bio.contacts);
	 // bio of me including name, role, mobile, email, location, and github
	 formattedName = HTMLheaderName.replace("%data%", bio.name);
	 formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	 formattedMobile = HTMLmobile.replace("%data%", bio.contacts["mobile"]);
	 formattedEmail = HTMLemail.replace("%data%", bio.contacts["email"]);
	 formattedLocation = HTMLlocation.replace("%data%", bio.contacts["location"]);
	 formattedGithub = HTMLgithub.replace("%data%", bio.contacts["github"]);
	 entireWelcomeMsg = bio.welcomeMessage.join(" ");
	 formattedWelcome = HTMLwelcomeMsg.replace("%data%", entireWelcomeMsg);
	 //Allows you to replace more than 1 string at a time
	 var website = {
	 	"%url%": "http://hozaifaabdalla.com/",
    	"%contact%": contacts[contacts.length - 1],
    	"%data%": bio.contacts["Website:"]
	 };
	 var websiteRe = new RegExp(Object.keys(website).join("|"),"gi");
	 formattedNewContact = HTMLcontactGeneric.replace(websiteRe, function(matched){
  		return website[matched];
	 });
	 // Jquery Selectors that display the content on the page from the bio
	 $("#header").prepend(formattedRole);
	 $("#header").prepend(formattedName);
	 $("#topContacts").append(formattedMobile);
	 $("#topContacts").append(formattedEmail);
	 $("#topContacts").append(formattedLocation);
	 $("#topContacts").append(formattedGithub);
	 $("#topContacts").append(formattedNewContact);
	 $("#header").append(formattedWelcome);
	 $("#header").append(HTMLskillsStart);
	 for (skill in bio.skills){
	 	formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
	 	$("#skills").append(formattedSkill);
	 }
}
// calls the function
 displayBio();

 /*********************************************************************************************************************************************************
																	EDUCATION SECTION

 **********************************************************************************************************************************************************/

 var education = {
   "schools": 
	    {
	      "name": "Pennsylvania State University",
	      "location": "4701 Behrend College Dr, Erie, PA 16563",
	      "major": "Software Engineering",
	      "minor": "Computer Science",
	      "degree": "BA",
	      "dates": "2013-2017",
	      "url" : "https://psbehrend.psu.edu/"
	    },
   "OnlineCourses": [
        {
          "title" : "Javascript Crash Course by Cameron Pittman and James Williams",
          "school" : "Udacity",
          "url": "https://www.udacity.com/course/javascript-basics--ud804"
        },
        {
          "title": "Intro to Computer Science by Dave Evans ",
          "school": "Udacity",
          "url": "https://www.udacity.com/course/intro-to-computer-science--cs101"
        },
        {
          "title": "Web Applications Engineering by Steve Haufman",
          "school": "Udacity",
          "url": "https://www.udacity.com/course/web-development--cs253"
        },
        {
          "title": "Intro to Html and Css by Cameron Pittman, Jessica Uelmen, and Gundega Dekena",
          "school": "Udacity",
          "url": "https://www.udacity.com/course/intro-to-html-and-css--ud304"		
        },
        {
          "title": "Programming Foundations with Python by Kunal Chawla",
          "school": "Udacity",
          "url": "https://www.udacity.com/course/programming-foundations-with-python--ud036"		
        },
        {
        	"title": "Intro to iOS App Development with Swift by Kunal Chawla",
        	"school": "Udacity",
        	"url": "https://www.udacity.com/course/intro-to-ios-app-development-with-swift--ud585"
        },
        {
        	"title": "Intro to Relational Databases by Karl Krueger ",
        	"school": "Udacity",
        	"url": "https://www.udacity.com/course/intro-to-relational-databases--ud197"
        },
        {
        	"title": "Calculus One by Jim Fowler",
        	"school": "Coursera",
        	"url": "https://www.coursera.org/learn/calculus1"
        },
        {
        	"title": "Intoduction to Engineering Mechanics by Dr. Wayne Whiteman",
        	"school": "Coursera",
        	"url": "https://www.coursera.org/learn/engineering-mechanics-statics/home/info"
        },
        {
        	"title": "Intro to Physics by Andy Brown",
        	"school": "Udacity",
        	"url": "https://www.udacity.com/course/intro-to-physics--ph100"
        },
        {
        	"title": "Responsive Web Design Fundamentals by Pete LePage and Cameron Pittman",
        	"school": "Udacity",
        	"url": "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
        },
        {
        	"title": "Intro to JQuery by Cameron Pittman",
        	"school": "Udacity",
        	"url": "https://www.udacity.com/course/intro-to-jquery--ud245"
        }
        
     ]
 }
 var displayEducation = function(){
	 //initalizes all the objects
	 $("#education").append(HTMLschoolStart);	
	 var schoolname = {
	 	"%url%": education.schools.url,
    	"%data%": education.schools.name
	 };
	 var schoolnameRe = new RegExp(Object.keys(schoolname).join("|"),"gi");
	 formattedSchoolName = HTMLschoolName.replace(schoolnameRe, function(matched){
  		return schoolname[matched];
	 });
	 formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools["dates"]);
	 formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools["location"]);
	 formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools["major"]);
	 // displays the school name, degree, dates, location and major
	 $(".education-entry:last").append(formattedSchoolName);
	 $(".education-entry:last").append(formattedSchoolDates);
	 $(".education-entry:last").append(formattedSchoolLocation);
	 $(".education-entry:last").append(formattedSchoolMajor);
	 $(".education-entry:last").append(HTMLonlineClasses);
	 // for loop that displays the online courses

	 for (course in education.OnlineCourses){
	 	// intializes the online courses objects
	 	var onlinecourse = {
		 	"%url%": education.OnlineCourses[course].url,
	    	"%data%": education.OnlineCourses[course].title
		 };
		 var onlinecourseRe = new RegExp(Object.keys(onlinecourse).join("|"),"gi");
		 formattedOnlineTitle = HTMLonlineTitle.replace(onlinecourseRe, function(matched){
	  		return onlinecourse[matched];
		 });
	 	formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.OnlineCourses[course].school);
	 	// appends the objects to the page
	 	$(".education-entry:last").append(formattedOnlineTitle);
	 	$(".education-entry:last").append(formattedOnlineSchool);
	 } 
}
displayEducation();

 /*********************************************************************************************************************************************************
																	WORK SECTION

 **********************************************************************************************************************************************************/

 var work = {
  "jobs": [
	    {
	      "employer": "Penn State Behrend",
	      "title": "Research Assistant",
	      "dates": "August 2014 - Jan 2015",
	      "location": "4701 Behrend College Dr, Erie, PA 16563",
	      "description": [
	       "Collaborated ideas with Dr. Xiao, Professor of the Computer Science and Software Engineering at Penn State Behrend", 
	       "to develop a program in python for PayPal, to disrupt phishing website from stealing user credentials. Our objective was to integrate a fake", 
	       "credential generator that looped through a list of phishing websites that submitted fake credentials, in order to obtain IP addresses", 
	       "that were then reported to the company."
	       ],
	       "url":"https://psbehrend.psu.edu/research-outreach/student-research"
	    },
	    {
	      "employer": "Penn State Behrend",
	      "title": "Tutor",
	      "dates": "January 2014 - March 2015",
	      "location": "4701 Behrend College Dr, Erie, PA 16563",
	      "description": [
	       "Educated Students in various subjects including general chemistry, general physics, calculus 1 and 2 with", 
	       "analytic geometry, and C++. Mentored students in critical thinking skills in order to improve their academic abilities.", 
	       "Maintained a positive and interactive learning environment for students as well as assisted students in visualization", 
	       "and advanced understanding of complex concepts."
	       ],
	       "url": "https://psbehrend.psu.edu/Academics/academic-services/lrc/tutoring"
	    },
	    {
	      "employer": "Hampton Inn Hotel",
	      "title": "Front Desk Agent and Night Auditor",
	      "dates": "May 2015 - August 2015",
	      "location": "8050 Old Oliver Road, Erie, PA 16509",	
	      "description": [
	      "Assisted with room reservations, confirmations, and room need requests, as well greeted guest warmly", 
	      "and performed registration procedures. Perform accurate check-ins and check-outs of guests daily, and made reservations", 
	      "over the phone and in person and ensure all aspects of the room reservation procedures were followed, including bookings,", 
	      "confirmations and cancellation policies."
	      ], 
	      "url": "http://hamptoninn3.hilton.com/en/hotels/pennsylvania/hampton-inn-erie-south-ERIHHHX/index.html"
	    }
    ]
}

var displayWork = function(){
	for (job in work.jobs){
		// creates new div for work experience
		$("#workExperience").append(HTMLworkStart);
		// contact employer and title
		 //Allows you to replace more than 1 string at a time
		 var employer = {
		 	"%url%": work.jobs[job].url,
	    	"%data%": work.jobs[job].employer
		 };
		 var employerRe = new RegExp(Object.keys(employer).join("|"),"gi");
		 formattedEmployer = HTMLworkEmployer.replace(employerRe, function(matched){
	  		return employer[matched];
		 }); 
		/*var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);*/
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		// job dates
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		// job locations
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);
		// description of jobs
		entireWorkDescription = work.jobs[job].description.join(" ");
		var formattedDescription = HTMLworkDescription.replace("%data%", entireWorkDescription);
		$(".work-entry:last").append(formattedDescription); 	
	}
}
displayWork();

 /*********************************************************************************************************************************************************
																	PROJECT SECTION

 **********************************************************************************************************************************************************/

var project = {
  "projects": [
	    {
	      "title": "Javascript Online Resume",
	      "dates": 2015,
	      "description": [
	      "Created an interactive online resume using HTML, CSS, and Javascript. The interactive",
	      " resume application reads the resume content from a JSON file and a helper js file which contains all the html in javascript variables",
	      " and dynamically displays the content. I also used Jsonlint.com as a resource when validating my Json objects"
	      ],
	      "images":["../static/images/resumehoz.png", "../static/images/resume-bottom.png"],
	      "url": "http://resume.hozaifaabdalla.com/"
	    },
	    
	    {
	      "title": "Responsive HTML5 and CSS3 template",
	      "dates": 2015,
	      "description": [
	      "A complete responsive template that I built using HTML5 and CSS3, opted for users to utilize and ready to go with four tabs, it is also",
	      " very customizable. Shrink the browser and watch the content automatically format itself nicely. Contact page also contains a nice contact me",
	      " area that can also be customized in any way."
	      ],
	      "images":["../static/images/html5template.png", "../static/images/template2.png"],
	      "url": "http://template.hozaifaabdalla.com/"
	    },
	    
	    {
	      "title": "Portfolio with HTML5 and CSS3",
	      "dates": 2015,
	      "description": [
	      "Another web application handcrafted from scratch by me using HTML5 and CSS3. Embedded in it is a google map, google font, linear gradients,",
	      " a full page background, and a contact form that allows users to email me from foxy form. I originally learned html,css, and javascript online",
	      " from utilizing online resources such as w3schools.com, stack overflow, Mozilla's developer network, codeschool, the developer console, udemy, and udacity."
	      ],
	      "images":["../static/images/portfolio.png", "../static/images/contactspage.png"],
	      "url":"http://hozaifaabdalla.com/"
	    },
	  
	    {
	      "title": "Ascii Chan",
	      "dates": 2015,
	      "description": [
	      "A web application I built with one of the Google cloud's platform services called Google App Engine. Handcrafted the front end with html", 
	      " and css as well as the backend with Python. Utilized one of google's databases specifically the google datastore as well as cached the information to", 
	      " diminsh the amount of database queries. Integrated it with a google maps API, however removed the map due to privacy, the google maps API code is available upon request.",
	      " I also used the Jinja2 templating language on google's app engine modelled after Django's templates. The application accepts Ascii art and a title from",
	      " the user and escapes the html and then displays what the user entered down below and is just a fun application, give it a try and click on the link above!"
	      ],
	      "images":["../static/images/AsciiChan.png", "../static/images/Classy.png"],
	      "url": "http://ascii.hozaifaabdalla.com/"

	    },
	    
	    {
	      "title": "IOS Quiz Application",
	      "dates": 2015,
	      "description": [
	      "A mobile application I built with IOS using objective-C that was a quiz application that asked the user a series of biology and anatomy questions", 
	      " and gave the user four options. The application used validation as well as a random generator function. Other applications were simple calculators", 
	      " I  created using swift. I Learned a bit of both swift and objective-C in order to get a more general sense of app development. Source code is available",
	      " only open request."
	      ],
	      "images":["../static/images/calc.png", "../static/images/Quizios.png", "../static/images/simpleMultiply.png"],
	      "url": ""

	    },
	    
	    {
	      "title": "Student Blog",
	      "dates": 2015,
	      "description": [
	      "Developing a student blog using google's app engine with a python backend. The blog is meant as a social platform for", 
	      " discussing the various campus events that are going around. I built a complete user login system from scratch using python, and stored all the information on google datastore's database.", 
	      " I also integrated memcache in the application in order to decrease the amount of database queries. The application also includes form validation and as well used the Jinja2 templating language.", 
	      " I stored the user login information in cookies which you can see in the developer's console which determines how long someone is logged on.",
	      " Everyone's passwords are secure on google's database through a hasing algorithm that I implemented with the application.", 
	      " I developed the entire front end and backend from scratch and currently working on many new features and will be integrating SSL(Secure Sockets Layer) shortly",
	      " in order to maintain user security. Give it a try, sign up, and enjoy!"
	      ],
	      "images":["../static/images/blog-UP.png", "../static/images/blog-frontlive.png"],
	      "url": "http://blog.hozaifaabdalla.com/"
	    }
	]
} 
projects.display = function(projects){
	for (activity in project.projects){
		//Displays the project heading
		$("#projects").append(HTMLprojectStart);
		var projectsurl = {
		 	"%url%": project.projects[activity].url,
	    	"%data%": project.projects[activity].title
		 };
		 var projectsurlRe = new RegExp(Object.keys(projectsurl).join("|"),"gi");
		 formattedProjectTitle = HTMLprojectTitle.replace(projectsurlRe, function(matched){
	  		return projectsurl[matched];
		 });
		formattedProjectDate = HTMLprojectDates.replace("%data%",project.projects[activity].dates);
		entireWorkDescription = project.projects[activity].description.join(" ");
		formattedProjectDescription = HTMLprojectDescription.replace("%data%", entireWorkDescription);
		// displays the headings under project such as title, date, and description
		$(".project-entry:last").append(formattedProjectTitle);
		$(".project-entry:last").append(formattedProjectDate);
		$(".project-entry:last").append(formattedProjectDescription);
		// generates the images
		if (project.projects[activity].images.length > 0){	
			for (pic in project.projects[activity].images){
			 	formattedProjectPic = HTMLprojectImage.replace("%data%", project.projects[activity].images[pic]);
			 	$(".project-entry:last").append(formattedProjectPic);
		    }
		}
	}
}
projects.display();

 /*********************************************************************************************************************************************************
																	FOOTER SECTION AND GOOGLE MAP

 **********************************************************************************************************************************************************/

// displays the footer
$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedLocation);
$("#footerContacts").append(formattedGithub);
$("#footerContacts").append(formattedNewContact);
// displays the google map
//$("#map-div").append(googleMap);
//$("#main").append(internationalizeButton);

/*********************************************************************************************************************************************************
																	END OF FILE

 **********************************************************************************************************************************************************/
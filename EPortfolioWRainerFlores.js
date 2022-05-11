//SVG Skills Section

var svgCircle = document.getElementById("svgCircle");
let step1 = document.getElementById("step1");
let step2 = document.getElementById("step2");
let step3 = document.getElementById("step3");
let step4 = document.getElementById("step4");
let step5 = document.getElementById("step5");
let projectsMain = document.getElementById("Projects");
let projectBox = document.querySelector("#projectBox")

projectsMain.style.backgroundImage = "url(../Rainer_E_Portfolio/ePortfolioImages/godaiProj.png)";

step1.addEventListener('click', (e) => {
    svgCircle.style.strokeDashoffset = "1004";
    projectsMain.style.backgroundImage = "url(../Rainer_E_Portfolio/ePortfolioImages/godaiProj.png)";
    projectBox.style.top = "150px";

    e.preventDefault();
});

step2.addEventListener('click', () => {
    svgCircle.style.strokeDashoffset = "753";
    projectsMain.style.backgroundImage = "url(../Rainer_E_Portfolio/ePortfolioImages/eCalculatorproj.png)";
    projectBox.style.top = "-220px";

    e.preventDefault();
});

step3.addEventListener('click', () => {
    svgCircle.style.strokeDashoffset = "502";
    projectsMain.style.backgroundImage = "url(../Rainer_E_Portfolio/ePortfolioImages/responsiveLayout.png)";
    projectBox.style.top = "-610px";

    e.preventDefault();
});

step4.addEventListener('click', () => {
    svgCircle.style.strokeDashoffset = "251";
    projectsMain.style.backgroundImage = "url(../Rainer_E_Portfolio/ePortfolioImages/medicalRegFormProj.png)";
    projectBox.style.top = "-980px";

    e.preventDefault();
});

step5.addEventListener('click', () => {
    svgCircle.style.strokeDashoffset = "0";
    projectBox.style.top = "-1350px";

    e.preventDefault();
});

//Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener('click', function() {
    this.classList.toggle("is-active");

    const visibility = navMenu.getAttribute("data-visible");
    if (visibility === "false") {
        navMenu.setAttribute("data-visible", true);
        hamburger.setAttribute("aria-expanded", true)
    } else {
        navMenu.setAttribute("data-visible", false)
        hamburger.setAttribute("aria-expanded", false)
    }
});





//Navbar section
let navbar = document.querySelector(".navbar");
let heroSection = document.querySelector(".hero-section");
let sectionOneOptions = {
    rootMargin: "-100px 0px 0px 0px"
};


let sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver){
    entries.forEach(entry => {
        // console.log(entry.target)
        if (!entry.isIntersecting) {
            navbar.classList.add("nav-scrolled");
        }
        else {
            navbar.classList.remove("nav-scrolled");
        }
    })
}, sectionOneOptions);

sectionOneObserver.observe(heroSection);

//Download CV
let cvDownload = document.querySelector("#div-block-3 #CVLink");
cvDownload.addEventListener('click', () => {
    const span = document.querySelector("#CVLink span");
    span.style.visibility = "visible";

    setTimeout(() => {
        span.style.visibility = "hidden";
        cvDownload.style.transition = "1s ease-in-out";
    }, 3000)
})


//Fade-in Section

const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -200px 0px"
};
const appearOnScroll = new IntersectionObserver(function(
        entries,
        appearOnScroll) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return;
                } else {
                    entry.target.classList.add('appear');
                    appearOnScroll.unobserve(entry.target)
                }
            })
        }, 
        appearOptions);

        faders.forEach(fader => {
            appearOnScroll.observe(fader);
        })


//Contact Us Validation
let contactForm = document.querySelector("#contactForm");
let fName = document.querySelector("#fName");
let LName = document.querySelector("#LName");
let email = document.querySelector("#email");
let contactNumber = document.querySelector("#contactNumber");
let message = document.querySelector("#message");
let submit = document.querySelector("#submit");

contactForm.addEventListener('input', (event2) => {
    let targetVar = event2.target.id;
    // console.log(event2.target.id);
    switch(targetVar) {
        case 'fName':
            checkfName();
            break;
        case 'LName':
            checkLName();
            break;
        case 'email':
            checkEmail();
            break;
        case 'contactNumber':
            checkNumber();
            break;
        case 'message':
            checkMessage();
            break;
    }
});


contactForm.addEventListener('submit', (event) => {
    checkfName();
    checkLName()
    checkEmail();
    checkNumber();
    checkMessage();
    event.preventDefault();
});

function checkfName() {
    let fnameValue = fName.value;
    //name validation
    if (fnameValue === "") {
        document.querySelector("#error1").innerText = "Enter your First Name";
    } else {
        let fnameFinal = fnameValue.trim();
        if (fnameFinal.length < 3) {
            document.querySelector("#error1").innerText = "Enter your First Name";
        } else {
            document.querySelector("#error1").innerText = `${fnameFinal}`;
        }
    }

};

function checkLName() {
    let LnameValue = LName.value;
    //name validation
    if (LnameValue === "") {
        document.querySelector("#error2").innerText = "Enter your Last Name";
    } else {
        let LnameFinal = LnameValue.trim();
        if (LnameFinal.length < 5) {
            document.querySelector("#error2").innerText = "Enter your Last Name";
        } else {
            document.querySelector("#error2").innerText = `${LnameFinal}`;
        }
    }

};

function checkEmail() {
    let emailValue = email.value;

    if (emailValue === "") {
        document.querySelector("error2").innertext = "Email must be filled out!";
    } else {
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let emailFinal = emailValue.trim();
        if ((regEmail.test(emailFinal)) && (emailFinal.indexOf(" ") === -1)) {
            document.querySelector("#error3").innerText = "Valid Email";
        } else {
            document.querySelector("#error3").innerText = "Email Address must be username@email.com and must not have any spaces!";
        }
    }
};


function checkNumber() {
    let contactNumberValue = contactNumber.value;
    let contactNumberFinal = contactNumberValue.trim();

        let phoneNum = /^\+?([0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})?[-. ]?([0-9]{4})$/;
        if ((phoneNum.test(contactNumberFinal))){
            document.querySelector("#error4").innerText = "Valid Number";
        } else {
            document.querySelector("#error4").innerText = "Phone number must be in the following format +XX-XXX-XXX-XXXX, +XX.XXX.XXX.XXXX, +XX XXX XXX XXXX";
        }
};

function checkMessage() {
    let messageValue = message.value
    let messageFinal = messageValue.trim();
        if (messageFinal.length < 50) {
            document.querySelector("#error5").innerText = "Please compose a detailed message!";
        } else {
            document.querySelector("#error5").innerText = "Thank you for your Inquiry!";
        }
}

let contactInquiryArray = [];
let addInquiry = document.querySelector("#submit");

let addContactInquiry = (e) => {
    let contactInquiry ={
        id: Date.now(),
        fname: document.querySelector("#fName").value,
        Lname: document.querySelector("#LName").value,
        email: document.querySelector("#email").value,
        number: document.querySelector("#contactNumber").value,
        message: document.querySelector("#message").value,
    }

    contactInquiryArray.push(contactInquiry);
    document.querySelector("#contactForm").reset();
    console.table(contactInquiryArray);

    localStorage.setItem("Contact Inquiries", JSON.stringify(contactInquiryArray));

    e.preventDefault();
}

addInquiry.addEventListener('click', addContactInquiry);
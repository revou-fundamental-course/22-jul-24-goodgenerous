const navbar = document.getElementById("navbar");
const navContainer = document.getElementById("nav-item");
const hamburger = document.getElementById("hamburger")
const hamburgerRelease = document.getElementById("hamburger-expanded")
const offsetNavbar = navbar.offsetTop;
const mediaQuery = window.matchMedia("(max-width: 992px)");

window.addEventListener("scroll", scrollNavbar);
window.addEventListener("resize", handleResize);
hamburger.addEventListener("click", handleExpand);
hamburgerRelease.addEventListener("click", handleReleaseExpand);

handleResize();

function scrollNavbar() {
    if (window.pageYOffset > offsetNavbar) {
        navbar.classList.add("navbar-scrolled")
    } else {
        navbar.classList.remove("navbar-scrolled");
    }
}

function handleExpand() {
    navbar.classList.add("#navbar-expanded")
    const navExpand = document.querySelector('#navbar-expanded')
    navExpand.style.display = 'flex';
}

function handleReleaseExpand() {
    navbar.classList.remove("#navbar-expanded")
    const navExpand = document.querySelector('#navbar-expanded')
    navExpand.style.display = 'none';
}

function handleResize() {
    if (!mediaQuery.matches) {
        navbar.classList.remove("navbar-expanded");
        const navExpand = document.querySelector('#navbar-expanded')
        navExpand.style.display = 'none';
    }
}

function formValidation() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let option = document.getElementById("option").value;

    let errorMessageName = "";
    let errorMessageEmail = "";
    let errorMessageOption = "";

    if (name === "") {
        errorMessageName = "Please enter your name!";
    }

    if (email === "") {
        errorMessageEmail = "Please enter your email!";
    }

    if (option === "") {
        errorMessageOption = "Please choose the country!";
    }

    document.getElementById("error-message-name").innerHTML = errorMessageName;
    document.getElementById("error-message-email").innerHTML = errorMessageEmail;
    document.getElementById("error-message-option").innerHTML = errorMessageOption;

    if (errorMessageName === "" && errorMessageEmail === "" && errorMessageOption === "") {
        alert("Thank you for submitting the data!");
    }
}


let indexSlide = 1;
showSlide(1);

function nextSlide(n) {
    showSlide(indexSlide += n)
}

function showSlide(n) {
    let listImage = document.getElementsByClassName('main-content-banner');

    if (n > listImage.length) {
        indexSlide = 1;
    }

    let index = 0;
    while (index < listImage.length) {
        listImage[index].style.display = 'none';
        index++;
    }

    listImage[indexSlide - 1].style.display = 'block';
}

setInterval(() => nextSlide(1), 2500);
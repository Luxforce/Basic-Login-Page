document.getElementById("signinBtn").onclick = function() {SignIn()};

function SignIn() {
    document.getElementById("signin").style.display = "block";
    document.getElementById("signupbtn").style.display = "none";
    document.getElementById("signinbtn").style.display = "none";
    document.getElementById("welcometext").style.display = "none";
}

document.getElementById("signupbtn").onclick = function() {SignUp()};

function SignUp() {
    document.getElementById("signup").style.display = "block";
    document.getElementById("signupbtn").style.display = "none";
    document.getElementById("signinbtn").style.display = "none";
    document.getElementById("welcometext").style.display = "none";
}

document.getElementById("loginbtn").onclick = function() {Login()};

function Login() {
    alert("Thanks for Logining in But At this time this website is under Matinence sorry for the inconvience")
}

document.getElementById("CreateAccount").onclick = function() {CreatAccount()};

function CreatAccount() {
    alert("Thanks for Signing Up But At this time this website is under Matinence sorry for the inconvience")
}
const loginPopup = document.getElementById("loginPopup");
const registerPopup = document.getElementById("registerPopup");

document.getElementById("openLoginPopup").onclick = function() {
    loginPopup.style.display = "block";
}

document.getElementById("closeLoginPopup").onclick = function() {
    loginPopup.style.display = "none";
}

document.getElementById("openRegisterPopup").onclick = function() {
    loginPopup.style.display = "none";
    registerPopup.style.display = "block";
}

document.getElementById("closeRegisterPopup").onclick = function() {
    registerPopup.style.display = "none";
}

document.getElementById("openLoginPopupAgain").onclick = function() {
    registerPopup.style.display = "none";
    loginPopup.style.display = "block";
}

//  email validation function
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

document.getElementById("registerButton").onclick = async function() {
    const email = document.getElementById("registerEmail").value;
    const username = document.getElementById("registerUsername").value;
    const age = document.getElementById("registerage").value;
    const gender = document.getElementById("registergender").value;
    const profile_pic = document.getElementById("registerpic").files[0];  // Handling file input
    const weight = document.getElementById("registerweight").value;
    const bmi = document.getElementById("registerbmi").value;
    const bio = document.getElementById("registerbio").value;
    const password = document.getElementById("registerPassword").value;
    const confirmPassword = document.getElementById("registerConfirmPassword").value;

    if (!validateEmail(email)) { 
        window.alert("Invalid email format! Please use a valid domain.");
        return;
    }

    if (password !== confirmPassword) {
        document.getElementById("registerMessage").innerText = "Passwords do not match!";
        return;
    }

    const formData = new FormData();
    formData.append("email", email);
    formData.append("username", username);
    formData.append("age", age);
    formData.append("gender", gender);
    formData.append("profile_pic", profile_pic);  
    formData.append("weight", weight);
    formData.append("bmi", bmi);
    formData.append("bio", bio);
    formData.append("password", password);

 
    const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        body: formData
    });

    const result = await response.text();
    document.getElementById("registerMessage").innerText = result;

    if (response.ok) {
        
        registerPopup.style.display = "none"; 
        loginPopup.style.display = "block"; 
        document.getElementById("loginUsername").value = username; 
        document.getElementById("loginPassword").value = password; 
    }
};

document.getElementById("loginButton").onclick = async function() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
    });

    const result = await response.text();
    document.getElementById("loginMessage").innerText = result;

    if (response.ok) {
        // Store login status in localStorage
        localStorage.setItem("loggedIn", "true");
        window.location.href = "index.html"; // Redirect to the index page
    }
};

window.onload = function() {

    const profileButton = document.getElementById('profile-button');
    const openLoginPopup = document.getElementById('openLoginPopup');
    const userProfile = JSON.parse(localStorage.getItem('userProfile'));
    
    if (userProfile) {
       
        document.getElementById('profile-pic').src = userProfile.profile_pic || 'default-pic.png';
        document.getElementById('username-display').textContent = userProfile.username || 'Guest';
        document.getElementById('profile-button').style.display = 'block'; 
        document.getElementById('openLoginPopup').style.display = 'none'; 
    } else {
        
        document.getElementById('profile-button').style.display = 'none';
        document.getElementById('openLoginPopup').style.display = 'block';
    }
};



function getUserProfile(id){
    console.log(`Fetching user profile for ID: ${id}`);
    
}



window.addEventListener('load', function() {
    const userProfile = JSON.parse(localStorage.getItem('userProfile'));
    if (userProfile) {
        updateLoginButton(userProfile.id, userProfile.profile_pic);
    }
});
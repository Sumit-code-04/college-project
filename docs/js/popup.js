const modal = document.getElementById("loginModal");

const btn = document.getElementById("loginBtn");

const span = document.getElementById("closeBtn");

btn.onclick = function() {
    loadForm('login.html'); 
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

function loadForm(form) {
    const formContainer = document.getElementById("formContainer");
    fetch(form)
        .then(response => response.text())
        .then(data => {
            formContainer.innerHTML = data;

            
            const showRegister = document.getElementById("showRegister");
            const showLogin = document.getElementById("showLogin");

            if (showRegister) {
                showRegister.onclick = function() {
                    loadForm('register.html');
                };
            }

            if (showLogin) {
                showLogin.onclick = function() {
                    loadForm('login.html'); 
                };
            }
        });
}

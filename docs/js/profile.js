document.addEventListener("DOMContentLoaded", function () {
    const isLoggedIn = localStorage.getItem("loggedIn");

    
    if (isLoggedIn === "true") {
        
        document.getElementById("openLoginPopup").style.display = "none"; 
        const profilePic = document.getElementById("profilePic");
        profilePic.style.display = "block"; 

        
        fetch('/getProfilePic')
            .then(response => response.json())
            .then(data => {
                if (data.profilePicUrl) {
                    profilePic.src = data.profilePicUrl; 
                }
            })
            .catch(err => console.error('Error fetching profile picture:', err));

        profilePic.addEventListener("click", function () {
            const menu = document.getElementById("profileMenu");
            menu.style.display = (menu.style.display === "block") ? "none" : "block";
        });

        document.getElementById("logoutButton").addEventListener("click", function () {
            localStorage.removeItem("loggedIn");

            document.getElementById("profilePic").style.display = "none"; 
            document.getElementById("openLoginPopup").style.display = "block"; 

            document.getElementById("profileMenu").style.display = "none";

            window.scrollTo(0, 0);
        });
    } else {
        document.getElementById("openLoginPopup").style.display = "block"; 
        document.getElementById("profilePic").style.display = "none"; 
    }

    document.getElementById("openLoginPopup").addEventListener("click", function () {
        document.getElementById("loginPopup").style.display = "block"; 
        window.scrollTo(0, 0); 
    });
});

//  to get user ID from cookies
function getUserIdFromCookies() {
    const cookies = document.cookie.split('; ');
    for (let cookie of cookies) {
        const [name, value] = cookie.split('=');
        if (name === 'userId') return value;
    }
    return null; 
}


function getUserProfile() {
    fetch('/profile')
        .then(response => {
            if (!response.ok) throw new Error('Failed to fetch user profile');
            return response.json();
        })
        .then(data => {
            populateProfileView(data);
        })
        .catch(error => alert('Error fetching user profile: ' + error.message));
}


function populateProfileView(data) {
    document.getElementById('user-username').textContent = data.username || 'N/A';
    document.getElementById('user-email').textContent = data.email || 'N/A';
    document.getElementById('user-age').textContent = data.age || 'N/A';
    document.getElementById('user-gender').textContent = data.gender || 'N/A';
    document.getElementById('user-weight').textContent = data.weight || 'N/A';
    document.getElementById('user-bmi').textContent = data.bmi || 'N/A';
    document.getElementById('user-bio').textContent = data.bio || 'N/A';

    
    fetch('/getProfilePic')
        .then(response => response.json())
        .then(data => {
            document.getElementById('profile-pic').src = data.profilePicUrl || 'default-pic.png';
        })
        .catch(error => console.error('Error fetching profile picture:', error));
}


function showEditForm() {
    fetch('/profile')
        .then(response => {
            if (!response.ok) throw new Error('Failed to fetch user data for edit');
            return response.json();
        })
        .then(data => {
            document.getElementById('edit-username').value = data.username || '';
            document.getElementById('edit-email').value = data.email || '';
            document.getElementById('edit-age').value = data.age || '';
            document.getElementById('edit-gender').value = data.gender || '';
            document.getElementById('edit-weight').value = data.weight || '';
            document.getElementById('edit-bio').value = data.bio || '';

            document.getElementById('profile').classList.add('hidden');
            document.getElementById('edit-form').classList.remove('hidden');
        })
        .catch(error => alert('Error loading edit form data: ' + error.message));
}


document.getElementById('update-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('username', document.getElementById('edit-username').value);
    formData.append('email', document.getElementById('edit-email').value);
    formData.append('age', document.getElementById('edit-age').value);
    formData.append('gender', document.getElementById('edit-gender').value);
    formData.append('weight', document.getElementById('edit-weight').value);
    formData.append('bmi', calculateBMI(document.getElementById('edit-weight').value));
    formData.append('bio', document.getElementById('edit-bio').value);

    const profilePicFile = document.getElementById('edit-profile-pic').files[0];
    if (profilePicFile) {
        formData.append('profile_pic', profilePicFile);
    }

    
    fetch('/profile', {
        method: 'PUT',
        body: formData,
    })
    .then(response => response.json()) 
    .then(data => {
        if (data.message === 'Profile updated successfully') {  // Check message instead
            alert('Profile updated successfully!');
            getUserProfile(); // Refresh profile view
            document.getElementById('edit-form').classList.add('hidden');
            document.getElementById('profile').classList.remove('hidden');
        } else {
            throw new Error(data.message || 'Failed to update profile');
        }
    })
    
    .catch(error => alert('Error updating profile: ' + error.message));
});


document.getElementById('cancel-btn').addEventListener('click', () => {
    document.getElementById('edit-form').classList.add('hidden');
    document.getElementById('profile').classList.remove('hidden');
});

document.getElementById('edit-profile-pic').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('profile-pic-preview').src = e.target.result;
            document.getElementById('profile-pic-preview').classList.remove('hidden');
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById('edit-btn').addEventListener('click', showEditForm);

function calculateBMI(weight) {
    const heightInMeters = 1.75; // Replace with actual height if available
    return (weight / (heightInMeters * heightInMeters)).toFixed(1);
}

document.addEventListener("DOMContentLoaded", function() {
    getUserProfile();
});

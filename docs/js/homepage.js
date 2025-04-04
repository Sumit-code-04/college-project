function subscribe() {
    const emailInput = document.getElementById('email');
    const message = document.getElementById('subscribe-message');
    const email = emailInput.value;

    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(email)) {
        message.style.color = 'green';
        message.innerText = 'Thank you for subscribing!';
        emailInput.value = ''; 

    
        sendEmailToServer(email);
    } else {
        message.style.color = 'red';
        message.innerText = 'Please enter a valid email address.';
    }
}

function sendContact() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('emailContact').value;
    const message = document.getElementById('message').value;

    
    if (!name || !email || !message) {
        document.getElementById('contact-message').innerText = 'All fields are required.';
        return;
    }

    
    fetch('/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('contact-message').innerText = data.message;
        // Clear fields
        document.getElementById('name').value = '';
        document.getElementById('emailContact').value = '';
        document.getElementById('message').value = '';
    })
    .catch((error) => {
        console.error('Error:', error);
        document.getElementById('contact-message').innerText = 'There was an error sending your message.';
    });
}


document.querySelector(".menu-toggle").addEventListener("click", function () {
    document.querySelector(".navbar").classList.toggle("show");
});



// for testimonial option
/*
    document.getElementById('testimonialForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const testimonial = document.getElementById('testimonial').value;

    // Create a new testimonial element
    const newTestimonial = document.createElement('div');
    newTestimonial.classList.add('testimonial');
    newTestimonial.innerHTML = `<h3>${name}</h3><p>"${testimonial}"</p>`;

    // Append the new testimonial to the testimonial section
    document.querySelector('.testimonial-section').appendChild(newTestimonial);

    // Clear the form
    document.getElementById('testimonialForm').reset();
});
*/

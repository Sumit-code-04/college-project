// Function to load testimonials on page load
async function loadTestimonials() {
    try {
        const response = await fetch('http://localhost:4000/testimonials'); 
        const testimonials = await response.json();

        
        const testimonialSection = document.getElementById('testimonialSection');
        testimonialSection.innerHTML = ''; // Clear existing content

        testimonials.forEach(t => {
            const testimonialElement = document.createElement('div');
            testimonialElement.classList.add('testimonial');
            testimonialElement.innerHTML = `<h4>${t.name}</h4><p>"${t.testimonial}"</p>`;
            testimonialSection.appendChild(testimonialElement);
        });
    } catch (error) {
        console.error('Error loading testimonials:', error);
    }
}


window.addEventListener('load', loadTestimonials);


document.getElementById('testimonialForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value;
    const testimonial = document.getElementById('testimonial').value;

    try {
        const response = await fetch('http://localhost:4000/addTestimonial', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, testimonial })
        });

        const result = await response.json();
        if (response.ok) {
            alert(result.message); 
            document.getElementById('testimonialForm').reset(); 
            loadTestimonials(); 
        } else {
            alert('Failed to submit testimonial');
            console.error(result.error);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    }
});
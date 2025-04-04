document.addEventListener("DOMContentLoaded", function() {
    function openModal(id) {
        document.getElementById(id).style.display = "block";
    }

    function closeModal(id) {
        document.getElementById(id).style.display = "none";
    
        var video = document.querySelector(`#${id} video`);
    
        if (video) {
            video.pause(); 
            video.currentTime = 0; 
        }
    }

    window.openModal = openModal;
    window.closeModal = closeModal;

    function markComplete(day) {
        document.getElementById(`status-day${day}`).innerText = "Completed!";
        alert(`Great job on completing Day ${day}! Keep up the good work.`);
    }

    window.markComplete = markComplete;
});

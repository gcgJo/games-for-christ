 
function toggleDropdown(){
    var dropdown = document.getElementById("dropdown");
    if (dropdown.style.maxHeight) {
        dropdown.style.maxHeight = null;
    } else {
        dropdown.style.maxHeight = dropdown.scrollHeight + "px";
    }
}


let currentSection = 0;

function showSection(index) {
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, i) => {
        section.classList.toggle('active', i === index);
    });
}

function nextSection() {
    const sections = document.querySelectorAll('.section');
    currentSection = (currentSection + 1) % sections.length;
    showSection(currentSection);
}

function previousSection() {
    const sections = document.querySelectorAll('.section');
    currentSection = (currentSection - 1 + sections.length) % sections.length;
    showSection(currentSection);
}

// Feedback Form Modal
function openFeedbackForm() {
    document.getElementById('feedbackModal').style.display = 'block';
}

function closeFeedbackForm() {
    document.getElementById('feedbackModal').style.display = 'none';
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('feedbackModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Handle form submission
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your feedback!');
    closeFeedbackForm();
});

let likeCount = 0;
let dislikeCount = 0;

function likePost() {
    likeCount++;
    document.getElementById('likeCount').innerText = likeCount;
}

function dislikePost() {
    dislikeCount++;
    document.getElementById('dislikeCount').innerText = dislikeCount;
}





  





  

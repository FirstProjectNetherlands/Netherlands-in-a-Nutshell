const message = "Thank you for your message. We will respond as soon as possible.";

document.getElementById("contactForm").addEventListener("submit", function(event) {

event.preventDefault();

alert(message);

});
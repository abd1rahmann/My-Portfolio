const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/contact.html', (req, res) => {
    const { name, email, subject, message } = req.body;
    console.log(`Received message from ${name} (${email}): ${subject} - ${message}`);
    res.json({ status: 'success', message: 'Your message has been sent. Thank you!' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("contact-form");
    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        var formData = new FormData(form);

        var xhr = new XMLHttpRequest();
        xhr.open("POST", "/send-message-endpoint", true); 
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    var sentMessage = document.querySelector(".sent-message");
                    sentMessage.classList.remove("d-none");
                } else {
                    console.error("Något gick fel vid skickande av meddelandet.");
                }
            }
        };
        xhr.send(formData);
    });
});
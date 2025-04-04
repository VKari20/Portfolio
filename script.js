document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Stop default form submission

        let isValid = true;
        let name = document.getElementById("name");
        let email = document.getElementById("email");
        let message = document.getElementById("message");

        // Name Validation
        if (name.value.trim() === "") {
            showError(name, "Name is required.");
            isValid = false;
        } else {
            clearError(name);
        }

        // Email Validation
        if (!validateEmail(email.value)) {
            showError(email, "Enter a valid email.");
            isValid = false;
        } else {
            clearError(email);
        }

        // Message Validation
        if (message.value.trim().length < 10) {
            showError(message, "Message must be at least 10 characters.");
            isValid = false;
        } else {
            clearError(message);
        }

        if (isValid) {
            let formMessage = document.getElementById("formMessage");
            formMessage.textContent = "Message Sent Successfully!";
            formMessage.classList.add("success");
            formMessage.classList.remove("hidden");
            this.reset();
        }
    });

    // Function to Show Error
    function showError(input, message) {
        let errorElement = input.parentElement.querySelector(".error-message");
        errorElement.textContent = message;
        errorElement.style.display = "block";
    }

    // Function to Clear Error
    function clearError(input) {
        let errorElement = input.parentElement.querySelector(".error-message");
        errorElement.textContent = "";
        errorElement.style.display = "none";
    }

    // Function to Validate Email
    function validateEmail(email) {
        let re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(email);
    }
});

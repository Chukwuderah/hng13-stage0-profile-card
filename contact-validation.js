document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const nameInput = document.getElementById("contactName");
  const emailInput = document.getElementById("contactEmail");
  const subjectInput = document.getElementById("contactSubject");
  const messageInput = document.getElementById("contactMessage");

  const nameIcon = document.getElementById("nameIcon");
  const emailIcon = document.getElementById("emailIcon");
  const subjectIcon = document.getElementById("subjectIcon");
  const messageIcon = document.getElementById("messageIcon");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const subjectError = document.getElementById("subjectError");
  const messageError = document.getElementById("messageError");
  const successMessage = document.getElementById("successMessage");

  // --- Utility Functions ---

  function clearErrors() {
    [nameError, emailError, subjectError, messageError].forEach(
      (el) => (el.textContent = "")
    );

    [nameInput, emailInput, subjectInput, messageInput].forEach((el) =>
      el.classList.remove("error")
    );

    successMessage.textContent = "";
    successMessage.classList.remove("show");
  }

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function updateIconState(icon, isValid) {
    if (isValid) {
      icon.textContent = "✔";
      icon.classList.add("valid");
      icon.setAttribute("aria-label", "valid");
    } else {
      icon.textContent = "*";
      icon.classList.remove("valid");
      icon.setAttribute("aria-label", "required");
    }
  }

  function resetIcons() {
    updateIconState(nameIcon, false);
    updateIconState(emailIcon, false);
    updateIconState(subjectIcon, false);
    updateIconState(messageIcon, false);
  }

  // --- Validation Logic ---

  function validateForm() {
    clearErrors();
    let isValid = true;

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const subject = subjectInput.value.trim();
    const message = messageInput.value.trim();

    if (name === "") {
      nameError.textContent = "Full name is required";
      nameInput.classList.add("error");
      isValid = false;
    } else if (name.length < 2) {
      nameError.textContent = "Name must be at least 2 characters";
      nameInput.classList.add("error");
      isValid = false;
    }

    if (email === "") {
      emailError.textContent = "Email address is required";
      emailInput.classList.add("error");
      isValid = false;
    } else if (!validateEmail(email)) {
      emailError.textContent = "Please enter a valid email address";
      emailInput.classList.add("error");
      isValid = false;
    }

    if (subject === "") {
      subjectError.textContent = "Subject is required";
      subjectInput.classList.add("error");
      isValid = false;
    } else if (subject.length < 3) {
      subjectError.textContent = "Subject must be at least 3 characters";
      subjectInput.classList.add("error");
      isValid = false;
    }

    if (message === "") {
      messageError.textContent = "Message is required";
      messageInput.classList.add("error");
      isValid = false;
    } else if (message.length < 10) {
      messageError.textContent = "Message must be at least 10 characters";
      messageInput.classList.add("error");
      isValid = false;
    }

    return isValid;
  }

  // --- Success Handler ---

  function showSuccess(formData) {
    successMessage.textContent = `Thank you, ${formData.name}! Your message has been sent successfully. We'll get back to you at ${formData.email} soon.`;
    successMessage.classList.add("show");

    form.reset();
    resetIcons(); // Reset all icons to stars

    setTimeout(() => {
      successMessage.classList.remove("show");
      successMessage.textContent = "";
    }, 8000);
  }

  // --- Event Listeners ---

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (validateForm()) {
      const formData = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        subject: subjectInput.value.trim(),
        message: messageInput.value.trim(),
      };

      console.log("Form submitted with data:", formData);
      showSuccess(formData);
    } else {
      const firstError = form.querySelector(".error");
      if (firstError) firstError.focus();
    }
  });

  [nameInput, emailInput, subjectInput, messageInput].forEach((input) => {
    input.addEventListener("input", function () {
      let isValid = false;

      if (this === nameInput) {
        isValid = this.value.trim().length >= 2;
        updateIconState(nameIcon, isValid);
      }

      if (this === emailInput) {
        isValid = validateEmail(this.value.trim());
        updateIconState(emailIcon, isValid);
      }

      if (this === subjectInput) {
        isValid = this.value.trim().length >= 3;
        updateIconState(subjectIcon, isValid);
      }

      if (this === messageInput) {
        isValid = this.value.trim().length >= 10;
        updateIconState(messageIcon, isValid);
      }

      if (this.classList.contains("error")) {
        this.classList.remove("error");
        const errorId = this.getAttribute("aria-describedby");
        const errorElement = document.getElementById(errorId);
        if (errorElement) errorElement.textContent = "";
      }
    });

    input.addEventListener("blur", function () {
      const value = this.value.trim();

      if (this === nameInput && value && value.length < 2) {
        nameError.textContent = "Name must be at least 2 characters";
        nameInput.classList.add("error");
      }

      if (this === emailInput && value && !validateEmail(value)) {
        emailError.textContent = "Please enter a valid email address";
        emailInput.classList.add("error");
      }

      if (this === subjectInput && value && value.length < 3) {
        subjectError.textContent = "Subject must be at least 3 characters";
        subjectInput.classList.add("error");
      }

      if (this === messageInput && value && value.length < 10) {
        messageError.textContent = "Message must be at least 10 characters";
        messageInput.classList.add("error");
      }
    });
  });

  console.log("Contact form validation initialized successfully");
});

document.getElementById('reg-form').addEventListener('submit', async function (event) {
    event.preventDefault();
  
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const userType = document.getElementById('userType').value;
    const terms = document.getElementById('terms').checked;
  
    if (!terms) {
      Toastify({
        text: "You must agree to the terms and conditions.",
        backgroundColor: "red",
        duration: 3000
      }).showToast();
      return;
    }
  
    const data = {
      firstName,
      lastName,
      email,
      password,
      userType
    };
  
    try {
      const response = await fetch('https://jbs-backend.onrender.com/api/v1/users/signUp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      const result = await response.json();
  
      if (response.ok) {
        Toastify({
          text: "Registration successful!",
          backgroundColor: "green",
          duration: 3000
        }).showToast();
  
        if (userType === 'jobSeeker') {
          setTimeout(() => {
            window.location.href = '/job-application.html'; // Replace with actual job application page URL
          }, 3000);
        } else if (userType === 'employer') {
          setTimeout(() => {
            window.location.href = '/employe.html'; // Replace with actual employer form page URL
          }, 3000);
        }
      } else {
        Toastify({
          text: result.message || "Registration failed!",
          backgroundColor: "red",
          duration: 3000
        }).showToast();
      }
    } catch (error) {
      Toastify({
        text: "An error occurred. Please try again.",
        backgroundColor: "red",
        duration: 3000
      }).showToast();
    }
  });
  
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM fully loaded');

  const registrationForm = document.getElementById('reg-form');

  if (registrationForm) {
      registrationForm.addEventListener('submit', async function(event) {
          event.preventDefault();
          
          const firstName = document.getElementById('firstName').value;
          const lastName = document.getElementById('lastName').value;
          const email = document.getElementById('email').value;
          const password = document.getElementById('password').value;
          const confirmPassword = document.getElementById('cpassword').value;

          if (!firstName || !lastName || !email || !password || !confirmPassword) {
              showErrorMessage('Please enter all credentials');
              return;
          }

          if (password.length < 8) {
              showErrorMessage('Password must be at least 8 characters');
              return;
          }

          if (password !== confirmPassword) {
              showErrorMessage('Password and confirm password should match');
              return;
          }

          const formData = {
              firstName: firstName,
              lastName: lastName,
              email: email,
              password: password,
              confirmPassword: confirmPassword
          };

          try {
              const response = await fetch("http://localhost:8000/api/v1/users/signUp", {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(formData)
              });

              const data = await response.json();

              if (!response.ok) {
                  showErrorMessage(data.message || 'Failed to register!');
                  return;
              }

              showSuccessMessage('Registration successful!');
              document.getElementById('registrationMessage').textContent = data.message;

              if (data.redirect_url) {
                  setTimeout(() => {
                      window.location.href = data.redirect_url;
                  }, 2000);
              }

          } catch (error) {
              showErrorMessage('An error occurred. Please try again.');
          }
      });
  } else {
      console.log('registrationForm not found');
  }
});

// Function to show success message
function showSuccessMessage(message) {
  Toastify({
      text: message || "Operation completed successfully!",
      duration: 3000,
      close: true,
      backgroundColor: "green",
      className: "toastify-success"
  }).showToast();
}

// Function to show error message
function showErrorMessage(message) {
  Toastify({
      text: message || "Error: Something went wrong!",
      duration: 3000,
      close: true,
      backgroundColor: "red",
      className: "toastify-error"
  }).showToast();
}

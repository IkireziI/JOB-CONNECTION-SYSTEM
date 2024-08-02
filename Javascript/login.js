//login
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded');
    const loginForm = document.getElementById('login-form');
    console.log(loginForm)
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = {
                email: document.getElementById('email').value,
                Password: document.getElementById('password').value,
            };
            console.log(formData);
            fetch('http://localhost:8000/api/v1/users/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                document.getElementById('loginMessage').textContent = data.message;
                
                if (data.user.role === 'admin') {

                    window.location.href = './dashboard.html'; 
                  } else if (data.user.role === 'talent') {
                    window.location.href = './dashboard.html'; 
                  } else {
                    window.location.href = './dash.html'
                  } 
              });
        });
       
    } else {
        console.log('login Form not found');
    }
  });
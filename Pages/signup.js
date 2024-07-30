// document.addEventListener("DOMContentLoaded", function () {
//     const form = document.getElementById("reg-form");
//     form.addEventListener("submit", async function (event) {
//         event.preventDefault();

//         const firstName = document.getElementById("firstName").value;
//         const lastName = document.getElementById("lastName").value;
//         const email = document.getElementById("email").value;
//         const password = document.getElementById("password").value;
//         const cpassword = document.getElementById("cpassword").value;

//         if (password !== cpassword) {
//             displayToast("Passwords do not match!", "error");
//             return;
//         }

//         const terms = document.querySelector('input[value="terms"]').checked;
//         if (!terms) {
//             displayToast("You must agree to the terms and conditions.", "error");
//             return;
//         }

//         const userData = {
//             firstName,
//             lastName,
//             email,
//             password
//         };

//         try {
//             const response = await fetch("http://localhost:8000/api/v1/users/signUp", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify(userData)
//             });

//             if (!response.ok) {
//                 const errorData = await response.json();
//                 displayToast(errorData.message || "Failed to register!", "error");
//                 return;
//             }

//             const data = await response.json();
//             displayToast("Registration successful!", "success");

//             // Optionally, redirect to login page after successful registration
//             setTimeout(() => {
//                 window.location.href = "./login.html";
//             }, 2000);

//         } catch (error) {
//             displayToast("An error occurred. Please try again.", "error");
//         }
//     });
// });

// function displayToast(message, type) {
//     Toastify({
//         text: message,
//         duration: 3000,
//         close: true,
//         gravity: "top",
//         position: "center",
//         backgroundColor: type === "success" ? "green" : "red",
//     }).showToast();
// }

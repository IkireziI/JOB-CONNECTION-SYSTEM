// job-creation.js

document.getElementById('job-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Gather form data
    const jobTitle = document.getElementById('job-title').value;
    const jobDescription = document.getElementById('job-description').value;
    const jobLocation = document.getElementById('job-location').value;
    const jobType = document.getElementById('job-type').value;
    const salary = document.getElementById('salary').value;

    // Create a new job listing
    const newJobHtml = `
        <div class="job">
            <h2>${jobTitle}</h2>
            <p>Location: ${jobLocation}</p>
            <p>Description: ${jobDescription}</p>
            <p>Job Type: ${jobType}</p>
            <p>Salary: ${salary}</p>
            <a href="#" class="apply-btn">Apply Now</a>
        </div>
    `;

    // Update job list in job.html
    // For simplicity, we'll use local storage to share data between pages.
    let jobsList = JSON.parse(localStorage.getItem('jobsList')) || [];
    jobsList.push(newJobHtml);
    localStorage.setItem('jobsList', JSON.stringify(jobsList));

    // Display a success message
    document.getElementById('jobMessage').innerText = 'Job listing created successfully!';

    // Optionally, clear the form fields
    document.getElementById('job-form').reset();
});

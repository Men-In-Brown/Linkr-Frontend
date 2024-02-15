function createCompany() {
    const form = document.getElementById('createCompanyForm');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const formData = {
        companyName: form.companyName.value,
        CEO: form.CEO.value,
        description: form.description.value,
        yearFounded: form.yearFounded.value,
        industry: form.industry.value,
        location: form.location.value,
        mission: form.mission.value,
        website: form.website.value,
      };
  
      const url = 'https://localhost:8069/api/companies';
  
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          // Handle the successful response, e.g., show a success message
          console.log('Company created successfully:', data);
          // You can redirect to another page or update the UI as needed
        })
        .catch(error => {
          // Handle errors, e.g., show an error message
          console.error('Error creating company:', error);
        });
    });
}

// Call the function when the document is ready
document.addEventListener('DOMContentLoaded', createCompany);  
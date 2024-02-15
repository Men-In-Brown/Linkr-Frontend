async function signUp() {
    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:8069/api/employees', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        
        if (!response.ok) {
            throw new Error('Registration failed');
        }

        const data = await response.json();
        console.log(data.message); // Display success message

        // Redirect or perform any other action after successful registration
        // You can also call the login function to automatically log in the user after registration
        // login();
    } catch (error) {
        console.error('Registration failed:', error.message);
        // Handle registration failure, show an error message, etc.
    }
}
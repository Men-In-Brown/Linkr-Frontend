async function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('https://linkr.stu.nighthawkcodingsociety.com/api/authenticate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
            throw new Error('Invalid credentials');
        }

        const data = await response.json();
        const token = data.token; // Assuming the server returns a JWT token in the response

        // Store the token in local storage or session storage
        localStorage.setItem('jwtToken', token);

        // Redirect or perform any other action after successful login
        window.location.href = 'AB_ideafindr.html';
    } catch (error) {
        console.error('Login failed:', error.message);
        // Handle login failure, show an error message, etc.
    }
}
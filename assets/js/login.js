async function login() {
    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log(email);
    console.log(password);

    try {
        const response = await fetch('http://localhost:8069/authenticate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                email, 
                password 
            }),
        });

        console.log(response);

        if (!response.ok) {
            throw new Error('Invalid credentials');
        }

        // const data = await response.json();
        // const token = data.token;

        // Store the token in local storage or session storage
        // localStorage.setItem('jwtToken', token);

        // Redirect or perform any other action after successful login
        window.location.href = 'AB_companyfindr.html';
    } catch (error) {
        console.error('Login failed:', error.message);
        // Handle login failure, show an error message, etc.
    }
}
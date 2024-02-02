---
layout: post
title: Login
units: "1,2,3,4,5,6,7,8,9"
course: csa
---

<style>
    body {
        font-family: 'Arial', sans-serif;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #f4f4f4;
    }

    #login-container {
        background: linear-gradient(to bottom, #673ab7, #8e44ad);
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        width: 300px;
        max-width: 80%;
        text-align: center;
    }

    #login-header {
        background: linear-gradient(to bottom, #8e44ad, #673ab7);
        color: #fff;
        padding: 15px;
        font-size: 1.5em;
    }

    #login-form {
        padding: 20px;
        box-sizing: border-box;
    }

    input {
        width: 100%;
        padding: 10px;
        margin-bottom: 15px;
        box-sizing: border-box;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 14px;
    }

    button {
        width: 100%;
        padding: 10px;
        background-color: #3498db;
        color: #fff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
    }

    button:hover {
        background-color: #2980b9;
    }
</style>

<div id="login-container">
    <div id="login-header">
        Login
    </div>
    <div id="login-form">
        <input type="text" id="username" placeholder="Username" required>
        <input type="password" id="password" placeholder="Password" required>
        <button onclick="login()">Login</button>
    </div>
</div>

<script>
    function login() {
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        // Add your login logic here
        // For demonstration purposes, simply log the credentials
        console.log('Username: ' + username);
        console.log('Password: ' + password);
    }
</script>
---
layout: page
title: Create A Company
---

<link rel="stylesheet" type="text/css" href="{{ site.baseurl }}/assets/css/createcompany.css">

<div id="companyForm">
<form id="createCompanyForm" action="{{ site.baseurl }}/create_company" method="post">
  <label for="companyName">Company Name:</label>
  <input type="text" id="companyName" name="companyName" required>
  <br>
  <label for="CEO">CEO:</label>
  <input type="text" id="CEO" name="CEO" required>
  <br>
  <label for="description">Description:</label>
  <textarea id="description" name="description" required></textarea>
  <br>
  <label for="yearFounded">Year Founded:</label>
  <select id="yearFounded" name="yearFounded" required>
    <!-- Add options for the year range -->
    <option value="2022">2024</option>
    <option value="2021">2023</option>
    <option value="2022">2022</option>
    <option value="2021">2021</option>
    <option value="2022">2020</option>
    <!-- Add more years as needed -->
  </select>
  <br>
  <label for="industry">Industry:</label>
  <input type="text" id="industry" name="industry" required>
  <br>
  <label for="location">Location:</label>
  <input type="text" id="location" name="location" required>
  <br>
  <label for="mission">Mission:</label>
  <textarea id="mission" name="mission" required></textarea>
  <br>
  <label for="website">Website:</label>
  <input type="url" id="website" name="website" required>
  <br>
  <button onclick="createCompany()" type="submit" class="submit-btn">Create Company</button>
</form>
</div>

<script src="{{ site.baseurl }}/assets/js/createcompany.js"></script>

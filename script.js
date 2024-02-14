function getFormvalue(event) {
  // Prevent the default form submission
  event.preventDefault();

  // Get the form
  var form = document.getElementById('form1');

  // Get the values of the first name and last name
  var firstName = form.elements['fname'].value;
  var lastName = form.elements['lname'].value;

  // Print the first and last name of the user using alert
  alert(firstName + ' ' + lastName);
}

// Add event listener to the form on submit
document.getElementById('form1').onsubmit = getFormvalue;

function getFormvalue() {
    event.preventDefault();  

	var form = documtent.getElementByID('form1');

	var firstName = form.elements['fname'].value; 
	var lastName = form.elements['lname'].value; 
	alert(firstname + " " + lastName);
}
document.getElementById('form1').onsubmit = getFormvalue;


$(document).ready(function () {
	//email pattern pre-made function

	var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

	//Moves the focus to the Arrival date text box.
	$("#arrival_date").focus();

	//Submission of form: valid entries
	$("#reservation_form").submit(
		 function(event) {
			 
			 //isValid variable
			 var isValid = true;

			 // Arrival Date
			 var arrivalDate = $("#arrival_date").val().trim();
			 //Check if empty
			 if (arrivalDate == "") {
				  $("#arrival_date").next().text("This field is required.");
				  isValid = false;
			 } else {
				  $("#arrival_date").next().text("");                 
			 }
			 $("#arrival_date").val(arrivalDate);

			 //Number of Nights
			 var nights = $("#nights").val().trim();
			 //Check if empty
			 if (nights == "") {
				  $("#nights").next().text("This field is required.");
				  isValid = false;
			//Check that number
			 } else if (isNaN($("#nights").val())) {
				  $("#nights").next().text("Only enter numbers.");
				  isValid = false;
			 } else {
				  $("#nights").next().text("");
			 }
			 $("#nights").val(nights);   

			 //Name
			 var name = $("#name").val().trim();
			 //Is empty
			 if (name == "") {
				  $("#name").next().text("This field is required.");
				  isValid = false;
			 }
			 else {
				  $("#name").val(name);
				  $("#name").next().text("");
			 }
			 $("#name").val(name);	
			 
			 
			 //Validate email
			 var email = $("#email").val();
			 //is empty
			 if (email == "") {
				  $("#email").next().text("This field is required.");
				  isValid = false;
			//check with pattern
			 } else if (!emailPattern.test(email) ) {
				  $("#email").next().text("Must be a valid email address.");
				  isValid = false;
			 } else {
				  $("#email").next().text("");
			 }
			 $("#email").val(email);

			 //Phone Number
			 var phone = $("#phone").val().trim();
			 //Empty
			 if (phone == "") {
				  $("#phone").next().text("This field is required.");
				  isValid = false;
			 } else {
				  $("#phone").next().text("");
			 }
			 $("#phone").val(phone);
			 
			 
			 //Make sure all entries valid before submission 
			 if (isValid == false) {
				  event.preventDefault();              
			 }
		 }
	);
});
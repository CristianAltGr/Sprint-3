
// Exercise 7

  

function validate() {
	
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName").value;
	var fLName = document.getElementById("fLastN").value; 
	var fEmail = document.getElementById("fEmail").value;
	var fAddress = document.getElementById("fAddress").value;
	var fPassword = document.getElementById("fPassword").value;
	var fPhone = document.getElementById("fPhone").value;

	
	//NAME

	error= onlyLetters(fName);

	// LAST NAME

	error= onlyLettersLName(fLName);

	//EMAIL

	error= mailcheking(fEmail);

	//PASSWORD

	error= checkPassword(fPassword);

	//ADDRESS

	error= checkAddress(fAddress);

	// PHONE

	error= checkNumber(fPhone);
	
	// Validate fields entered by the user: name, phone, password, and email
	 
	if(error == 1){
		alert(" Els camps no poden quedar-se buits.");
	}else{
		//alert(" Formulari correcte.");
	}

}

function onlyLetters(fName){
	
	const patternName = /[^a-zA-Z]+/g;
	let check = !patternName.test(fName);
	let explan = "";
	let error = 0;
	document.getElementById("errorName").classList.add("invalid-feedback");

	if(fName.length< 3 ){

		explan += "Needs 3 o more letters.";
		document.getElementById("errorName").innerHTML= explan; 
		document.getElementById("fName").style.border = "1px solid red";
		document.getElementById("errorName").classList.remove("invalid-feedback");
	} else if(fName == "" ){
		error = 1;
	}

	if(!check){

		explan += " Only accept char: [A-Z] ";
		document.getElementById("errorName").innerHTML= explan; 
		document.getElementById("fName").style.border = "1px solid red";
		document.getElementById("errorName").classList.remove("invalid-feedback");
	} else if (check && fName.length >= 3){
		document.getElementById("fName").style.border = "1px solid green";
	}

	return error;
}

function onlyLettersLName(fLName){
	let error = 0;	
	const patternName = /[^a-zA-Z]+/g;
	let check = !patternName.test(fLName);
	let explan = "";
	document.getElementById("errorLastN").classList.add("invalid-feedback");

	if(fLName.length< 3 ){

		explan += "Needs 3 o more letters ";
		document.getElementById("errorLastN").innerHTML= explan; 
		document.getElementById("fLastN").style.border = "1px solid red";
		document.getElementById("errorLastN").classList.remove("invalid-feedback");
	} else if(fLName == "" ){
		error = 1;
	}

	if(!check){

		explan += " Only accept char: [A-Z] ";
		document.getElementById("errorLastN").innerHTML= explan; 
		document.getElementById("fLastN").style.border = "1px solid red";
		document.getElementById("errorLastN").classList.remove("invalid-feedback");
	} else if (check && fLName.length >= 3){
		document.getElementById("fLastN").style.border = "1px solid green";
	}

	return error;
}

function mailcheking(fEmail){
	let error = 0;
	const patternMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)/
	let check = patternMail.test(fEmail);
	let explan = "";
	document.getElementById("errorEmail").classList.add("invalid-feedback");

	if(fEmail.length< 3 ){

		explan += " Needs 3 o more letters";
		document.getElementById("errorEmail").innerHTML= explan; 
		document.getElementById("fEmail").style.border = "1px solid red";
		document.getElementById("errorEmail").classList.remove("invalid-feedback");
	} else if(fEmail == "" ){
		error = 1;
	}

	if(!check){

		explan += "The Email needs @ ";
		document.getElementById("errorEmail").innerHTML= explan; 
		document.getElementById("fEmail").style.border = "1px solid red";
		document.getElementById("errorEmail").classList.remove("invalid-feedback");
	} else if (check && fEmail.length >= 3){
		document.getElementById("fEmail").style.border = "1px solid green";
	}

	return error;
}

function checkPassword(fPassword){
	let error = 0;
	const patternLetters = /[a-zA-Z]+/g;
	const patternNum = /\d/g;
	let checkLet = patternLetters.test(fPassword);
	let checkNum = patternNum.test(fPassword);
	let explan = "";
	document.getElementById("errorPassword").classList.add("invalid-feedback");

	if(fPassword.length< 8 ){

		explan += " Needs 8 o more letters.";
		document.getElementById("errorPassword").innerHTML= explan; 
		document.getElementById("fPassword").style.border = "1px solid red";
		document.getElementById("errorPassword").classList.remove("invalid-feedback");
	} else if(fPassword == "" ){
		error = 1;
	}

	if(!checkLet || !checkNum){

		explan += " The password needs letters and number.";
		document.getElementById("errorPassword").innerHTML= explan; 
		document.getElementById("fPassword").style.border = "1px solid red";
		document.getElementById("errorPassword").classList.remove("invalid-feedback");
	} else if (checkLet && checkNum && fPassword.length >= 3){
		document.getElementById("fPassword").style.border = "1px solid green";
	}

	return error;
}

function checkAddress(fAddress){
	let error = 0;
	let explan = "";
	document.getElementById("errorAddress").classList.add("invalid-feedback");

	if(fAddress.length< 3 ){

		explan += "Needs 3 o more letters.";
		document.getElementById("errorAddress").innerHTML= explan; 
		document.getElementById("fAddress").style.border = "1px solid red";
		document.getElementById("errorAddress").classList.remove("invalid-feedback");
	} else if(fAddress == "" ){
		error = 1;
		document.getElementById("fAddress").style.border = "1px solid red";
	} else{
		document.getElementById("fAddress").style.border = "1px solid green";
	}

	return error;
}

function checkNumber(fPhone){
	let error = 0;
	const patternNum = /\d/g;
	let check = patternNum.test(fPhone);
	let explan = "";
	document.getElementById("errorPhone").classList.add("invalid-feedback");

	if(fPhone.length != 9 ){

		explan += "The phone are compound by 9 numbers";
		document.getElementById("errorPhone").innerHTML= explan; 
		document.getElementById("fPhone").style.border = "1px solid red";
		document.getElementById("errorPhone").classList.remove("invalid-feedback");
	} else if(fPhone == "" ){
		error = 1;
	}

	if(!check){

		explan += " [0-9] ";
		document.getElementById("errorPhone").innerHTML= explan; 
		document.getElementById("fPhone").style.border = "1px solid red";
		document.getElementById("errorPhone").classList.remove("invalid-feedback");
	} else if (check && fPhone.length == 9){
		document.getElementById("fPhone").style.border = "1px solid green";
	}

	return error;
}

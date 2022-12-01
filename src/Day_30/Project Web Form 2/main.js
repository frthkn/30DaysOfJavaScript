const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const phone = document.getElementById('phone');
const bio = document.getElementById('bio');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {

	const fnameValue = fname.value.trim();
	const lnameValue = lname.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const phoneValue = phone.value.trim();
	const bioValue = bio.value.trim();


	if(fnameValue === '') {
		setErrorFor(fname, 'First name cannot be blank');
	} else if(fnameValue.length<3){
		setErrorFor(fname, 'First Name must be alphanumeric and contain 3-16 characters');
	}else if(fnameValue.length>16){
		setErrorFor(fname, 'First Name must be alphanumeric and contain 3-16 characters');
	}else{
		setSuccessFor(fname);
	}

	if(lnameValue === '') {
		setErrorFor(lname, 'Last name cannot be blank');
	} else if (lnameValue.length<3 || lnameValue.length>16){
		setErrorFor(lname,'Last Name must be alphanumeric and contain 3-16 characters');
	}else {
		setSuccessFor(lname);
	}
	
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Email must be a valid address e.g example@example.com');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	}else if (passwordValue.length<6 || passwordValue.length>20) {
		
		setErrorFor(password, 'Password must be alphanumeric(@,_ and-are also allowed) and between 6-20 characters');
	}else {
		setSuccessFor(password);
	}
	console.log(phoneValue)
	if(phoneValue === '') {
		setErrorFor(phone, 'Phone cannot be blank');
	}else if(phoneValue.length<11){
		setErrorFor(phone, 'A valid Telephone number (11 digits and 111-222-3344)');
	}else if(phoneValue.match(/[A-z]/)){
		setErrorFor(phone, 'A valid Telephone number (11 digits and 111-222-3344)');
	}else if(!phoneValue.match(/[0-9]{3}[-]{0,1}[0-9]{3}[-]{0,1}[0-9]{4}$/)){
		setErrorFor(phone, 'A valid Telephone number (11 digits and 111-222-3344)');
	}else{
		setSuccessFor(phone);
	}
	if(bioValue === '') {
		setErrorFor(bio, 'Bio cannot be blank');
	} else if (bioValue.length<7){
		setErrorFor(bio,'Bio must contain only lowercase letters, underscores, hyphens and be 8-50 characters');
	} else if (bioValue.length>51){
		setErrorFor(bio,'Bio must contain only lowercase letters, underscores, hyphens and be 8-50 characters');
	}else{
		setSuccessFor(bio);
	}

	
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}




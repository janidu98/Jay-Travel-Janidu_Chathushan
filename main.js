const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const p_number = document.getElementById('p_number');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

//set error
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
}

//check validate email
const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const emailValue = email.value.trim();
    const p_numberValue = p_number.value.trim();

    if(fnameValue === ''){
        setError(fname, 'First name is required!')
    }

    if(lnameValue === ''){
        setError(lname, 'Last name is required!')
    }

    if(emailValue === ''){
        setError(email, 'Email is required!')
    } else if(!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address!');
    }

    if(p_numberValue === ''){
        setError(p_number, 'Phone number is required!');
    } else if(p_numberValue.length > 10 || p_numberValue.length < 10){
        setError(p_number, 'Phone number must contain 10 digits!');
    }
}
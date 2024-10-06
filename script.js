document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const modal = document.getElementById('modal');
    const btn = document.getElementById('btn');
    const fullname = document.getElementById('fullname');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    
    const span = document.getElementsByClassName('close')[0];

    btn.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent form submission
        if (validateForm()) {
            modal.style.display = 'block';
            form.reset(); // Reset the form fields
        }
    });

    span.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    const setError = (element, message) => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');

        errorDisplay.innerText = message;
        inputControl.classList.add('error');
        inputControl.classList.remove('success');
    }

    const setSuccess = element => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');

        errorDisplay.innerText = '';
        inputControl.classList.add('success');
        inputControl.classList.remove('error');
    };

    const isValidEmail = email => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    const isValidPhone = phone => {
        const re = /^(?:\+92|0092|92|0)?3[0-9]{9}$/;
        return re.test(String(phone));
    }

    const isValidName = name => {
        const re = /^[A-Za-z\s-]+$/;
        return re.test(String(name));
    }

    const validateForm = () => {
        const fullnameValue = fullname.value.trim();
        const emailValue = email.value.trim();
        const phoneValue = phone.value.trim();
        const dob = document.getElementById('dob').value;
        
        let isValid = true;

        if (fullnameValue === '') {
            setError(fullname, 'Full name is required');
            isValid = false;
        } else if (!isValidName(fullnameValue)) {
            setError(fullname, 'Full name can only contain letters');
            isValid = false;
        } else {
            setSuccess(fullname);
        }

        if (emailValue === '') {
            setError(email, 'Email is required');
            isValid = false;
        } else if (!isValidEmail(emailValue)) {
            setError(email, 'Provide a valid email address');
            isValid = false;
        } else {
            setSuccess(email);
        }

        if (phoneValue === '') {
            setError(phone, 'Phone number is required');
            isValid = false;
        } else if (!isValidPhone(phoneValue)) {
            setError(phone, 'Provide a valid phone number');
            isValid = false;
        } else {
            setSuccess(phone);
        }

        return isValid;
    }
});
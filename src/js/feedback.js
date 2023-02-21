const throttle = require('lodash.throttle');
const form = document.querySelector('.feedback-form');
const { email, message } = form.elements;
const formData = JSON.parse(localStorage.getItem('feedback-form-state')) || {};

formData.email ? email.value = formData.email : '';
formData.message ? message.value = formData.message : '';

const onFormInput = (e) => {
    formData[e.target.name] = e.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

const onSumbit = (e) => {
    e.preventDefault();
    localStorage.removeItem('feedback-form-state')
    form.reset()
    console.log('formData: ', formData);
    formData.email = '';
    formData.message = '';
}

const throttled = throttle(onFormInput, 500);

form.addEventListener('submit', onSumbit)
form.addEventListener('input', throttled)
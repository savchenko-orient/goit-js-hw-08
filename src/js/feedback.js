const throttle = require('lodash.throttle');
const form = document.querySelector('.feedback-form');
const input = form.querySelector('input');
const textarea = form.querySelector('textarea');
const formData = JSON.parse(localStorage.getItem('feedback-form-state')) || {};

if (Object.keys(formData).length !== 0) {
    input.value = formData.email;
    textarea.value = formData.message;
}

const onFormInput = (e) => {
    formData[e.target.name] = e.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

const onSumbit = (e) => {
    e.preventDefault();
    localStorage.removeItem('feedback-form-state')
    form.reset()
    console.log('formData: ', formData);
}

const throttled = throttle(onFormInput, 500);

form.addEventListener('submit', onSumbit)
form.addEventListener('input', throttled)
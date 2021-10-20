const refs = {
    login: document.querySelector('.login-form'),

}

refs.login.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {

    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const { elements: { email, password }
    } = event.currentTarget;
    if (email.value === '' || password.value === '') {
        return console.log(`Пожалуйста, заполните все поля!`);
    }
    const userData = {};
    formData.forEach((value, name) => {
        userData[name] = value; 
    });

    console.log(userData);
    event.currentTarget.reset();
}
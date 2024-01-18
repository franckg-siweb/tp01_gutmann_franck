const form = document.querySelector('#form');
const state = document.querySelector('#state');

const setError = (message) => {
    state.innerHTML = message;
    state.classList.remove('text-success');
    state.classList.add('text-error');
}

const setSuccess = (message) => {
    state.innerHTML = message;
    state.classList.remove('text-error');
    state.classList.add('text-success');
    form.remove();
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const password = document.querySelector('#password').value;
    const passwordConfirm = document.querySelector('#passwordConfirm').value;

    if (password !== passwordConfirm) {
        setError('Les mots de passe ne correspondent pas');
        return;
    }

    setSuccess('Bravo, vous êtes inscrits !');

});

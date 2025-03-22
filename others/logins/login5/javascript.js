const passwordinput = document.getElementById('pass');
const togglepassword = document.getElementById('togglePassword'); // Corrected ID

togglepassword.addEventListener('click', () => {
    if (passwordinput.type === 'password') { // Corrected 'pass' to 'password'
        passwordinput.type = 'text';
        togglepassword.innerHTML = '<i class="far fa-eye"></i>';
    } else {
        passwordinput.type = 'password';
        togglepassword.innerHTML = '<i class="far fa-eye-slash"></i>';
    }
});


// const passwordinput = document.getElementById('password');
// const togglepassword = document.getElementById('togglePasswordIcon'); // Cambiar el ID

//     togglepassword.addEventListener('click', () => {
//         if (passwordinput.type === 'password') {
//             passwordinput.type = 'text';
//             togglepassword.innerHTML = '<i class="far fa-eye"></i>';
//         } else {
//             passwordinput.type = 'password';
//             togglepassword.innerHTML = '<i class="far fa-eye-slash"></i>';
//         }
//     });
const passwordinput = document.querySelector('input[type="password"]');
const togglepassword = document.getElementById('togglePasswordIcon');

togglepassword.addEventListener('click', () => {
    if (passwordinput.type === 'password') {
        passwordinput.type = 'text';
        togglepassword.innerHTML = '<i class="far fa-eye"></i>';
    } else {
        passwordinput.type = 'password';
        togglepassword.innerHTML = '<i class="far fa-eye-slash"></i>';
    }
});

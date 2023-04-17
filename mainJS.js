let passwordInput = document.querySelector('.password-input');
let passwordText = document.querySelector('.password-text');

let gmailInput = document.querySelector('.gmail-input');
let gmailText = document.querySelector('.gmail-text');

passwordInput.addEventListener('input', function() {
    if(passwordInput.value == "") {
        passwordText.classList.remove('transform-scale-password');
        passwordInput.style.paddingTop = 9 + "px";
        passwordInput.style.paddingBottom = 9 + "px";
    } else {
        passwordText.classList.add('transform-scale-password');
        passwordInput.style.paddingTop = 16 + "px";
        passwordInput.style.paddingBottom = 2 + "px";
    }
});

gmailInput.addEventListener('input', function() {
    if(gmailInput.value == "") {
        gmailText.classList.remove('transform-scale-gmail');
        gmailInput.style.paddingTop = 9 + "px";
        gmailInput.style.paddingBottom = 9 + "px";
    } else {
        gmailText.classList.add('transform-scale-gmail');
        gmailInput.style.paddingTop = 16 + "px";
        gmailInput.style.paddingBottom = 2 + "px";
    }
});
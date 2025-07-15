var passwordInput = document.getElementById("password-input");
var passwordStatus = document.getElementById("passwordStatus");
var rangeSlider = document.getElementById("password-slider");
var rangeNumber = document.getElementById("range-number");

var upperCheckbox = document.getElementById("upperCase-checkbox")
var lowerCheckbox = document.getElementById("lowerCase-checkbox")
var numberCheckbox = document.getElementById("number-checkbox")
var characterCheckbox = document.getElementById("character-checkbox")
var generateBtn = document.getElementById("generate-btn")

function sliderValue() {
    rangeNumber.innerText = rangeSlider.value;
}

var upperStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerStr = "abcdefghijklmnopqrstuvwxyz";
var characterStr = "!@#$%^&*()_+-<>,.;':";
var numberStr = "1234567890";

function generatePassword() {
    var password = "";
    event.preventDefault();
    passwordInput.value = "";
    var str = "";

    if (!upperCheckbox.checked && !lowerCheckbox.checked && !characterCheckbox.checked && !numberCheckbox.checked) {
        alert("Please select at least one character type!");
        return;
    }

    if (upperCheckbox.checked) str += upperStr
    if (lowerCheckbox.checked) str += lowerStr
    if (characterCheckbox.checked) str += characterStr
    if (numberCheckbox.checked) str += numberStr

    for (let i = 0; i < rangeSlider.value; i++) {
        password += str[Math.floor(Math.random() * str.length)];
    }

    passwordInput.value = password;

    if (password.length < 8) {
        passwordStatus.innerText = "Your Password is Weak  ❌";
        passwordStatus.style.color = "red";
    } else {
        passwordStatus.innerText = "Your Password is Strong  ✅";
        passwordStatus.style.color = "green";
    }
}

function copyToClipboard() {
    event.preventDefault()
    passwordInput.select();
    navigator.clipboard.writeText(passwordInput.value);

}
function checkSignUp() {
    const firstName = document.getElementById('firstname').value;
    const lastName = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!firstName || !lastName || !email || !password) {
        alert("Please fill all fields.");
    } else {
        alert("Registration successful!");

    }
}

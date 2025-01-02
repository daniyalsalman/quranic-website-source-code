function checkLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        alert("Please fill in both Username/Email and Password.");
    } else {
        alert("Sign-in successful!");
    
    }
}
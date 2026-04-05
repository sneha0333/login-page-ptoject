function login() {
    let username =
    document.getElementById("username").value;
    let password =
    document.getElementById("password").value;

    // check empty
    if (username === "" || password === "") {
        alert("please enter username and password");
        return false;
    }

    // dummy login check
    if (username === "admin" && password === "1234")
    {
        alert("login successful");

        // next page open (optional)
        // window.location.href = "home.html";
    } else {
        alert("Invalid username or password");
    }

    return false; // page refresh stop
}
function getdata() {
    let bt = document.getElementById("button");
    var un = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    let bt1 = document.getElementById("button1");
    var un1 = document.getElementById("username1").value;
    var pass1 = document.getElementById("password1").value;

    if ((un == un1) && (pass == pass1)) {
        document.getElementById("result").innerHTML = "LogIn successfully"

    }
}
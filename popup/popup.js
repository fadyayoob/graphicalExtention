function saveLogin() {

    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    var siz = login(user, pass);
    console.log(login(user, pass));


}
$(document).ready(function () {
    $(".notifications").show();
    $(".login").show();
    checkbuilt();
    $("#showmore").click(function () {
        builtList();
    });

    $("#refresh").click(function () {
        BackRefresh();
        location.reload();
    });

    $("#logout").click(function () {
        logout();
        location.reload();
    });

    $("#Loginbtn").click(function () {
       // document.getElementById("massage").textContent = "valied username or password";
        saveLogin();
    });
});
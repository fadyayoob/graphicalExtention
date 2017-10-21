function saveLogin() {

    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    var siz = login(user, pass);
    console.log(login(user, pass));


}
$(document).ready(function () {
    $(".notifications").show();
    $(".login").show();
    $('.Loader').hide();
    checkbuilt();
    $("#showmore").click(function () {
        builtList();
    });

    $("#refresh").click(function () {
        BtnRefresh();
      //  setTimeout(function () { location.reload();}, 1000);
    });

    $("#logout").click(function () {
        logout();
    });

    $("#Loginbtn").click(function () {
        saveLogin();
    });

    $('#clearChecked').click(function () {
        clearChecked();
       });
});
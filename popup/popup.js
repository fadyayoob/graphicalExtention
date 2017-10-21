function saveLogin() {

    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    var siz = login(user, pass);
    console.log(login(user, pass));


}
$(document).ready(function () 
{
    $(".notifications").show();
    $(".login").show();
    $('.Loader').hide();
    checkbuilt();
    $("#showmore").click(function () 
    {
        builtList();
    });

<<<<<<< HEAD
    $("#refresh").click(function () {
        BtnRefresh();
      //  setTimeout(function () { location.reload();}, 1000);
=======
    $("#refresh").click(function () 
    {
        BackRefresh();
        location.reload();
>>>>>>> 8d197b6666f4d724930ae3e065c263e06d8fff67
    });

    $("#logout").click(function () 
    {
        logout();
    });

<<<<<<< HEAD
    $("#Loginbtn").click(function () {
        saveLogin();
    });

    $('#clearChecked').click(function () {
        clearChecked();
       });
=======
    $("#Loginbtn").click(function () 
    {
       // document.getElementById("massage").textContent = "valied username or password";
        saveLogin();
    });

    $('.clearnotification').click (function( event,template ) 
    {
        // this will contain a reference to the checkbox   
           alert('click')
            // alert( $(event.currentTarget).attr('data') ) ; 
    });

    $('.respondnotification').click (function(  ) 
    {
        // this will contain a reference to the checkbox   
           alert('respond')
            // alert( $(event.currentTarget).attr('data') ) ; 
    });

    $("#clearall").click(function () 
    {
        clearAll();
    });
>>>>>>> 8d197b6666f4d724930ae3e065c263e06d8fff67
});
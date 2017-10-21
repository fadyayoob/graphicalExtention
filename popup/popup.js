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
    checkbuilt();
    $("#showmore").click(function () 
    {
        builtList();
    });

    $("#refresh").click(function () 
    {
        BackRefresh();
        location.reload();
    });

    $("#logout").click(function () 
    {
        logout();
    });

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
});
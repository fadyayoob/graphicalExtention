var count = 0;
<<<<<<< HEAD
var N = 0;

var ClearRequests = 0;
var clearRecives = 0;

var notifyId = Array();


function Bage(x) {
=======
function Bage(x) 
{
>>>>>>> 8d197b6666f4d724930ae3e065c263e06d8fff67
    x = "" + x;
    chrome.browserAction.setBadgeBackgroundColor({ color: [255, 0, 0, 255] });

    chrome.browserAction.setBadgeText({ text: x });
}

function TimeProces(x)
{
    value = x.replace("T", " ");
    value = value.split(":");

    value = value[0] + ":" + value[1];
    value = value.split(" ");

    return value[1] + "<br>" + value[0];
}

function notProces(x) 
{
    if (x.length > 80) 
    {
        value = x.substring(1, 80) + "...";
    }
    else
        value = x;
    return value
}

function builtList() 
{
    chrome.storage.local.get('notif', function (result) 
    {
        notif = result.notif;


        for (i = count; i < count + 5 && i < notif.length; i++) 
        {
            N++;
            notifyId[i] = notif[i]._id;
            img = '';
            try 
            {
                img = notif[i].pic;
            }
            catch (e) 
            {
            }
            
            tr = "<tr> ";
            time = " <span class='time'> "+TimeProces( notif[i].createdAt)+"</span>";

<<<<<<< HEAD
            tr += "<td>"+'<input type="checkbox" id='+"No."+i+' value="">'+"</td>"+
            "<td>"+"<img width='40' src='" + img + "' ></td>";
=======
            tr += "<td style='width:25px'>"+"<button type='button' class='btn btn-xs btn-warning clearnotification' data='"+
            (notif[i]._id)+"'>x</button>"+"</td>"+
            "<td style='width:50px'>"+"<img width='40' src='" + img + "' ></td>";
>>>>>>> 8d197b6666f4d724930ae3e065c263e06d8fff67
            tr += "<td>" + notProces (notif[i].notification)+ 
            "&nbsp;<button type='button' class='respondnotification btn btn-xs btn-success' style='opacity:0.5'>&crarr;</button>"
            + "\t" + time+ "</td></tr>";


            $(".notifications table").append(tr);
            console.log(tr);

        }
        
        count += 5;
        
        if (count >= notif.length) 
        {
            $("#showmore").hide();
        }
    });

}


function checkbuilt() 
{
    chrome.storage.local.get('user', function (result) 
    {
        user = result.user;


        if (user ) 
        {
            if (user != -1 ) 
            {
                $(".notifications").show();
                $(".login").hide();
                builtList();
            }
            else 
            {
                $(".notifications").hide();
                $(".login").show();
            }
        }
        else 
        {
            $(".notifications").hide();
            $(".login").show();
        }


    });
}

function login(user, pass) 
{
    var int = setInterval(function () { }, 500000);
    Bage('');
    try 
    {
        setTimeout(function () 
        {
            document.getElementById("massage").textContent = "Invalid Email or Password!";
            setTimeout(function () 
            {
                clearInterval(int);
            },50);
        }, 1000);

    }
    catch (e) 
    {

    }
   



    var http = new XMLHttpRequest();
    var url = 'http://www.graphical.io/api/v1/users/'+user+'/notify.json';
    var params = 'pass=' + pass;

    // console.log(pass);

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, true); // false for synchronous request
    xmlHttp.send(null);

    xmlHttp.onreadystatechange = function () {
        

        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) 
        {
            if (JSON.parse(xmlHttp.responseText)) 
            {

                var resa = JSON.parse(xmlHttp.responseText);
                console.log(resa);
                var siz = resa.length;
                console.log(siz);

                chrome.storage.local.set({ 'notif': resa }, function (result) 
                {

                    chrome.storage.local.set({ 'user': user }, function (result) 
                    {

                        chrome.storage.local.set({ 'pass': pass }, function (result) 
                        {
                            chrome.storage.local.set({ 'siz': siz }, function (result) 
                            {
                                Bage(siz);

                                try 
                                {
                                    $(".notifications").show();
                                    $(".login").hide();

                                   // builtList();
                                    location.reload();
                                    int= setInterval(function () 
                                    { 
                                        document.getElementById("massage").textContent = "";
                                    }, 10);


                                   
                                }
                                catch(e) 
                                {

                                }


                            });
                        });

                    });
                });




            }


        }
    }

}

function loginN(user, pass) 
{
 
    var http = new XMLHttpRequest();
    var url = 'http://www.graphical.io/api/v1/users/' + user + '/notify.json';
    var params = 'pass=' + pass;

   // console.log(pass);

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, true); // false for synchronous request
    xmlHttp.send(null);

    xmlHttp.onreadystatechange = function () 
    {


        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) 
        {

            if (JSON.parse(xmlHttp.responseText)) 
            {

                var resa = JSON.parse(xmlHttp.responseText);
                console.log(resa);
                var siz = resa.length;
                console.log(siz);

                chrome.storage.local.set({ 'notif': resa }, function (result) 
                {

                    Bage(siz);
<<<<<<< HEAD
                 
                });




            }


        }
    }

}

function loginBtn(user, pass) {




    $('.notifications').hide();
    $('.Loader').show();

    var http = new XMLHttpRequest();
    var url = 'http://www.graphical.io/api/v1/users/' + user + '/notify.json';
    var params = 'pass=' + pass;

    // console.log(pass);

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, true); // false for synchronous request
    xmlHttp.send(null);

    xmlHttp.onreadystatechange = function () {


        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {

            if (JSON.parse(xmlHttp.responseText)) {

                var resa = JSON.parse(xmlHttp.responseText);
                console.log(resa);
                var siz = resa.length;
                console.log(siz);

                chrome.storage.local.set({ 'notif': resa }, function (result) {

                    Bage(siz);
=======
>>>>>>> 8d197b6666f4d724930ae3e065c263e06d8fff67
                    location.reload();
                });


            }


        }
    }

}

function logout() 
{
    Bage('');

    chrome.storage.local.set({ 'notif': '' }, function (result) 
    {

        chrome.storage.local.set({ 'user': -1 }, function (result) 
        {

            chrome.storage.local.set({ 'pass': -1 }, function (result) 
            {
                chrome.storage.local.set({ 'siz': '' }, function (result) 
                {

                    location.reload();

                });
            });

        });
    });

}


function BackRefresh() 
{
    chrome.storage.local.get('user', function (result) 
    {
        user = result.user;


        chrome.storage.local.get('pass', function (result) 
        {
            pass = result.pass;
            if (user && user!=-1)
                loginN(user, pass);
        });


    });
}


<<<<<<< HEAD
function BtnRefresh() {
    chrome.storage.local.get('user', function (result) {
        user = result.user;


        chrome.storage.local.get('pass', function (result) {
            pass = result.pass;
            if (user && user != -1)
                loginBtn(user, pass);
=======

function clearAll() 
{
    chrome.storage.local.get('user', function (result) 
    {
        user = result.user;


        chrome.storage.local.get('pass', function (result) 
        {
            pass = result.pass;
            if (user && user!=-1)
                clearAllNotifications(user, pass);
>>>>>>> 8d197b6666f4d724930ae3e065c263e06d8fff67
        });


    });
}

<<<<<<< HEAD
function sendclearAPI(url) {
=======
function clearAllNotifications(user, pass) 
{
 
    var http = new XMLHttpRequest();
    var url = 'http://www.graphical.io/api/v1/users/' + user + '/clrallnotify.json';
    var params = 'pass=' + pass;

   // console.log(pass);
>>>>>>> 8d197b6666f4d724930ae3e065c263e06d8fff67

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, true); // false for synchronous request
    xmlHttp.send(null);
<<<<<<< HEAD
    ClearRequests++;
    $('.notifications').hide();

    $('.Loader').show();


    xmlHttp.onreadystatechange = function () {


        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {

            clearRecives++;
            if (clearRecives == ClearRequests) {

                refresh.click();
            }
        }
    }


}

function clearChecked() {
    chrome.storage.local.get('user', function (result) {
        user = result.user;

        for (i = 0; i < N; i++) {

            var states = document.getElementById('No.' + i).checked;

            if (states) {
                
                var url = 'http://www.graphical.io/api/v1/users/' + user + '/' + notifyId[i] + '/clearnotify.json';
                sendclearAPI(url);
            }
        }



    });
}
=======

    xmlHttp.onreadystatechange = function () 
    {


        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) 
        {

            if (JSON.parse(xmlHttp.responseText)) 
            {

                var resa = JSON.parse(xmlHttp.responseText);
                console.log(resa);

            }

            BackRefresh();
        }
    }

}

>>>>>>> 8d197b6666f4d724930ae3e065c263e06d8fff67

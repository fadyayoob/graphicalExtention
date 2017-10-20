var count = 0;
function Bage(x) {
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

    return value[1] + " " + value[0];
}

function notProces(x) {
    if (x.length > 80) {
        value = x.substring(1, 80) + "...";
    }
    else
        value = x;
    return value
}

function builtList() {
    chrome.storage.local.get('notif', function (result) {
        notif = result.notif;

        for (i = count; i < count + 5 && i < notif.length; i++) {
            img = '';
            try {
                img = notif[i].pic;
            }
            catch (e) {
            }
            tr = "<tr> ";
            time = " <span class='time'> "+TimeProces( notif[i].createdAt)+"</span>";

            tr += "<td><img width='40' src='" + img + "' ></td>";
            tr += "<td>" + notProces (notif[i].notification)+"\t" + time+ "</td></tr>";


            $(".notifications table").append(tr);
            console.log(tr);

        }
        count += 5;
        if (count >= notif.length) {
            $("#showmore").hide();
        }
    });

}


function checkbuilt() {
    chrome.storage.local.get('user', function (result) {
        user = result.user;


        if (user ) {
            if (user != -1 ) {
                $(".notifications").show();
                $(".login").hide();
                builtList();
            }
            else {
                $(".notifications").hide();
                $(".login").show();
            }
        }
        else {
            $(".notifications").hide();
            $(".login").show();
        }


    });
}

function login(user, pass) {
    var int = setInterval(function () { }, 500000);
    Bage('');
    try {
        setTimeout(function () {
            document.getElementById("massage").textContent = "valied username or password";
            setTimeout(function () {
                clearInterval(int);
            },50);
        }, 1000);


    }
    catch (e) {

    }
   



    var http = new XMLHttpRequest();
    var url = 'http://www.graphical.io/api/v1/users/'+user+'/notify.json';
    var params = 'pass=' + pass;

    console.log(pass);

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

                    chrome.storage.local.set({ 'user': user }, function (result) {

                        chrome.storage.local.set({ 'pass': pass }, function (result) {
                            chrome.storage.local.set({ 'siz': siz }, function (result) {
                                Bage(siz);

                                try {
                                    $(".notifications").show();
                                    $(".login").hide();

                                   // builtList();
                                    location.reload();
                                   int= setInterval(function () { 
                                        document.getElementById("massage").textContent = "";
                                    }, 10);


                                   
                                }
                                catch(e) {

                                }


                            });
                        });

                    });
                });




            }


        }
    }

}

function loginN(user, pass) {
 




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

                });




            }


        }
    }

}

function logout() {
    Bage('');

    chrome.storage.local.set({ 'notif': '' }, function (result) {

        chrome.storage.local.set({ 'user': -1 }, function (result) {

            chrome.storage.local.set({ 'pass': -1 }, function (result) {
                chrome.storage.local.set({ 'siz': '' }, function (result) {

                    location.reload();

                });
            });

        });
    });

}


function BackRefresh() {
    chrome.storage.local.get('user', function (result) {
        user = result.user;


        chrome.storage.local.get('pass', function (result) {
            pass = result.pass;
            if (user && user!=-1)
                loginN(user, pass);
        });


    });
}

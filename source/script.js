//NAVIGATION BAR CODE

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}






 jQuery(document).ready(function() { 
    var cookie = false;
    var cookieContent = $('.cookie-disclaimer');

    checkCookie();

    if (cookie === true) {
      cookieContent.hide();
    }

    function setCookie(cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
      var expires = "expires=" + d.toGMTString();
      document.cookie = cname + "=" + cvalue + "; " + expires;
    }

    function getCookie(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
      }
      return "";
    }

    function checkCookie() {
      var user = getCookie("username");
      if (user !== "") {
        cookie = true;
      } else {
        if (user !== "" && user !== null) {
          setCookie("cvalue", "cvalue", 365);
        }
      }
    }

    function deleteCookie() {
      setCookie('cname', '', -1);
    }
       
    //set cookie on click
    $('.accept-cookie').click(function () {
      setCookie("cname", "cvalue", 365);
      alert("cookie accepted!");
      cookieContent.hide();
    });
    //delete cookie on click
    $('.decline-cookie').click(function () {
        alert("cookie declined!");
        deleteCookie();
    });
});
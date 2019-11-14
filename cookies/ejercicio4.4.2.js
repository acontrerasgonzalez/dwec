function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
}

function checkCookie() {
  var user = getCookie("username");
  if (user != "" && user != null) {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 365);
    }
  }

  var fondo = getCookie("background");
  if (fondo != "" && fondo != null) {
    document.getElementById('cuerp').style.backgroundColor=fondo;
  } else {
    fondo = prompt("Please enter a colour:", "");
    if (fondo != "" && fondo != null) {
      setCookie("background", fondo, 365);
    }
  }

  var fondo1 = getCookie("background1");
  if (fondo1 != "" && fondo1 != null) {
    document.getElementById('cuerp1').style.backgroundColor=fondo1;
  } else {
    fondo1 = prompt("Please enter a colour for paragraph:", "");
    if (fondo1 != "" && fondo1 != null) {
      setCookie("background1", fondo1, 365);
    }
  }
}

checkCookie();
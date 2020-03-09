

function revealInput() {
  document.getElementById("roundyesopt") .style.display = "block";
  }
function hideInput() {
  document.getElementById("roundyesopt") .style.display = "none";
}
function showCoupon() {
  document.getElementById("couponitemdates") .style.display = "block"
}
function hideCoupon() {
  document.getElementById("couponitemdates") .style.display = "none"
}
function showActcodesperc() {
  document.getElementById("codes") .style.display = "inline"
  var percElements = document.getElementsByClassName('perc'), i;
            for (i = 0; i < percElements.length; i += 1) {
            percElements[i].style.display = 'inline';
}
  var fixElements = document.getElementsByClassName('fixed'), i;
            for (i = 0; i < fixElements.length; i +=1) {
            fixElements[i].style.display = "none";
            }
}
function showActcodesfix() {
  document.getElementById("codes") .style.display = "inline"
  var percElements = document.getElementsByClassName('perc'), i;
            for (i = 0; i < percElements.length; i += 1) {
            percElements[i].style.display = 'none';
}
  var fixElements = document.getElementsByClassName('fixed'), i;
            for (i = 0; i < fixElements.length; i +=1) {
            fixElements[i].style.display = "inline";
            }
}
function hideActcodes() {
  document.getElementById("codes") .style.display = "none";
}
function showAdvanced() {
  var x = document.getElementById("advanced");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var x = document.getElementById("button");
  if (x.innerHTML === "Show Advanced Settings") {
    x.innerHTML = "Hide & Clear Advanced Settings";
  } else {
    x.innerHTML = "Show Advanced Settings";
  }
}
function statusBox() {
  var x = document.getElementById("enabled");
  if (x.innerHTML === "Enabled") {
    x.innerHTML = "Disabled";
  } else {
    x.innerHTML = "Enabled";
  }
}
function showAca() {
  document.getElementById("aca") .style.display = "block"
}
function hideAca() {
  document.getElementById("aca") .style.display = "none"
}
function openNav() {
  document.getElementById("mySidenav").style.width = "600px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
function enabledBox() {
  var x = document.getElementById("checked");
  if (x.innerHTML === "Enabled") {
    x.innerHTML = "Disabled";
  } else {
    x.innerHTML = "Enabled";
  }
}

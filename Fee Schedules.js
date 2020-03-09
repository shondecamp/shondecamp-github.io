    var x, i, j, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
document.addEventListener("click", closeAllSelect);

function swapText() {
  var x = document.getElementById("myBtn2");
  if (x.innerHTML === "close") {
    x.innerHTML = "cancel";
  }
  document.getElementById("myBtn").disabled = false;
}
function myFunction() {
  
  document.getElementById("myBtn").disabled = true;
  var x = document.getElementById("myBtn2");
  if (x.innerHTML === "cancel") {
    x.innerHTML = "close";
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);}}


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
  var fixElements = document.getElementsByClassName('fixed'), i;
            for (i = 0; i < fixElements.length; i +=1) {
            fixElements[i].style.display = "inline";
            }
    var percElements = document.getElementsByClassName('perc'), i;
            for (i = 0; i < percElements.length; i += 1) {
            percElements[i].style.display = 'none';
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


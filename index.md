<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<style>
@charset "UTF-8";
@font-face{
    font-family: 'interstate';
	  src: url('Interstate-Light.otf'); 
    font-weight:light;
}
@font-face{
    font-family: 'interstate';
    src: url('Interstate-Bold.otf');
    font-weight:bold;
}
body{
    font-family:'Open Sans';
    color:#414a56;
    display:inline-block;
}
.dropbtn {
  background-color: #014085;
  color: white;
  padding: 0px 20px;
  font-family:'Open Sans';
  font-size: 16px;
  font-weight:bold;
  border: none;
  border-radius:4px;
  text-transform:uppercase; 
  cursor:pointer;
  margin:0;
  min-width:160px;
  max-width:500px;
  display:table-cell;
  min-height:60px;

}
.dropbtn a{
    padding: 0px 0px 15px 0px;
    font-size: 16px;
    
}
.dropdown {
  position: relative;
  display: inline-block;
  margin-top:20px;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #ffffff;
  min-width:100%;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  border: 1px solid lightgrey;
  border-radius:0px 0px 4px 4px;
  padding:6px 0px;
}
.dropdown-content a {
  padding: 10px 16px;
  text-decoration: none;
  display: block;
  font-family:'Open Sans';
  color: #4C4C4C;
}
.dropdown-content img{
    width: 16px;
    padding-right: 10px;
}
.dropdown-content a:hover {
    background-color: #B1DFF0;
}
.dropdown:hover .dropdown-content {display: block;}
.dropdown:hover .dropdown-content img{background-color:B1DFF0;}
.dropdown:hover .dropbtn {background-color: #003772;}
</style>
</head>
<body>

<h2>SplitButton Design</h2>
<p>Experiment wiht the buttons below to see UI behavior in different scenarios</p>

<div class="dropdown">
    <button class="dropbtn">
      <a>actions</a>
      <a style="font-size:13px;">▼</a>
    </button>
  <div class="dropdown-content">
    <a href="#"><img src="Edit.png">Edit</a>
    <a href="#"><img src="NewVersion.png">New Version</a>
    <a href="#"><img src="Trash.png">Delete</a>
  </div>
</div>

<div class="dropdown">
    <button class="dropbtn">
      <a>actions speak louder than words</a>
      <a style="font-size:13px;">▼</a>
    </button>
  <div class="dropdown-content">
    <a href="#"><img src="Edit.png">Edit</a>
    <a href="#"><img src="NewVersion.png">New Version</a>
    <a href="#"><img src="Trash.png">Delete</a>
  </div>
</div>

<div class="dropdown">
    <button class="dropbtn">
      <a>actions</a>
      <a style="font-size:13px;">▼</a>
    </button>
  <div class="dropdown-content">
    <a href="#"><img src="Edit.png">Edit every field in the database with one click</a>
    <a href="#"><img src="NewVersion.png">New Version</a>
    <a href="#"><img src="Trash.png">Delete</a>
  </div>
</div>
</body>
</html>

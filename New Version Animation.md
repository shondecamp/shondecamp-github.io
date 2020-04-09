<html>
<head>
<style> 
body{
    margin:0;
    padding:0;
}
h1{
  display:none;
}
.container-lg {
  max-width: 5000px;
  margin-right: 0;
  margin-left: 0;
}
.px-3 {
  padding-right: 0px !important;
  padding-left: 0px !important;
}
.my-5 {
  margin-top: 0px !important;
  margin-bottom: 0px !important;
}
.markdown-body table {
    display:inline-table;
}
.markdown-body table tr{
    border-top:none;
    background: #f9fafb;
}
.markdown-body table th, .markdown-body table td {
    border:none;
    padding: 0px 5px 0px 32px;
}
.markdown-body img {
    max-width: 100%;
    box-sizing: content-box;
    background-color: none;
}
.markdown-body table tr:nth-child(2n) {
    background-color: white;
}
.mainbody {
    position:fixed;
    height: 100vh;
    width:100vw;
    z-index:1;
}
.newwindow {
  width:250px;
  height:100%;  
  background: white;
  transition: all 1.5s ;
  position:fixed;
  left:250px;
  box-shadow: 0px 6px 4px 6px lightgrey;
  visibility:hidden;
  overflow:hidden;
  z-index:5;
  top:300px;
}
header {
    height: 50px;
    width:100%;
    z-index:2;
    border-bottom:1px solid lightgrey;
    position:fixed;
    top:0;
}
.main {
    display:flex;
    position:relative;
}
.details {
    height:100vh;
    width:340px;
    border-right: 1px solid lightgrey;
    z-index:4;
}
.overlay {
    height:100%;
    width: 0px;
    position:fixed;
    top:51px;
    left:340px;
    border-right:1px solid lightgrey;
    z-index:3;
    overflow:hidden;
    transition: .3s;
    background:white;
    padding-top:50px;
}
.titleskeleton {
    height:16px;
    background:grey;
    width: 200px;
    border-radius: 10px;
    margin:20px;
}
.dataskeleton {
    height:12px;
    background:lightgrey;
    width: 300px;
    border-radius: 10px;
    margin:20px;
}
.table {
    width:100%;
    padding-left:32px;
}
.tableskeleton {
    height:12px;
    background:#F2F2F2;
    width: 90%;
    border-radius: 10px;
    margin:20px;
}
.fakeinput {
    height:40px;
    background:white;
    border:1px solid lightgrey;
    width: 300px;
    border-radius: 4px;
    margin:20px;
}
.new {
    width:120px;
    height:40px;
    background:transparent;
    color:blue;
    font-weight:bold;
    text-transform:uppercase;
    border:none;
    border-radius:4px;
    overflow:hidden;
    font-size:12px;
}
</style>
</head>
<body>
<div class="mainbody">
<header>
    <div class="titleskeleton"></div>
</header>
<div class="newwindow" id="chartdiv">
    <div class="main">
        <div class="details">
            <button class="new" onClick = "overLay()">New Version</button>
            <div class="titleskeleton"></div>
            <div class="dataskeleton"></div>
            <div class="dataskeleton"></div>
            <div class="dataskeleton"></div>
            <div class="dataskeleton"></div>
            <div class="dataskeleton"></div>
            <div class="dataskeleton"></div>
        </div>
        <div class="table">
            <div class="tableskeleton"></div>
            <div class="tableskeleton"></div>
            <div class="tableskeleton"></div>
            <div class="tableskeleton"></div>
            <div class="tableskeleton"></div>
            <div class="tableskeleton"></div>
            <div class="tableskeleton"></div>
            <div class="tableskeleton"></div>
            <div class="tableskeleton"></div>
            <div class="tableskeleton"></div>
            <div class="tableskeleton"></div>
            <div class="tableskeleton"></div>
            <div class="tableskeleton"></div>
            <div class="tableskeleton"></div>
            
        </div>
    </div>
</div>
<div class="main" style="top:50px;">
    <div class="details">
        <button class="new" onClick = "overLay()">New Version</button>
        <div class="titleskeleton"></div>
        <div class="dataskeleton"></div>
        <div class="dataskeleton"></div>
        <div class="dataskeleton"></div>
        <div class="dataskeleton"></div>
        <div class="dataskeleton"></div>
        <div class="dataskeleton"></div>
    </div>
    <div class="table">
        <div class="tableskeleton"></div>
        <div class="tableskeleton"></div>
        <div class="tableskeleton"></div>
        <div class="tableskeleton"></div>
        <div class="tableskeleton"></div>
        <div class="tableskeleton"></div>
        <div class="tableskeleton"></div>
        <div class="tableskeleton"></div>
        <div class="tableskeleton"></div>
        <div class="tableskeleton"></div>
        <div class="tableskeleton"></div>
        <div class="tableskeleton"></div>
        <div class="tableskeleton"></div>
        <div class="tableskeleton"></div>
    </div>
    <div class="overlay" id="overlay">
        <div class="titleskeleton"></div>
        <div class="fakeinput"></div>
        <div class="fakeinput"></div>
        <div class="fakeinput"></div>
        <button class="new" type="button" onClick = "modalExpand()">save</button>
    </div>
</div>
</div>



 
    
<script>
function modalExpand() {
    var modal = document.getElementById('chartdiv');
    modal.style.visibility = "visible"
    modal.style.height = "100vh";
    modal.style.width = "100vw";
    modal.style.position = "fixed";
    modal.style.left = "0";
    modal.style.visibility = "visible";
    modal.style.top = "50px";
    document.getElementById('overlay').style.display = "none";

}
function overLay() {
    var overlay = document.getElementById('overlay');
    overlay.style.width = "350px";
}
</script>

</body>
</html>

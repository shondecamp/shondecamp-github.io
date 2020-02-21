
<html>
<style>
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
@font-face {
  font-family: Open Sans;
  src: url(OpenSans-Bold.ttf);
  font-weight: bold;
}
@font-face {
  font-family: Open Sans;
  src: url(OpenSans-Light.ttf);
  font-weight: light;
}
@font-face {
  font-family: Open Sans;
  src: url(OpenSans-Regular.ttf);
}
body{
    font-family: "Open Sans",sans-serif;
    margin:0;
    padding:0;
}
.accelaheader{
    position:fixed;
    display:flex;
    align-content:space-between;
    justify-content:center;
    align-items:center;
    height: 55px;
    width:100%;
    border-bottom: 1px solid #414A56;
    padding:0px 14px;
    z-index:999;
    background:white;
}
.breadcrumbs{
    display:flex;
    flex-grow: 2;
    justify-content:flex-start;
    margin-left:20px;
    align-items:center;
}
.breadcrumbs a{
    color: #414A56;
    padding:10px;
    font-family:'Open Sans';
}
.breadcrumbs img{
    height: 14px;
}
.logo{
    display:flex;
    align-items:center;
    padding-bottom: 7px;
}
.logo img{
    height:22px;
}
.usericon img{
height:38px;
}
.title{
    height:58px;
    font-size:32px;
    font-family:'Open Sans';
    margin:0;
    color: #414B58;
    display:inline-block;
    justify-content: space-between;
    width:100%;
    padding: 87px 32px 0px 32px;
    position:relative;
}
.title a{
  color:#414B58;
  text-decoration:none;
  float:left;
}
.buttoncontainer{
  height:50px;
  display:flex;
  align-items:center;
  float:right;
}
.buttonprimary{
  height:50px;
  background:#014085;
  color:white;
  font-family:"Open Sans";
  font-weight:bold;
  font-size:16px;
  text-transform: uppercase;
  cursor: pointer;
  border-radius:4px;
  padding:0px 20px 0px 20px;
  margin: 0px 0px 0px 18px;
  min-width:120px;
  border:none;
}
.buttonprimary:hover{
    background:#003772;
}
.buttonsecondary{
  height:50px;
  background:white;
  color:#002C76;
  font-family:"Open Sans";
  font-weight:normal;
  font-size:16px;
  text-transform: uppercase;
  cursor: pointer;
  border-radius:4px;
  border: 1px solid #014085;
  padding:0px 20px 0px 20px;
  min-width:120px;
}
.buttonsecondary:hover{
    background:#F2F5F9;
}
.meta{
    width:100%;
    padding:0px 32px;
    margin:70px 0px 0px 0px;
    display: block;
    position:static;
}
.formfieldwrapper{
    width:100%;
    height:56px;
    margin:12px 0px;
}
.input{
    height: 54px;
    background: #F9FAFB;
    border: 1px solid #E7E5E4;
    border-radius:4px;
    margin:0;
    display:inline-block;
    position:absolute;
    width:400px;
}
.input:focus-within{
    border:1px solid #17A1D1;
}
.input label{
    text-transform:uppercase;
    color:#000000;
    letter-spacing: .25pt;
    font-size:12px;
    font-family:'Open Sans';
    font-weight:bold;
    vertical-align:top;
    position:relative;
    top:5px;
    left:19px;
}
.input input{
    color:#414a56;
    font-family:'Open Sans';
    font-size:16px;
    line-height:25px;
    margin:0;
    padding:0;
    border:none;
    background:transparent;
    position:relative;
    top:-1px;
    left:19px;
    outline:none;
    width:400px;
}
#focus-example > .extra {
  display: none;
}
#focus-example:focus > .extra {
  display: block;
}
.readonlywithbutton{
    display:inline;
}
.readonlywrapper{
    height: 54px;
    background: transparent;
    border: none;
    border-radius:4px;
    margin:0;
    display:inline-block;
}
.readonlywrapper label{
    text-transform:uppercase;
    color:#000000;
    letter-spacing: .25pt;
    font-size:12px;
    font-family:'Open Sans';
    font-weight:bold;
    vertical-align:top;
    position:relative;
    top:6px;
    left:1px;
}
.readonlywrapper a{
    color:#414a56;
    font-family:'Open Sans';
    font-size:16px;
    line-height:25px;
    margin:0;
    padding:0;
    border:none;
    background:transparent;
    position:relative;
    top:1px;
    left:1px;
    outline:none;
    pointer-events: none;
}
.tinybutton{
    font-size:12px;
    background:transparent;
    border:none;
    color:#0052aa;
    border-radius:4px;
    height:30px;
    margin: 0px 0px 0px 18px;
    cursor: pointer;
    position:absolute;
    font-family:'Open Sans';
}
.tinybutton:hover{
    background:#f2f5f9;
}
.readonlywrapper{
    height: 54px;
    background: transparent;
    border: none;
    border-radius:4px;
    margin:0;
    display:inline-block;
}
.readonlywrapper label{
    text-transform:uppercase;
    color:#000000;
    letter-spacing: .25pt;
    font-size:12px;
    font-family:'Open Sans';
    font-weight:bold;
    vertical-align:top;
    position:relative;
    top:6px;
    left:1px;
}
.switch {
  position: relative;
  display: inline-block;
  width: 95px;
  height: 24px;
  margin-bottom:12px;
}
.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #9696A1;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 34px;
  font-weight:normal;
  font-size:12px;
}
.slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 50%;
}
input:checked + .slider {
  background-color: #002C76;
}
.slider:after
{
 content:'DISABLED';
 color: white;
 display: block;
 position: absolute;
 transform: translate(-50%,-50%);
 top: 50%;
 left:60%;
 font-size: 12px;
 font-family: 'Open Sans';
}
input:checked + .slider:after
{  
  content:'ENABLED';
  right:-50px;
}
input:checked + .slider:before {
  -webkit-transform: translateX(70px);
  -ms-transform: translateX(70px);
  transform: translateX(70px);
}
.freetextwrapper{
    width:100%;
    margin:12px 0px;
}
.freetext{
    width:auto;
    height:auto;
    margin:0px;
    padding:0px;
}
.freetext label{
    text-transform:uppercase;
    color:#000000;
    letter-spacing: .25pt;
    font-size:12px;
    font-family:'Open Sans';
    font-weight:bold;
    position:relative;
    display:block;
    top:6px;
    left:20px;
    z-index:999;
    width:400px;
}
.freetext textarea{
    background: #F9FAFB;
    border: 1px solid #E7E5E4;
    border-radius:4px;
    margin:0;
    padding:26px 19px;
    position:relative;
    z-index:1;
    top: -18px;
    font-size:16px;
    color:#414a56;
    font-family:'Open Sans';
    min-width:200px;
    max-width: 90vw;
    min-height: 56px;
    max-height: 80vh;
}
.freetext textarea:focus{
    outline:1px solid #17A1D1;
}
.pointer{
  cursor:pointer;
 }
</style>
<body>
    <div class="accelaheader">
        <div class="logo">
            <img src="Accela_Logo_RGB.png">
        </div>
        <div class="breadcrumbs">
            <a>Fee Management</a>
            <img src="Fill 304.png">
            <a>Draper Test</a>
            <img src="Fill 304.png">
            <a class="pointer" onclick="window.location.href = 'https://shondecamp.github.io/shondecamp-github.io/Fee%20Schedules';">Fee Schedules</a>
            <img src="Fill 304.png">
            <a class="pointer" onclick="window.location.href = 'https://shondecamp.github.io/shondecamp-github.io/Fee%20Schedule%20View';">TL_PC_REN</a>
            <img src="Fill 304.png">
            <a style="font-weight:bolder;">New Version TL_PC_REN</a>
        </div>
        <div class="usericon">
            <img src="Group.png">
        </div>
    </div>  
    <div class="title">
        <a>New Version - TL_PC_REN</a>
        <div class="buttoncontainer">
            <button class="buttonsecondary" onclick="window.location.href = 'https://shondecamp.github.io/shondecamp-github.io/Fee%20Schedule%20View';" target="_blank">cancel</button>
            <button class="buttonprimary" onclick="window.location.href = 'https://shondecamp.github.io/shondecamp-github.io/Fee%20Schedule%20View';" target="_blank">save</button>
        </div>
    </div>
    <div class="meta">
        <div class="formfieldwrapper">  
            <div class="input">
                <label>fee schedule alias</label>
                <br>
                <input value="Plumbing contractor renewal fees" onclick="this.select()">
            </div>
        </div> 
        <div class="formfieldwrapper">  
            <div class="input">
                <label>version</label>
                <br>
                <input value="1.5.6ABC" onclick="this.select()">
            </div>
        </div>
        <div class="formfieldwrapper"> 
            <div class="readonlywrapper">
                <label>enabled</label>
                <br>
                <label class="switch">
                <input type="checkbox" onclick="this.select()">
                <span class="slider"></span>
                </label>
            </div> 
        </div> 
        <div class="formfieldwrapper">  
            <div class="input">
                <label>expired</label>
                <br>
                <input value="01/31/2020" onclick="this.select()">
            </div>
        </div> 
        <div class="formfieldwrapper">  
            <div class="input">
                <label>available</label>
                <br>
                <input value="01/31/2020" onclick="this.select()">
            </div>
        </div> 
        <div class="freetextwrapper">  
            <div class="freetext">
                <label>comments</label>
                <textarea rows="4" cols="50">These are the comments right now. Time to edit them buddy!</textarea>
            </div>
        </div> 
    </div>
</body>
</html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="Fee Schedules.css">
</head>
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
            <a class="pointer" onclick="window.location.href = 'https://shondecamp.github.io/shondecamp-github.io/';">Fee Schedules</a>
            <img src="Fill 304.png">
            <a class="pointer" onclick="window.location.href = 'https://shondecamp.github.io/shondecamp-github.io/Fee%20Schedule%20Edit';">TL_PC_REN</a>
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
            <button class="secondarybutton" onclick="window.location.href = 'https://shondecamp.github.io/shondecamp-github.io/Fee%20Schedule%20Edit';" target="_blank" id="myBtn2">close</button>
            <button class="primarybutton" onclick="myFunction(); window.location.href = 'https://shondecamp.github.io/shondecamp-github.io/Fee%20Schedule%20New%20Version';" target="_blank" id="myBtn" disabled>save</button>
        </div>
    </div>
    <div class="meta">
        <div class="formfieldwrapper">  
            <div class="textinput">
                <label>fee schedule alias</label>
                <br>
                <input value="Plumbing contractor renewal fees" onclick="this.select(); swapText()">
            </div>
        </div> 
        <div class="formfieldwrapper">  
            <div class="textinput">
                <label>version</label>
                <br>
                <input value="1.5.6ABC" onclick="this.select(); swapText()">
            </div>
        </div>
        <div class="formfieldwrapper"> 
            <div class="readonlywrapper">
                <label>status</label>
                <br>
                <label class="switch">
                <input type="checkbox" onclick="this.select(); swapText()">
                <span class="slider"></span>
                </label>
            </div> 
        </div> 
        <div class="formfieldwrapper">  
            <div class="textinput">
                <label>effective</label>
                <br>
                <input value="01/31/2020" onclick="this.select(); swapText()">
            </div>
        </div> 
        <div class="formfieldwrapper">  
            <div class="textinput">
                <label>expires</label>
                <br>
                <input value="01/31/2020" onclick="this.select(); swapText()">
            </div>
        </div> 
        <div class="freetextwrapper">  
            <div class="freetext">
                <label>comments</label>
                <textarea rows="4" cols="50" onclick="this.select(); swapText()">These are the comments right now. Time to edit them buddy!</textarea>
            </div>
        </div> 
    </div>
    <div class="tablecontainer">
            <div class="tabletitle">
                 Fee Items 
                 <button class="tinybutton" style="right:60px; font-weight:normal;">
                      <img src="NewVersion.png" style="visibility:visible;height:12px;padding-right:5px;">
                      Add Fee Item
                 </button>
            </div>
            <table>
            <thead>
                <tr style="background:white;">
                    <th>fee item code</th>
                    <th>description</th>
                    <th>fee amount</th>
                    <th>fee formula</th>
                    <th>status</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>MAT_PPR</td>
                    <td>Fees for printing and ink</td>
                    <td><div class="tableinput">$<input value="10" onclick="this.select(); swapText()"></div></td>
                    <td>Constant</td>
                    <td><label class="switch" style="margin-top:10px;">
                        <input type="checkbox" onclick="this.select(); swapText()">
                        <span class="slider"></span>
                        </label></td>
                    <td onclick="myFunction()"><img src="Trash.png"></td>
                </tr>
                <tr>
                    <td>LUN_VAR_FEE</td>
                    <td>Lunar cycle fee</td>
                    <td>$10</td>
                    <td>Variable</td>
                    <td><label class="switch" style="margin-top:10px;">
                        <input type="checkbox" onclick="this.select(); swapText()">
                        <span class="slider"></span>
                        </label></td>
                    <td><img src="Trash.png"></td>
                </tr>
                <tr>
                    <td>BO_LABOR</td>
                    <td>Processing fee</td>
                    <td><div class="tableinput">$<input value="10" onclick="this.select(); swapText()"></div></td>
                    <td>Constant</td>
                    <td><label class="switch" style="margin-top:10px;">
                        <input type="checkbox" onclick="this.select(); swapText()">
                        <span class="slider"></span>
                        </label></td>
                    <td><img src="Trash.png"></td>
                </tr>
            </tbody>
        </table>
        </div>
  <div class="spacer"></div>
  <div id="snackbar">New Version Created!</div>
  <script src="Fee Schedules.js"></script>
</body>
</html>
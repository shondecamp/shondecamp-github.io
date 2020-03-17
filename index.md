<html>
<head>
    <link rel="stylesheet" type="text/css" href="Fee Schedules.css">
</head>
<body>
    <div class="sidenav" id="mySidenav">
        <a class="title">Create Fee Schedule</a>
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
        <form action="/action_page.php">
            <label for="schedulecode" id="label">Fee Schedule Code</label><br>
            <input type="text" id="schedulecode" name="schedulecode" placeholder="Fee Schedule Code" onclick="floatLabel()"><br>
            <label for="schedulealias" id="label">Fee Schedule Alias</label><br>
            <input type="text" id="schedulealias" name="schedulealias" placeholder="Fee Schedule Alias" onclick="floatLabel()"><br>
            <label for="scheduleversion" id="label">Version</label><br>
            <input type="text" id="scheduleversion" name="scheduleversion" placeholder="Version" onclick="floatLabel()"><br>
            <label>Status</label><br>
            <input type="checkbox" name="status" value="enabled" checked onclick="statusBox()">
            <label style="font-weight:normal;" id="enabled" for="enabled">Enabled</label><br>
            <label for="effdate">Effective Date</label><br>
            <input type="date" id="effdate" name="effdate"><br>
            <label for="expdate">Expires</label><br>
            <input type="date" id="expdate" name="expdate"><br>
            <label for="comments">Comments</label><br>
            <textarea name="comments" id="comments" rows="10" cols="30"></textarea><br>
        </form>
        <input type="submit" class="save" value="Save" onclick="window.location.href = 'https://shondecamp.github.io/shondecamp-github.io/Fee%20Schedule%20Create%20New';">
        <input type="submit" class="cancel" value="Cancel" onclick="closeNav()">
    </div>
    <div class="accelaheader">
        <div class="logo">
            <img src="Accela_Logo_RGB.png">
        </div>
        <div class="breadcrumbs">
            <a>Fee Management</a>
            <img src="Fill 304.png">
            <a>Draper Test</a>
            <img src="Fill 304.png">
            <a>Fee Schedules</a>
        </div>
        <div class="usericon">
            <img src="Group.png">
        </div>
    </div>  
    <div class="title">
        <a>Fee Schedules</a>
        <div class="buttoncontainer">
            <button class="addbutton" onclick="openNav()"><img src="plusicon.png">create new</button>
        </div>
    </div>
    <div class="meta">
        <div class="tablecontrols">  
            <div class="filters" style="display:flex;">
                <label></label>
                <br>
                <img src="Search.png">
                <input value="Find in list" onclick="this.select()">
            </div> 
            <div class="custom-select" style="width:200px;">
                <select>
                    <option value="0">Enabled</option>
                    <option value="1">Enabled</option>
                    <option value="2">Disabled</option>
                    <option value="3">Any Status</option>
                </select>
            </div>
            <button class="textbutton" style="position:relative; top:14px;"><img src="Filters.png">More Filters</button>
        </div> 
    </div>
    <table>
        <thead>
            <tr style="background:white;">
                <th>fee schedule</th>
                <th>fee schedule alias</th>
                <th>version</th>
                <th>effective</th>
                <th>expires</th>
                <th>status</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td onclick="window.location.href = 'https://shondecamp.github.io/shondecamp-github.io/Fee%20Schedule%20Edit';">TL_PC_REN</td>
                <td onclick="window.location.href = 'https://shondecamp.github.io/shondecamp-github.io/Fee%20Schedule%20Edit';">Plumbing Contractor Renewal Fees</td>
                <td onclick="window.location.href = 'https://shondecamp.github.io/shondecamp-github.io/Fee%20Schedule%20Edit';">1.5.6ABC</td>
                <td onclick="window.location.href = 'https://shondecamp.github.io/shondecamp-github.io/Fee%20Schedule%20Edit';">01/31/2020</td>
                <td onclick="window.location.href = 'https://shondecamp.github.io/shondecamp-github.io/Fee%20Schedule%20Edit';">01/31/2020</td>
                <td onclick="window.location.href = 'https://shondecamp.github.io/shondecamp-github.io/Fee%20Schedule%20Edit';">Enabled</td>
                <td onclick="sureDelete()"><img src="Trash.png"></td>
            </tr>
            <tr>
                <td>TL_PC_REN</td>
                <td>Plumbing Contractor Renewal Fees</td>
                <td>1.5.6ABC</td>
                <td>01/31/2020</td>
                <td>01/31/2020</td>
                <td>Enabled</td>
                <td><img src="Trash.png"></td>
            </tr>
            <tr>
                <td>TL_PC_REN</td>
                <td>Plumbing Contractor Renewal Fees</td>
                <td>1.5.6ABC</td>
                <td>01/31/2020</td>
                <td>01/31/2020</td>
                <td>Enabled</td>
                <td><img src="Trash.png"></td>
            </tr>
            <tr>
                <td>TL_PC_REN</td>
                <td>Plumbing Contractor Renewal Fees</td>
                <td>1.5.6ABC</td>
                <td>01/31/2020</td>
                <td>01/31/2020</td>
                <td>Enabled</td>
                <td><img src="Trash.png"></td>
            </tr>
            <tr>
                <td>TL_PC_REN</td>
                <td>Plumbing Contractor Renewal Fees</td>
                <td>1.5.6ABC</td>
                <td>01/31/2020</td>
                <td>01/31/2020</td>
                <td>Enabled</td>
                <td><img src="Trash.png"></td>
            </tr>
            <tr>
                <td>TL_PC_REN</td>
                <td>Plumbing Contractor Renewal Fees</td>
                <td>1.5.6ABC</td>
                <td>01/31/2020</td>
                <td>01/31/2020</td>
                <td>Enabled</td>
                <td><img src="Trash.png"></td>
            </tr>
            <tr>
                <td>TL_PC_REN</td>
                <td>Plumbing Contractor Renewal Fees</td>
                <td>1.5.6ABC</td>
                <td>01/31/2020</td>
                <td>01/31/2020</td>
                <td>Enabled</td>
                <td><img src="Trash.png"></td>
            </tr>
            <tr>
                <td>TL_PC_REN</td>
                <td>Plumbing Contractor Renewal Fees</td>
                <td>1.5.6ABC</td>
                <td>01/31/2020</td>
                <td>01/31/2020</td>
                <td>Enabled</td>
                <td><img src="Trash.png"></td>
            </tr>
            <tr>
                <td>TL_PC_REN</td>
                <td>Plumbing Contractor Renewal Fees</td>
                <td>1.5.6ABC</td>
                <td>01/31/2020</td>
                <td>01/31/2020</td>
                <td>Enabled</td>
                <td><img src="Trash.png"></td>
            </tr>
            <tr>
                <td>TL_PC_REN</td>
                <td>Plumbing Contractor Renewal Fees</td>
                <td>1.5.6ABC</td>
                <td>01/31/2020</td>
                <td>01/31/2020</td>
                <td>Enabled</td>
                <td><img src="Trash.png"></td>
            </tr>
            <tr>
                <td>TL_PC_REN</td>
                <td>Plumbing Contractor Renewal Fees</td>
                <td>1.5.6ABC</td>
                <td>01/31/2020</td>
                <td>01/31/2020</td>
                <td>Enabled</td>
                <td><img src="Trash.png"></td>
            </tr>
            <tr>
                <td>TL_PC_REN</td>
                <td>Plumbing Contractor Renewal Fees</td>
                <td>1.5.6ABC</td>
                <td>01/31/2020</td>
                <td>01/31/2020</td>
                <td>Enabled</td>
                <td><img src="Trash.png"></td>
            </tr>
            <tr>
                <td>TL_PC_REN</td>
                <td>Plumbing Contractor Renewal Fees</td>
                <td>1.5.6ABC</td>
                <td>01/31/2020</td>
                <td>01/31/2020</td>
                <td>Enabled</td>
                <td><img src="Trash.png"></td>
            </tr>
            <tr>
                <td>TL_PC_REN</td>
                <td>Plumbing Contractor Renewal Fees</td>
                <td>1.5.6ABC</td>
                <td>01/31/2020</td>
                <td>01/31/2020</td>
                <td>Enabled</td>
                <td><img src="Trash.png"></td>
            </tr>
            <tr>
                <td>TL_PC_REN</td>
                <td>Plumbing Contractor Renewal Fees</td>
                <td>1.5.6ABC</td>
                <td>01/31/2020</td>
                <td>01/31/2020</td>
                <td>Enabled</td>
                <td><img src="Trash.png"></td>
            </tr>
            <tr>
                <td>TL_PC_REN</td>
                <td>Plumbing Contractor Renewal Fees</td>
                <td>1.5.6ABC</td>
                <td>01/31/2020</td>
                <td>01/31/2020</td>
                <td>Enabled</td>
                <td><img src="Trash.png"></td>
            </tr>
            <tr>
                <td>TL_PC_REN</td>
                <td>Plumbing Contractor Renewal Fees</td>
                <td>1.5.6ABC</td>
                <td>01/31/2020</td>
                <td>01/31/2020</td>
                <td>Enabled</td>
                <td><img src="Trash.png"></td>
            </tr>
            <tr>
                <td>TL_PC_REN</td>
                <td>Plumbing Contractor Renewal Fees</td>
                <td>1.5.6ABC</td>
                <td>01/31/2020</td>
                <td>01/31/2020</td>
                <td>Enabled</td>
                <td><img src="Trash.png"></td>
            </tr>
            <tr>
                <td>TL_PC_REN</td>
                <td>Plumbing Contractor Renewal Fees</td>
                <td>1.5.6ABC</td>
                <td>01/31/2020</td>
                <td>01/31/2020</td>
                <td>Enabled</td>
                <td><img src="Trash.png"></td>
            </tr>
            <tr>
                <td>TL_PC_REN</td>
                <td>Plumbing Contractor Renewal Fees</td>
                <td>1.5.6ABC</td>
                <td>01/31/2020</td>
                <td>01/31/2020</td>
                <td>Enabled</td>
                <td><img src="Trash.png"></td>
            </tr>
            <tr>
                <td>TL_PC_REN</td>
                <td>Plumbing Contractor Renewal Fees</td>
                <td>1.5.6ABC</td>
                <td>01/31/2020</td>
                <td>01/31/2020</td>
                <td>Enabled</td>
                <td><img src="Trash.png"></td>
            </tr>
        </tbody>
    </table>
<script src="Fee Schedules.js"></script>
</body>
</html>

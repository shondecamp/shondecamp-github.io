

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
    .title img{
        height:12px;
        padding-right:5px;
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
      background:#23653d;
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
    .buttonprimary img{
        opacity:50%;
        background:#23653d;
    }
    .buttonprimary:hover{
        background:#17532F;
    }
    .buttonprimary:hover img{
        opacity:100%;
        background:#17532F;
    }
    .meta{
        width:100%;
        padding:0px 32px;
        margin:70px 0px 0px 0px;
        display: block;
        position:static;
    }
    .tablecontrols{
        width:100%;
        display:flex;
        margin-bottom:32px;
    }
    .input{
        height: 40px;
        background: #F9FAFB;
        border: 1px solid #E7E5E4;
        border-radius:4px;
        margin:0px 24px 0px 0px;
        display:inline-block;
        vertical-align:middle;
        width:300px;
    }
    .input img{
        height: 19px;
        position:relative;
        left:20px;
        top:10px;
        margin-right:10px;
        opacity:30%;
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
    .textbutton{
        font-size:16px;
        background:transparent;
        border:none;
        color:#0052aa;
        border-radius:4px;
        height:30px;
        margin: 0px;
        cursor: pointer;
        position:absolute;
        font-family:'Open Sans';
    }
    .textbutton img{
        height:16px;
        padding-right:7px;
        opacity:50%;
    }
    .textbutton:hover{
        background:#f2f5f9;
    }
     .textbutton:hover img{
        background:#f2f5f9;
    }
    
table {
    font-family: 'Open Sans';
    border-collapse: collapse;
    width: 100%;
    color:#4C4C4C;
}
.markdown-body table {
    display:inline-table;
}
.markdown-body table tr{
    border-top:none;
}
.markdown-body table th, .markdown-body table td {
    border:none;
    padding: 0px 5px 0px 32px;
}
thead{
    width: 100%;
    border-bottom: 3px solid #E7E5E4;
}
th{
    text-align:left;
    text-transform:uppercase;
    font-weight:100 !important;
    font-size:12px;
    padding:0px 5px 0px 32px;
}
tbody{
    width:100%;
    display:table-row-group;
    height: 50vh;
    overflow:auto;
}
tr{
    font-size:14px;
    height:37px;
}
tbody tr{
    background-color: #F9FAFB;
    cursor: pointer;
    border-bottom:1px solid #E7E5E4;
}
tbody tr img{
    visibility:hidden;
    height:16px;
    padding:0px 32px 0px 0px;
}
tbody tr:hover{
    background-color:#D4E0EC;
}
tbody tr:hover img{
    visibility:visible;
}
tbody tr:nth-child(even):hover img{
    visibility:visible;
}
tbody tr:nth-child(even) {
    background-color: white;
}
tbody tr:nth-child(even):hover{
    background-color:#D4E0EC;
}
td {
    padding:0px 5px 0px 32px;
    border:none;
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
                <a>Fee Schedules</a>
            </div>
            <div class="usericon">
                <img src="Group.png">
            </div>
        </div>  
        <div class="title">
            <a>Fee Schedules</a>
            <div class="buttoncontainer">
                <button class="buttonprimary"><img src="plusicon.png">create new</button>
            </div>
        </div>
        <div class="meta">
            <div class="tablecontrols">  
                <div class="input" style="display:flex;">
                    <label></label>
                    <br>
                    <img src="Search.png">
                    <input value="Find in list" onclick="this.select()">
                </div> 
                <div class="input" style="display:flex;">
                    <label></label>
                    <br>
                    <input value="Enabled" onclick="this.select()">
                </div> 
                <button class="textbutton" style="position:relative; top:14px;"><img src="Filters.png">More Filters</button>
            </div> 
        </div>
        <table onclick="window.location.href = 'https://shondecamp.github.io/shondecamp-github.io/Fee%20Schedule%20View';">
            <thead>
                <tr>
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
                    <td>12345</td>
                    <td>some beautify item</td>
                    <td>$10</td>
                    <td>e=mc2</td>
                    <td>enabled</td>
                    <td><img src="Trash.png"></td>
                </tr>
                <tr>
                    <td>12345</td>
                    <td>some beautify item</td>
                    <td>$10</td>
                    <td>e=mc2</td>
                    <td>enabled</td>
                    <td><img src="Trash.png"></td>
                </tr>
                <tr>
                    <td>12345</td>
                    <td>some beautify item</td>
                    <td>$10</td>
                    <td>e=mc2</td>
                    <td>enabled</td>
                    <td><img src="Trash.png"></td>
                </tr>
                <tr>
                    <td>12345</td>
                    <td>some beautify item</td>
                    <td>$10</td>
                    <td>e=mc2</td>
                    <td>enabled</td>
                    <td><img src="Trash.png"></td>
                </tr>
                <tr>
                    <td>12345</td>
                    <td>some beautify item</td>
                    <td>$10</td>
                    <td>e=mc2</td>
                    <td>enabled</td>
                    <td><img src="Trash.png"></td>
                </tr>
                <tr>
                    <td>12345</td>
                    <td>some beautify item</td>
                    <td>$10</td>
                    <td>e=mc2</td>
                    <td>enabled</td>
                    <td><img src="Trash.png"></td>
                </tr>
                <tr>
                    <td>12345</td>
                    <td>some beautify item</td>
                    <td>$10</td>
                    <td>e=mc2</td>
                    <td>enabled</td>
                    <td><img src="Trash.png"></td>
                </tr>
                <tr>
                    <td>12345</td>
                    <td>some beautify item</td>
                    <td>$10</td>
                    <td>e=mc2</td>
                    <td>enabled</td>
                    <td><img src="Trash.png"></td>
                </tr>
                <tr>
                    <td>12345</td>
                    <td>some beautify item</td>
                    <td>$10</td>
                    <td>e=mc2</td>
                    <td>enabled</td>
                    <td><img src="Trash.png"></td>
                </tr>
                <tr>
                    <td>12345</td>
                    <td>some beautify item</td>
                    <td>$10</td>
                    <td>e=mc2</td>
                    <td>enabled</td>
                    <td><img src="Trash.png"></td>
                </tr>
                <tr>
                    <td>12345</td>
                    <td>some beautify item</td>
                    <td>$10</td>
                    <td>e=mc2</td>
                    <td>enabled</td>
                    <td><img src="Trash.png"></td>
                </tr>
                <tr>
                    <td>12345</td>
                    <td>some beautify item</td>
                    <td>$10</td>
                    <td>e=mc2</td>
                    <td>enabled</td>
                    <td><img src="Trash.png"></td>
                </tr>
                <tr>
                    <td>12345</td>
                    <td>some beautify item</td>
                    <td>$10</td>
                    <td>e=mc2</td>
                    <td>enabled</td>
                    <td><img src="Trash.png"></td>
                </tr>
                <tr>
                    <td>12345</td>
                    <td>some beautify item</td>
                    <td>$10</td>
                    <td>e=mc2</td>
                    <td>enabled</td>
                    <td><img src="Trash.png"></td>
                </tr>
                <tr>
                    <td>12345</td>
                    <td>some beautify item</td>
                    <td>$10</td>
                    <td>e=mc2</td>
                    <td>enabled</td>
                    <td><img src="Trash.png"></td>
                </tr>
                <tr>
                    <td>12345</td>
                    <td>some beautify item</td>
                    <td>$10</td>
                    <td>e=mc2</td>
                    <td>enabled</td>
                    <td><img src="Trash.png"></td>
                </tr>
                <tr>
                    <td>12345</td>
                    <td>some beautify item</td>
                    <td>$10</td>
                    <td>e=mc2</td>
                    <td>enabled</td>
                    <td><img src="Trash.png"></td>
                </tr>
                <tr>
                    <td>12345</td>
                    <td>some beautify item</td>
                    <td>$10</td>
                    <td>e=mc2</td>
                    <td>enabled</td>
                    <td><img src="Trash.png"></td>
                </tr>
                <tr>
                    <td>12345</td>
                    <td>some beautify item</td>
                    <td>$10</td>
                    <td>e=mc2</td>
                    <td>enabled</td>
                    <td><img src="Trash.png"></td>
                </tr>
                <tr>
                    <td>12345</td>
                    <td>some beautify item</td>
                    <td>$10</td>
                    <td>e=mc2</td>
                    <td>enabled</td>
                    <td><img src="Trash.png"></td>
                </tr>
                <tr>
                    <td>12345</td>
                    <td>some beautify item</td>
                    <td>$10</td>
                    <td>e=mc2</td>
                    <td>enabled</td>
                    <td><img src="Trash.png"></td>
                </tr>
                
            </tbody>
        </table>
    </body>
    </html>

<html>
<head>
    <link rel="stylesheet" type="text/css" href="Fee Schedules.css">
</head>
<body>
    <div class="sidenav" id="mySidenav">
        <a class="title">Add a Fee Item</a>
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
        <form action="/action_page.php">
            <label for="feeitemcode" id="label">Fee Item Code</label><br>
            <input type="text" id="feeitemcode" name="feeitemcode" placeholder="Fee Item Code" onclick="floatLabel()"><br>
            <label>Status</label><br>
            <input type="checkbox" name="status" value="enabled" checked onclick="statusBox()">
            <label style="font-weight:normal;" id="enabled" for="enabled">Enabled</label><br>
            <label for="description">Description</label><br>
            <input type="text" id="description" name="description" placeholder="Enter a Description"><br>
            <label for="unit">Unit</label><br>
            <div class="dropdown">
                <select id="unit" name="unit">
                    <option value="none"></option>
                    <option value="Acres">Acres</option>
                    <option value="Amps">Amps</option>
                    <option value="AutoCalc">AutoCalc</option>
                    <option value="BTU">BTU</option>
                    <option value="Cubic Feet">Cubic Feet</option>
                </select><br>
            </div>
            <label for="calcform">Calc Formula</label><br>
            <div class="dropdown">
                <select id="calcform" name="calcform">
                    <option value="none"></option>
                    <option value="Linear with Min/Max">Linear with Min/Max</option>
                    <option value="Linear Min/Max Evaluation">Linear Min/Max Evaluation</option>
                    <option value="Fixed Fee by Range">Fixed Fee by Range</option>
                    <option value="Penalty">Penalty</option>
                    <option value="Constant">Constant</option>
                </select><br>
            </div>
            <label for="Calcvariable">Calc Variable</label><br>
            <input type="text" id="Calcvariable" name="Calcvariablen" placeholder="Enter a Calc Variable"><br>
            <label for="Defaultvalue">Default Value</label><br>
            <input type="text" id="Defaultvalue" name="Defaultvalue" placeholder="Enter a Default Value"><br>
            <label for="feeindc">Fee Indicator (Qty)</label><br>
            <input type="text" id="feeindc" name="feeindc" placeholder="Enter a Fee Indicator"><br>
            <label>Round Fee Item</label><br>
            <input type="radio" id="rfiyes" name="roundfeeitem" value="yes" onclick="revealInput()">
            <label style="font-weight:normal;" for="yes">Yes</label>
            <input type="radio" id="rfino" name="roundfeeitem" value="no" onclick="hideInput()">
            <label style="font-weight:normal;" for="no">No</label><br>
            <div class="roundfees" id="roundyesopt">
                <input type="radio" id="roundyes" name="roundyesopt" value="up" style="margin-bottom:12px;">
                <label for="up" style="font-weight:normal;">Round Up</label><br>
                <input type="radio" id="roundyes" name="roundyesopt" value="down" style="margin-bottom:12px;">
                <label for="down" style="font-weight:normal;">Round Down</label><br>
                <input type="radio" id="roundyes" name="roundyesopt" value="nearest" style="margin-bottom:12px;">
                <label for="nearest" style="font-weight:normal;">Round to Nearest</label><br>
            </div>
            <label>Coupon Item</label><br>
            <input type="radio" id="yes" name="couponitem" value="yes" onclick="showCoupon()">
            <label style="font-weight:normal;" for="yes">Yes</label>
            <input type="radio" id="no" name="couponitem" value="no" onclick="hideCoupon()">
            <label style="font-weight:normal;" for="no">No</label><br>
            <div class="couponitemdates" id="couponitemdates" style="display:none;">
                <label for="effdate">Effective Date</label><br>
                <input type="date" id="effdate" name="effdate"><br>
                <label for="disdate">Disabled Date</label><br>
                <input type="date" id="disdate" name="disdate"><br>
            </div>
            <label>Required</label><br>
            <input type="radio" id="yes" name="required" value="yes">
            <label style="font-weight:normal;" for="yes">Yes</label>
            <input type="radio" id="no" name="required" value="no">
            <label style="font-weight:normal;" for="no">No</label><br>
            <label>Auto Invoiced</label><br>
            <input type="radio" id="yes" name="autoinvoice" value="yes">
            <label style="font-weight:normal;" for="yes">Yes</label>
            <input type="radio" id="no" name="autoinvoice" value="no">
            <label style="font-weight:normal;" for="no">No</label><br>
            <label>Auto Assessed</label><br>
            <input type="radio" id="yes" name="autoassess" value="yes">
            <label style="font-weight:normal;" for="yes">Yes</label>
            <input type="radio" id="no" name="autoassess" value="no">
            <label style="font-weight:normal;" for="no">No</label><br>
            <label for="qty">Quantity</label><br>
            <input type="text" id="qty" name="qty" placeholder="Enter a Quantity"><br>
            <label for="comments">Comments</label><br>
            <textarea name="comments" id="comments" rows="10" cols="30"></textarea><br>
        </form>
        <button id="button" onclick="showAdvanced()">Show Advanced Settings</button><br>
        <div class="advanced" id="advanced" style="display:none;">
            <form action="/action_page.php">
                <label for="priority">Priority</label><br>
                <input type="text" id="priority" name="priority" placeholder="Enter a priority"><br>
                <label for="min">Minimum</label><br>
                <input type="text" id="min" name="min" placeholder="Enter a min"><br>
                <label for="max">Maximum</label><br>
                <input type="text" id="max" name="max" placeholder="Enter a max"><br>
                <label for="seq">Sequence for Calculation</label><br>
                <input type="text" id="seq" name="seq" placeholder="Enter sequence"><br>
                <label for="dis">Display Order</label><br>
                <input type="text" id="dis" name="dis" placeholder="Enter an order"><br>
                <label>Display in ACA</label><br>
                <input type="radio" id="yes" name="acadisp" value="yes" onclick="showAca()">
                <label style="font-weight:normal;" for="yes">Yes</label>
                <input type="radio" id="no" name="acadisp" value="no" onclick="hideAca()">
                <label style="font-weight:normal;" for="no">No</label>
                <input type="radio" id="yes" name="acadisp" value="yes" onclick="hideAca()">
                <label style="font-weight:normal;" for="yes">Read Only</label><br>
                <div class="aca" id="aca" style="display:none; margin-left:30px">
                    <label>Pay Later in ACA</label><br>
                    <input type="radio" id="yes" name="acapaylater" value="yes">
                    <label style="font-weight:normal;" for="yes">Yes</label>
                    <input type="radio" id="no" name="acapaylater" value="no">
                    <label style="font-weight:normal;" for="no">No</label><br>
                    <label>Required in ACA</label><br>
                    <input type="radio" id="yes" name="acareq" value="yes">
                    <label style="font-weight:normal;" for="yes">Yes</label>
                    <input type="radio" id="no" name="acareq" value="no">
                    <label style="font-weight:normal;" for="no">No</label><br>
                    <label>Reufndable in ACA</label><br>
                    <input type="radio" id="yes" name="acaref" value="yes">
                    <label style="font-weight:normal;" for="yes">Yes</label>
                    <input type="radio" id="no" name="acaref" value="no">
                    <label style="font-weight:normal;" for="no">No</label><br>
                </div>
                <label>Assess Adjustment on Recalculation</label><br>
                <input type="radio" id="yes" name="acadisp" value="yes">
                <label style="font-weight:normal;" for="yes">Yes</label>
                <input type="radio" id="no" name="acadisp" value="no">
                <label style="font-weight:normal;" for="no">No</label><br>
                <label>Adjustment Credits Allowed</label><br>
                <input type="radio" id="yes" name="acadisp" value="yes">
                <label style="font-weight:normal;" for="yes">Yes</label>
                <input type="radio" id="no" name="acadisp" value="no">
                <label style="font-weight:normal;" for="no">No</label><br>
                <label for="payperiod">Payment Period</label><br>
                <div class="dropdown">
                    <select id="payperiod" name="payperiod">
                        <option value="none"></option>
                        <option value="Linear with Min/Max">Code</option>
                        <option value="Linear Min/Max Evaluation">Final</option>
                        <option value="Fixed Fee by Range">Plan Initial</option>
                    </select><br>
                </div>
                <label for="subgroup">Subgroup</label><br>
                <input type="text" id="subgroup" name="subgroup" placeholder="Enter a subgroup"><br>
                <label>Fee Allocation</label><br>
                <input type="radio" id="yes" name="feeallocation" value="none" onclick="hideActcodes()">
                <label for="yes" style="font-weight:normal;">No Allocation</label>
                <input type="radio" id="no" name="feeallocation" value="percent" onclick="showActcodesperc()">
                <label for="no" style="font-weight:normal;">Percentage</label>
                <input type="radio" id="no" name="feeallocation" value="fixed" onclick="showActcodesfix()">
                <label for="no" style="font-weight:normal;">Fixed Amounts and Residual</label><br>
                <div style="display:none; position:relative; left:30px;" id="codes">
                    <div class="gridfield">
                        <label for="accountcode">Account Code 1</label><br>
                        <input type="text" id="accountcodename" name="accountcode" class="accountcode">
                    </div>
                    <div class="gridfield">
                        <label for="perc" class="perc">Percentage</label><br>
                        <input class="perc" type="text" id="percentage" name="accountcode" placeholder="%" style="min-width:50px; width:120px;">
                    </div>
                    <div class="gridfield">
                        <label for="fixed" class="fixed">Amount</label><br>
                        <input class="fixed" type="text" class="fixed" name="fixed" style="min-width:50px; width:120px;" placeholder="$">
                    </div><br>
                    <div class="gridfield">
                        <label for="accountcode">Account Code 2</label><br>
                        <input type="text" id="accountcodename2" name="accountcode" class="accountcode">
                    </div>
                    <div class="gridfield">
                        <label for="perc" class="perc">Percentage</label><br>
                        <input class="perc" type="text" id="percentage2" name="accountcode" placeholder="%" style="min-width:50px; width:120px;">
                    </div>
                    <div class="gridfield">
                        <label for="fixed" class="fixed">Amount</label><br>
                        <input class="fixed" type="text" class="fixed" name="fixed" style="min-width:50px; width:120px;" placeholder="$">
                    </div><br>
                    <div class="gridfield">
                        <label for="accountcode">Account Code 3</label><br>
                        <input type="text" id="accountcodename2" name="accountcode" class="accountcode">
                    </div>
                    <div class="gridfield">
                        <label for="perc" class="perc">Percentage</label><br>
                        <input class="perc" type="text" id="percentage2" name="accountcode" placeholder="%" style="min-width:50px; width:120px;">
                    </div>
                    <div class="gridfield">
                        <label for="fixed" class="fixed">Amount</label><br>
                        <input class="fixed" type="text" class="fixed" name="fixed" style="min-width:50px; width:120px;" placeholder="$">
                        </div><br>
                    </div>
            </form>
        </div>
        <input type="submit" class="save" value="Save" onclick="window.location.href = 'https://shondecamp.github.io/shondecamp-github.io/Fee%20Schedule%20Edit';">
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
            <a class="pointer" onclick="window.location.href = 'https://shondecamp.github.io/shondecamp-github.io/';">Fee Schedules</a>
            <img src="Fill 304.png">
            <a style="font-weight:bolder;">TL_PC_REN</a>
        </div>
        <div class="usericon">
            <img src="Group.png">
        </div>
    </div>  
    <div class="title">
        <a>TL_PC_REN</a>
      <div class="buttoncontainer">
            <button class="secondarybutton" onclick="window.location.href = 'https://shondecamp.github.io/shondecamp-github.io/';" target="_blank" id="myBtn2">close</button>
            <button class="primarybutton" onclick="myFunction();" target="_blank" id="myBtn" disabled>save</button>
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
            <div class="readonlywrapper">
                <label>version</label>
                <br>
                <div class="readonlywithbutton">
                    <a>1.5.6ABC</a>
                    <button class="tinybutton" onclick="window.location.href = 'https://shondecamp.github.io/shondecamp-github.io/Fee%20Schedule%20New%20Version';">Create New Version</button>
                </div>
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
                <label>expiration date</label>
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
                <button class="tinybutton" style="right:60px; font-weight:normal;" onclick="openNav()">
                    <img src="NewVersion.png" style="visibility:visible;height:12px;padding-right:5px;">
                    Add Fee Item
                </button>
        </div>
    </div>
  <div class="spacer"></div>
   <div id="snackbaredit">Edits Saved</div>
  <div id="snackbarremove">Fee Item Removed</div>
  <div id="snackbaradd">Fee Item Added</div>
  <script src="Fee Schedules.js"></script>
</body>
</html>

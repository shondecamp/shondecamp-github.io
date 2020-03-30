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
                <label class="radio" style="font-weight:normal; font-size:16px; color:#414A56; text-transform:capitalize;">Yes
                    <input type="radio" name="roundfeeradio" id="rfiyes" onclick="revealInput()">
                    <span class="radioselect"></span>
                </label>

                <label class="radio" style="font-weight:normal; font-size:16px; color:#414A56; text-transform:capitalize;">No
                    <input type="radio" name="roundfeeradio" id="rfino" onclick="hideInput()">
                    <span class="radioselect"></span>
                </label>

                    <div class="roundfees" id="roundyesopt">
                    
                            <label class="radio" style="display:block; font-weight:normal; font-size:16px; color:#414A56; text-transform:capitalize;">Round Up
                                <input name="roundyesradioopt" type="radio">
                                <span class="radioselect"></span>
                            </label>

                            <label class="radio" style="display:block; font-weight:normal; font-size:16px; color:#414A56; text-transform:capitalize;">Round Down
                                <input name="roundyesradioopt" type="radio">
                                <span class="radioselect"></span>
                            </label>

                            <label class="radio" style="display:block; font-weight:normal; font-size:16px; color:#414A56; text-transform:capitalize;">Round To Nearest
                                <input name="roundyesradioopt" type="radio">
                                <span class="radioselect"></span>
                            </label>
                        
                    </div><br>

           
            <label>Coupon Item</label><br>
                <label class="radio" style="font-weight:normal; font-size:16px; color:#414A56; text-transform:capitalize;">Yes
                    <input type="radio" name="coupitradio" id="rfiyes" onclick="showCoupon()">
                    <span class="radioselect"></span>
                </label>

                <label class="radio" style="font-weight:normal; font-size:16px; color:#414A56; text-transform:capitalize;">No
                    <input type="radio" name="coupitradio" id="rfino" onclick="hideCoupon()">
                    <span class="radioselect"></span>
                </label>

                    <div class="couponitemdates" id="couponitemdates" style="display:none;">
                        <label for="effdate">Effective Date</label><br>
                        <input type="date" id="effdate" name="effdate"><br>
                        <label for="disdate">Disabled Date</label><br>
                        <input type="date" id="disdate" name="disdate"><br>
                    </div><br>

            <label>Required</label><br>
                <label class="radio" style="font-weight:normal; font-size:16px; color:#414A56; text-transform:capitalize;">Yes
                    <input type="radio" name="required">
                    <span class="radioselect"></span>
                </label>

                <label class="radio" style="font-weight:normal; font-size:16px; color:#414A56; text-transform:capitalize;">No
                    <input type="radio" name="required">
                    <span class="radioselect"></span>
                </label><br>
          
            <label>Auto Invoiced</label><br>
                <label class="radio" style="font-weight:normal; font-size:16px; color:#414A56; text-transform:capitalize;">Yes
                    <input type="radio" name="autoinvoice">
                    <span class="radioselect"></span>
                </label>

                <label class="radio" style="font-weight:normal; font-size:16px; color:#414A56; text-transform:capitalize;">No
                    <input type="radio" name="autoinvoice">
                    <span class="radioselect"></span>
                </label><br>

            <label>Auto Assessed</label><br>
                <label class="radio" style="font-weight:normal; font-size:16px; color:#414A56; text-transform:capitalize;">Yes
                    <input type="radio" name="autoassess">
                    <span class="radioselect"></span>
                </label>

                <label class="radio" style="font-weight:normal; font-size:16px; color:#414A56; text-transform:capitalize;">No
                    <input type="radio" name="autoassess">
                    <span class="radioselect"></span>
                </label><br>

            <label>Quantity</label><br>
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
                <label class="radio" style="font-weight:normal; font-size:16px; color:#414A56; text-transform:capitalize;">Yes
                    <input type="radio" name="acadisp" onclick="showAca()">
                    <span class="radioselect"></span>
                </label>

                <label class="radio" style="font-weight:normal; font-size:16px; color:#414A56; text-transform:capitalize;">No
                    <input type="radio" name="acadisp" onclick="hideAca()">
                    <span class="radioselect"></span>
                </label>

                <label class="radio" style="font-weight:normal; font-size:16px; color:#414A56; text-transform:capitalize;">Read Only
                    <input type="radio" name="acadisp" onclick="hideAca()">
                    <span class="radioselect"></span>
                </label>

                    <div class="aca" id="aca" style="display:none; margin-left:30px">

                        <label>Pay Later in ACA</label><br>
                            <label class="radio" style="font-weight:normal; font-size:16px; color:#414A56; text-transform:capitalize;">Yes
                                <input type="radio" name="lateraca">
                                <span class="radioselect"></span>
                            </label>

                            <label class="radio" style="font-weight:normal; font-size:16px; color:#414A56; text-transform:capitalize;">No
                                <input type="radio" name="lateraca">
                                <span class="radioselect"></span>
                            </label><br>

                        <label>Required in ACA</label><br>
                            <label class="radio" style="font-weight:normal; font-size:16px; color:#414A56; text-transform:capitalize;">Yes
                                <input type="radio" name="reqaca">
                                <span class="radioselect"></span>
                            </label>

                            <label class="radio" style="font-weight:normal; font-size:16px; color:#414A56; text-transform:capitalize;">No
                                <input type="radio" name="reqaca">
                                <span class="radioselect"></span>
                            </label><br>

                        <label>Reufndable in ACA</label><br>
                            <label class="radio" style="font-weight:normal; font-size:16px; color:#414A56; text-transform:capitalize;">Yes
                                <input type="radio" name="refaca">
                                <span class="radioselect"></span>
                            </label>

                            <label class="radio" style="font-weight:normal; font-size:16px; color:#414A56; text-transform:capitalize;">No
                                <input type="radio" name="refaca">
                                <span class="radioselect"></span>
                            </label>

                    </div><br>

                <label>Assess Adjustment on Recalculation</label><br>
                    <label class="radio" style="font-weight:normal; font-size:16px; color:#414A56; text-transform:capitalize;">Yes
                        <input type="radio" name="assadjrec">
                        <span class="radioselect"></span>
                    </label>

                    <label class="radio" style="font-weight:normal; font-size:16px; color:#414A56; text-transform:capitalize;">No
                        <input type="radio" name="assadjrec">
                        <span class="radioselect"></span>
                    </label><br>

                <label>Adjustment Credits Allowed</label><br>
                    <label class="radio" style="font-weight:normal; font-size:16px; color:#414A56; text-transform:capitalize;">Yes
                        <input type="radio" name="adjcredall">
                        <span class="radioselect"></span>
                    </label>

                    <label class="radio" style="font-weight:normal; font-size:16px; color:#414A56; text-transform:capitalize;">No
                        <input type="radio" name="adjcredall">
                        <span class="radioselect"></span>
                    </label><br>

                
                <label>Payment Period</label><br>
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
                    <label class="radio" style="font-weight:normal; font-size:16px; color:#414A56; text-transform:capitalize;">No Allocation
                        <input type="radio" name="feealloc" onclick="hideActcodes()">
                        <span class="radioselect"></span>
                    </label>

                    <label class="radio" style="font-weight:normal; font-size:16px; color:#414A56; text-transform:capitalize;">Percentage
                        <input type="radio" name="feealloc" onclick="showActcodesperc()">
                        <span class="radioselect"></span>
                    </label>

                    <label class="radio" style="font-weight:normal; font-size:16px; color:#414A56; text-transform:capitalize;">Fixed Amt./Residual
                        <input type="radio" name="feealloc" onclick="showActcodesfix()">
                        <span class="radioselect"></span>
                    </label>

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
        <input type="submit" class="save" value="Save" onclick="addFee()">
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
            <a class="pointer" onclick="window.location.href = 'https://shondecamp.github.io/shondecamp-github.io/Fee%20Schedule%20Edit';">TL_PC_REN</a>
            <img src="Fill 304.png">
            <a style="font-weight:bolder;">New Version TL_PC_REN</a>
        </div>
        <div class="usericon">
            <img src="Group.png">
        </div>
    </div>  
    <div class="title">
        <a>New Version - SF_Fire</a>
        <div class="buttoncontainer">
            <button class="secondarybutton" onclick="window.location.href = 'https://shondecamp.github.io/shondecamp-github.io/Fee%20Schedule%20Edit';" target="_blank" id="myBtn2">close</button>
            <button class="primarybutton" onclick="myFunction();" target="_blank" id="myBtn" disabled>save</button>
        </div>
    </div>
    <div class="meta">
        <div class="formfieldwrapper">  
            <div class="textinput">
                <label>fee schedule alias</label>
                <br>
                <input value="SF Fire fee" onclick="this.select(); swapText()">
            </div>
        </div> 
        <div class="formfieldwrapper">  
            <div class="textinput">
                <label>version</label>
                <br>
                <input value="1.0" onclick="this.select(); swapText()">
            </div>
        </div>
        <div class="formfieldwrapper"> 
            <div class="readonlywrapper">
                <label>status</label>
                <br>
                <input type="checkbox" name="status" value="enabled" checked="" onclick="newversionfeestatusBox()">
<label style="font-weight:normal;" id="newversionfeestatus" for="enabled">Enabled</label>
            </div> 
        </div> 
        <div class="formfieldwrapper">  
            <div class="textinput">
                <label>effective</label>
                <br>
                <input value="05/01/2020" onclick="this.select(); swapText()">
            </div>
        </div> 
        <div class="formfieldwrapper">  
            <div class="textinput">
                <label>expiration date</label>
                <br>
                <input value="12/31/2020" onclick="this.select(); swapText()">
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
  <div id="snackbaredit">New Version Created!</div>
  <div id="snackbarremove">Fee Item Removed</div>
  <div id="snackbaradd">Fee Item Added</div>
  <script src="Fee Schedules.js"></script>
</body>
</html>

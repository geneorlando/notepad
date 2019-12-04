//main text area, font, and font family
var mText = document.getElementById("main");
var fSize = document.getElementById("fontSizeField");
var fFamily = document.getElementById("fontFamilyField");
//fonnt, font family, and color toggle buttons
var fFamilyButton = document.getElementById('fontFamilyButton');
var fSizeButton = document.getElementById('fontSizeButton');
var cToggleButton = document.getElementById('colorToggleButton');
var cToggleVar = 0;
//color fields
var colorSection = document.getElementById("colorSection");
var tColorField = document.getElementById("textColorField");
var fColorField = document.getElementById("fieldColorField");
var bColorField = document.getElementById("backgroundColorField");
//color buttons
var tColorButton = document.getElementById('textColorButton');
var fColorButton = document.getElementById('fieldColorButton');
var bColorButton = document.getElementById('backgroundColorButton');
//colors
var tColor = tColorField.value;
var fColor = fColorField.value;
var bColor = bColorField.value;
//cookies
var cookieAge = .01;
//set cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
//find cookie
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
//check for cookie
function findCookie (cvar, cname) {
    if (getCookie(cname) !== "") {
        cvar.value = getCookie(cname);
    }
}
// function to set initial values
function valueSet(){
    //set font
    mText.style.fontSize = fSize.value;
    mText.style.fontFamily = fFamily.value;
    //set colors
    tColor = tColorField.value;
    fColor = fColorField.value;
    bColor = bColorField.value;
    //set background color
    document.body.style.backgroundColor = bColor;
    //objects that get text color
    mText.style.color = tColor;
    fSize.style.color = tColor;
    fFamily.style.color = tColor;
    tColorField.style.color = tColor;
    fColorField.style.color = tColor;
    bColorField.style.color = tColor;
    fFamilyButton.style.backgroundColor = tColor;
    fSizeButton.style.backgroundColor = tColor;
    cToggleButton.style.backgroundColor = tColor;
    //objects that get field color
    mText.style.backgroundColor = fColor;
    fSize.style.backgroundColor = fColor;
    fFamily.style.backgroundColor = fColor;
    tColorField.style.backgroundColor = fColor;
    fColorField.style.backgroundColor = fColor;
    bColorField.style.backgroundColor = fColor;
    fFamilyButton.style.color = fColor;
    fSizeButton.style.color = fColor;
    cToggleButton.style.color = fColor;
    //color buttons
    tColorButton.style.backgroundColor = tColor;
    fColorButton.style.backgroundColor = fColor;
    bColorButton.style.backgroundColor = bColor;
    //set cookies
    setCookie("mainText", mText.value, cookieAge);
    setCookie("fontSize", fSize.value, cookieAge);
    setCookie("fontFamily", fFamily.value, cookieAge);
    setCookie("textColor", tColor, cookieAge);
    setCookie("fieldColor", fColor, cookieAge);
    setCookie("backgroundColor", bColor, cookieAge);
    //set colors
    tColor = tColorField.value;
    fColor = fColorField.value;
    bColor = bColorField.value;
}

findCookie(mText, "mainText");
findCookie(fSize, "fontSize");
findCookie(fFamily, "fontFamily");
findCookie(tColorField, "textColor");
findCookie(fColorField, "fieldColor");
findCookie(bColorField, "backgroundColor");

//set values
valueSet();
//hide color section
colorSection.style.display = "none";
//Font Size Button
fSizeButton.addEventListener("click", function(){
    fSize.value="";
    fSize.focus();
});
//Font Family Button
fFamilyButton.addEventListener("click", function(){
    fFamily.value="";
    fFamily.focus();
});
//Color Section Toggle Button
cToggleButton.addEventListener("click", function(){
    if (cToggleVar ===0) {
        colorSection.style.display = "block";
        cToggleButton.style.opacity = ".5";
        cToggleVar = 1;
    } else {
        colorSection.style.display = "none";
        cToggleButton.style.opacity = "1";
        cToggleVar = 0;
    }
});
//Color Buttons
fColorButton.addEventListener("click", function(){
    fColorField.value="";
    fColorField.focus();
});

tColorButton.addEventListener("click", function(){
    tColorField.value="";
    tColorField.focus();
});

bColorButton.addEventListener("click", function(){
    bColorField.value="";
    bColorField.focus();
});
//Inputs
fSize.addEventListener("input", function(){
    valueSet();
});

fFamily.addEventListener("input", function(){
    valueSet();
});

tColorField.addEventListener("input", function(){
    valueSet();
});

fColorField.addEventListener("input", function(){
    valueSet();
});

bColorField.addEventListener("input", function(){
    valueSet();
});
//fieldColorOutlines
mText.addEventListener("focus", () => {
    mText.style.outlineColor=tColor;
});
fSize.addEventListener("focus", () => {
    fSize.style.outlineColor=tColor;
});
fFamily.addEventListener("focus", () => {
    fFamily.style.outlineColor=tColor;
});
tColorField.addEventListener("focus", () => {
    tColorField.style.outlineColor=tColor;
});
fColorField.addEventListener("focus", () => {
    fColorField.style.outlineColor=tColor;
});
bColorField.addEventListener("focus", () => {
    bColorField.style.outlineColor=tColor;
});
//buttonColorOutlines
fSizeButton.addEventListener("focus", () => {
    fSizeButton.style.outlineColor=fColor;
});
fFamilyButton.addEventListener("focus", () => {
    fFamilyButton.style.outlineColor=fColor;
});
cToggleButton.addEventListener("focus", () => {
    cToggleButton.style.outlineColor=fColor;
});
tColorButton.addEventListener("focus", () => {
    tColorButton.style.outlineColor=fColor;
});
fColorButton.addEventListener("focus", () => {
    fColorButton.style.outlineColor=tColor;
});
bColorButton.addEventListener("focus", () => {
    bColorButton.style.outlineColor=fColor;
});
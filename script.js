//main text area, font, and font family
var mText = document.getElementById("main");
var fSize = document.getElementById("fontSizeField");
var fFamily = document.getElementById("fontFamilyField");
//fonnt, font family, and color toggle buttons
var fFamilyButton = document.getElementById('fontFamilyButton');
var fSizeButton = document.getElementById('fontSizeButton');
var cToggleButton = document.getElementById('colorToggleButton');
var cToggleVar = 0;
var copyButton = document.getElementById('copyButton');
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
    copyButton.style.backgroundColor = tColor;
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
    copyButton.style.color = fColor;
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
fSizeButton.addEventListener("click", () => {
    fSize.value="";
    fSize.focus();
});
//Font Family Button
fFamilyButton.addEventListener("click", () => {
    fFamily.value="";
    fFamily.focus();
});
//Color Section Toggle Button
cToggleButton.addEventListener("click", () => {
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
//Copy Button
copyButton.addEventListener("click", () => {
    mText.select();
    document.execCommand("copy");
    mText.focus();
});
//Color Buttons
fColorButton.addEventListener("click", () => {
    fColorField.value="";
    fColorField.focus();
});

tColorButton.addEventListener("click", () => {
    tColorField.value="";
    tColorField.focus();
});

bColorButton.addEventListener("click", () => {
    bColorField.value="";
    bColorField.focus();
});
//Inputs
fSize.addEventListener("input", () => {
    valueSet();
});

fFamily.addEventListener("input", () => {
    valueSet();
});

tColorField.addEventListener("input", () => {
    valueSet();
});

fColorField.addEventListener("input", () => {
    valueSet();
});

bColorField.addEventListener("input", () => {
    valueSet();
});
//fieldColorOutlines
mText.addEventListener("focus", () => {
    valueSet();
    mText.style.outlineColor=tColor;
});
fSize.addEventListener("focus", () => {
    valueSet();
    fSize.style.outlineColor=tColor;
});
fFamily.addEventListener("focus", () => {
    valueSet();
    fFamily.style.outlineColor=tColor;
});
tColorField.addEventListener("focus", () => {
    valueSet();
    tColorField.style.outlineColor=tColor;
});
fColorField.addEventListener("focus", () => {
    valueSet();
    fColorField.style.outlineColor=tColor;
});
bColorField.addEventListener("focus", () => {
    valueSet();
    bColorField.style.outlineColor=tColor;
});
//buttonColorOutlines
fSizeButton.addEventListener("focus", () => {
    valueSet();
    fSizeButton.style.outlineColor=fColor;
});
fFamilyButton.addEventListener("focus", () => {
    valueSet();
    fFamilyButton.style.outlineColor=fColor;
});
cToggleButton.addEventListener("focus", () => {
    valueSet();
    cToggleButton.style.outlineColor=fColor;
});
copyButton.addEventListener("focus", () => {
    valueSet();
    copyButton.style.outlineColor=fColor;
});
tColorButton.addEventListener("focus", () => {
    valueSet();
    tColorButton.style.outlineColor=fColor;
});
fColorButton.addEventListener("focus", () => {
    valueSet();
    fColorButton.style.outlineColor=tColor;
});
bColorButton.addEventListener("focus", () => {
    valueSet();
    bColorButton.style.outlineColor=fColor;
});
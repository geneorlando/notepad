
var mFont = document.getElementById("main");
var sFont = document.getElementById("fontSizeField");
var fFont = sFont.value;
var cFont = document.getElementById("fontFamilyField");

var tColorField = document.getElementById("textColorField");
var fColorField = document.getElementById("fieldColorField");
var bColorField = document.getElementById("backgroundColorField");

var fFamilyButton = document.getElementById('fontFamilyButton');
var fSizeButton = document.getElementById('fontSizeButton');
var cToggleButton = document.getElementById('colorToggleButton');
var cToggleVar = 0;

var colorSection = document.getElementById("colorSection");
var tColorButton = document.getElementById('textColorButton');
var fColorButton = document.getElementById('fieldColorButton');
var bColorButton = document.getElementById('backgroundColorButton');

var tColor = tColorField.value;
var fColor = fColorField.value;
var bColor = bColorField.value;
//set initial values
function valueSet(){
    mFont.style.fontSize = fFont;

    document.body.style.backgroundColor = bColor;

    mFont.style.color = tColor;
    sFont.style.color = tColor;
    cFont.style.color = tColor;
    tColorField.style.color = tColor;
    fColorField.style.color = tColor;
    bColorField.style.color = tColor;
    fFamilyButton.style.backgroundColor = tColor;
    fSizeButton.style.backgroundColor = tColor;
    cToggleButton.style.backgroundColor = tColor;

    mFont.style.backgroundColor = fColor;
    sFont.style.backgroundColor = fColor;
    cFont.style.backgroundColor = fColor;
    tColorField.style.backgroundColor = fColor;
    fColorField.style.backgroundColor = fColor;
    bColorField.style.backgroundColor = fColor;
    fFamilyButton.style.color = fColor;
    fSizeButton.style.color = fColor;
    cToggleButton.style.color = fColor;

    tColorButton.style.backgroundColor = tColor;
    fColorButton.style.backgroundColor = fColor;
    bColorButton.style.backgroundColor = bColor;
}
valueSet();
colorSection.style.display = "none";

fSizeButton.addEventListener("click", function(){
    sFont.value="";
    sFont.focus();
});

sFont.addEventListener("input", function(){
    fFont = sFont.value;
    valueSet();
});

fFamilyButton.addEventListener("click", function(){
    cFont.value="";
    cFont.focus();
});

cFont.addEventListener("input", function(){
    mFont.style.fontFamily = cFont.value;
});

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

tColorButton.addEventListener("click", function(){
    tColorField.value="";
    tColorField.focus();
});

tColorField.addEventListener("input", function(){
    tColor = tColorField.value;
    valueSet();
});

fColorButton.addEventListener("click", function(){
    fColorField.value="";
    fColorField.focus();
});

fColorField.addEventListener("input", function(){
    fColor = fColorField.value;
    valueSet();
});

bColorButton.addEventListener("click", function(){
    bColorField.value="";
    bColorField.focus();
});

bColorField.addEventListener("input", function(){
    bColor = bColorField.value;
    valueSet();
});
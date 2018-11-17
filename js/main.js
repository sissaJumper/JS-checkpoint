

function myBold(){
    if ( document.querySelector("#text").style.fontWeight == "bold"  ) {
    document.querySelector("#text").style.fontWeight="100";
        
    }
    else {
    document.querySelector("#text").style.fontWeight="bold";

    }
}
function myItalic(){
    if (document.querySelector("#text").style.fontStyle == "italic") {
        document.querySelector("#text").style.fontStyle="normal";
        
    }
    else {
    document.querySelector("#text").style.fontStyle="italic";

    }
}
function myUnderline(){
    if (document.querySelector("#text").style.textDecoration == "underline")
    {
    document.querySelector("#text").style.textDecoration="none";
}
    else{
    document.querySelector("#text").style.textDecoration="underline";
}
}

function Myfonts(){

    var index=document.querySelector("#fonts").selectedIndex;
    var font=document.querySelector("#fonts").options[index].value;
    document.querySelector("#text").style.fontFamily=font;

    /*console.log(value);*/
}

function MyfontsWeight(){

    // var index=document.querySelector("#fontsWeight").selectedIndex;
    // var size=document.querySelector("#fontsWeight").options[index].value;
    // document.querySelector("#text").style.fontSize=size;

    document.querySelector("#text").style.fontSize = document.querySelector("#fontsWeight").value;

    /*console.log(value);*/
}


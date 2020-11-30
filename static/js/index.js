//-----------------------------Animation avatar on home page----------------------------------//
//animation div height and resizable height
var jsAnimation = document.createElement("div");
jsAnimation.id = "jsAnimation";
$(jsAnimation).insertAfter("#header");
$("#jsAnimation").css("height",window.innerHeight - $("header").height());

document.getElementById("body").onresize = function(e){
    $("#jsAnimation").css("height",window.innerHeight - $("header").height());
};
//div for avatar image
var avatarDiv = document.createElement("div");
avatarDiv.id = "avatarDiv";
avatarDiv.style.height = toVh(vhToPx(100)-($("#header").height()))-2+"vh";
jsAnimation.appendChild(avatarDiv);

//animation div imgs -> adding on page
function addFacePart(name, identifier,source, parent="avatarDiv",avClass="avatarPart"){
    var name = document.createElement("img");
    name.id = identifier;
    name.className = avClass;
    name.src = source;
    document.getElementById(parent).appendChild(name);
};
addFacePart("avatarFace","face","./static/img/face.svg");
addFacePart("avatarEyes","eyes","./static/img/eyes.svg");
addFacePart("avatarNose","nose","./static/img/nose.svg");
addFacePart("avatarMouth","mouth","./static/img/mouth.svg");
addFacePart("avatarHair","hair","./static/img/hair.svg");
addFacePart("avatarShoulders","shoulders","./static/img/shoulders.svg");

$(document).ready(function(){
    for (let elt of $(".avatarPart")){
        $("#"+elt.id).addClass("facePartPlaced");
        $("#"+elt.id).addClass(elt.id+"Placed");
    };
});

//--------------------------Other parts of home page -----------------------------------//

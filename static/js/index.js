//-----------------------------Animation avatar on home page----------------------------------//
//animation div height and resizable height----------------------------------
$("#jsAnimation").css("height",window.innerHeight - $("header").height());

document.getElementById("body").onresize = function(e){
    $("#jsAnimation").css("height",window.innerHeight - $("header").height());
    if (window.matchMedia("(min-width: 992px)").matches) {
        console.log("resizing");
        $("#web").css("width", 100-(((100*($(".facePlaced")[0].width))/window.innerWidth)+5)+"vw");
        $("#drawings").css("width", 100-(((100*($(".facePlaced")[0].width))/window.innerWidth)+5)+"vw");
        $("#others").css("width", 100-(((100*($(".facePlaced")[0].width))/window.innerWidth)+5)+"vw");
    } else {
        $("#web").css("width", 100-(((100*($(".facePlaced")[0].width))/window.innerWidth)+5)+"vw");
    };
};

//div for avatar image-------------------------------------------------------
var avatarDiv = document.createElement("div");
avatarDiv.id = "avatarDiv";
avatarDiv.style.height = toVh(vhToPx(100)-($("#header").height()))-2+"vh";
jsAnimation.appendChild(avatarDiv);

//animation div imgs -> adding on page---------------------------------------
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
    if (window.matchMedia("(min-width: 992px)").matches) {
        $("#web").css("width", 100-(toVw($(".facePlaced")[0].width)+5)+"vw");
        $("#drawings").css("width", 100-(toVw($(".facePlaced")[0].width)+5)+"vw");
        $("#others").css("width", 100-(toVw($(".facePlaced")[0].width)+5)+"vw");
    } else {
        $("#webText>a").html("<p>W</p><p>E</p><p>B</p>");
        $("#web").css("width", 100-(toVw($(".facePlaced")[0].width)+5)+"vw");
    };
    for (let elt of $(".otherHomePart")){
        $("#"+elt.id).addClass(elt.id+"Placed");
    };
});








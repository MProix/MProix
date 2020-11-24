
$("#main_content").css("height", parseInt(getComputedStyle(document.getElementById("main_content")).width)*Math.sqrt(2));

document.getElementById("body").onresize = function(e){
    var ownWidth = window.innerWidth;
    var ownHeight = window.innerHeight;
    $("#main_content").css("height", parseInt(getComputedStyle(document.getElementById("main_content")).width)*Math.sqrt(2));

    console.log("e -> ",e.target.innerWidth);
};


$("#main_content").css("height", parseInt(getComputedStyle(document.getElementById("main_content")).width)*Math.sqrt(2));
correspondHeights();

function correspondHeights(){
    let num = 1;
    for (let elt of ($("#dates p"))){
        elt.style.top = (($(".dated")[num-1].offsetTop));
        num ++;
        
    };
};
document.getElementById("body").onresize = function(e){
    var ownWidth = window.innerWidth;
    var ownHeight = window.innerHeight;
    $("#main_content").css("height", parseInt(getComputedStyle(document.getElementById("main_content")).width)*Math.sqrt(2));
    correspondHeights();
    // console.log("e -> ",e.target.innerWidth);
};



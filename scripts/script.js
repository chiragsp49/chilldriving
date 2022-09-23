const sterringWheel = document.getElementById("sterringWheel");

document.addEventListener( 'keydown', checkKey);

function checkKey(e){
    console.log("key pressed",e.key);
    switch (e.key) {
        case "ArrowRight":
            if(!sterringWheel.classList.contains("rotate-45")){
                console.log("right");
                sterringWheel.classList.remove("-rotate-45");
                sterringWheel.classList.add("rotate-45");
            }
            break;
        case "ArrowLeft":
            if(!sterringWheel.classList.contains("-rotate-45")){
                console.log("left");
                sterringWheel.classList.remove("rotate-45");
                sterringWheel.classList.add("-rotate-45");
            }
            break;
        default:
            sterringWheel.classList.remove("rotate-45");
            sterringWheel.classList.remove("-rotate-45");

    }
}
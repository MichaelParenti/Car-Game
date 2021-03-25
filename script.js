var listen = document.getElementById("button").addEventListener("click", () =>{
    document.getElementById("intro").style.visibility = "hidden";

const objectMove = document.getElementById("container");
let object = document.getElementById("container");



    

let moveRight = 20;
let moveUp = 20;

    document.addEventListener("keydown", (e) =>{

            //Move Right
            if(event.keyCode == 39 && (object.offsetLeft + object.offsetWidth) < 300) {
                moveRight = moveRight + 10;
                objectMove.style.left = moveRight + "px";
            }
            //Move Left
            else if(event.keyCode == 37 && object.offsetLeft > 0) {
                moveRight = moveRight - 10;
                objectMove.style.left = moveRight + "px";                    
            }
            //Move Up
            else if(event.keyCode == 38 && object.offsetTop > 0) {
                moveUp = moveUp - 10;
                objectMove.style.top = moveUp + "px";                    
            }
            //Move Down
            else if(event.keyCode == 40 && object.offsetTop < 630) {
                moveUp = moveUp + 10;
                objectMove.style.top = moveUp + "px";                    
            }
    });



let score = 0;


             var interval = setInterval(function(){
                score++;
                document.getElementById("score").innerHTML = score;  
            }, 1000);    

function stop(){
    clearInterval(interval);
}


    setInterval(function(){
        setInterval(function(){

            var ow = object.offsetWidth;
            var oh = object.offsetHeight;
            var ot = object.offsetTop;
            var ol = object.offsetLeft;
            var o2w = object2.offsetWidth;
            var o2h = object2.offsetHeight;
            var o2t = object2.offsetTop;
            var o2l = object2.offsetLeft;

            if ((ol + ow) > (o2l) &&
            (ol) < (o2w + o2l) &&
            (ot) < (o2t + o2h) &&
            (ot+ oh) > (o2t)){
                object.remove();
                stop();

                document.getElementById("scorecard").style.left = '50%';
                document.getElementById("scorecard").style.top = '50%';
                document.getElementById("scorecard").style.transform = 'translate(-50%,-50%)';
                document.getElementById("start").style.visibility = 'visible';
            }


        }, 1);



    var object2 = document.createElement("div");
    object2.style.position = "absolute";
    object2.style.width = "50px";
    object2.style.height = "50px";
    object2.style.background = "url('https://www.free-emoticons.com/files/objects-emoticons/12383.png')";
    object2.style.backgroundSize = "70px 70px";
    object2.style.backgroundPosition = "center";
    object2.style.animation = "slide linear 2s";
    object2.style.left = "2000px";

    var number = Math.floor((Math.random() * 630) + 1);
    object2.style.top = number + "px";

    document.body.appendChild(object2);
    
        
    
},500);


});

function refreshPage(){
    window.location.reload();
}
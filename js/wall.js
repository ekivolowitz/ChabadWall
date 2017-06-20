
function main(){
    var canvas = document.getElementById('myCanvas');
    // var canvas = this.canvas;
    var c = canvas.getContext('2d');
    var base_image = new Image();
    base_image.src = 'photos/wall.jpeg';
    base_image.onload = function(){
        c.drawImage(base_image, 0,0);
    }
    canvas.addEventListener('mousemove', function(e) { drawBorder(e);}, false);
    canvas.addEventListener("click", function(e) { loop(e);}, false);
   
}

function drawBorder(e){
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext("2d");
    var currX = e.offsetX;
    var currY = e.offsetY;
    context.rect(e.offsetX, e.offsetY, 20, 20);
    context.stroke();
    context.clearRect(e.offsetX, e.offsetY, 20, 20);

}


function loop(e){
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext("2d");
    var text = document.getElementById('name').value;
    context.font =  "30px Arial";
    context.fillText(text, e.offsetX, e.offsetY);
}


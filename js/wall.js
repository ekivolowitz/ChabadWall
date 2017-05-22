
function main()
{
    var canvas = document.getElementById('myCanvas');
    var c = canvas.getContext('2d');
    var base_image = new Image();
    base_image.src = 'photos/wall.jpeg';
    base_image.onload = function(){
        c.drawImage(base_image, 0,0);
    }
    // c.drawImage("photos/wall.jpeg", 0,0);
    loop();
}


function draw()
{
    var userInput = document.getElementById('name').value;
    
}

function loop(){
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext("2d");
    canvas.addEventListener('click', function(e)
    {
        var radius = 70;
        context.beginPath();
        context.arc(e.offsetX, e.offsetY, 20, 0, 2 * Math.PI, false);
        context.fillStyle = 'green';
        context.fill();
        context.lineWidth = 5;
        context.strokeStyle = '#003300';
        context.stroke();
    });
}

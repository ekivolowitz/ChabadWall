
function main()
{
    var canvas = document.getElementById('myCanvas');
    var c = canvas.getContext('2d');
    var base_image = new Image();
    base_image.src = 'photos/wall.jpeg';
    base_image.onload = function(){
        c.drawImage(base_image, 0,0);
    }
    c.drawImage("photos/wall.jpeg", 0,0);
}


function draw()
{
    var userInput = document.getElementById('name').value;
    
}

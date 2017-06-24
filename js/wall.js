
function main(){
    var canvas = document.getElementById('myCanvas');
    // var canvas = this.canvas;
    var c = canvas.getContext('2d'); 
    var square = {
    	x : canvas.width / 2,
    	y : canvas.height / 2,
    	width : 20,
    	height : 20
    };
    canvas.addEventListener('mousemove', function(e) {move(e, square)}, false);
}

function redraw(square){
	var canvas = document.getElementById('myCanvas');
    var c = canvas.getContext('2d');
	c.beginPath();
	c.clearRect(0, 0, canvas.width, canvas.height);
	c.strokeStyle = "rgba(0,255,0,255)";
	c.stroke();
	c.rect(square.x, square.y, square.width, square.height);
	c.stroke();
	c.closePath();
}

function move(e, square){
	square.x = e.clientX - square.width;
	square.y = e.clientY - square.height;
	redraw(square);
}



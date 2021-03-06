function changeFont() {
    let select = document.getElementById("font-sel");
    select.style.fontFamily = select.options[select.selectedIndex].text;
}
function main() {
    let fonts = ["Montez", "Lobster", "Josefin Sans", "Shadows Into Light", "Pacifico", "Amatic SC", "Orbitron", "Rokkitt", "Righteous", "Dancing Script", "Bangers", "Chewy", "Sigmar One", "Architects Daughter", "Abril Fatface", "Covered By Your Grace", "Kaushan Script", "Gloria Hallelujah", "Satisfy", "Lobster Two", "Comfortaa", "Cinzel", "Courgette"];
    let select = document.getElementById("font-sel");
    console.log(select);
    for (let a = 0; a < fonts.length; a++) {
        let opt = document.createElement('option');
        opt.value = opt.innerHTML = fonts[a];
        opt.style.fontFamily = fonts[a];
        select.add(opt);
    }
    select.style.fontFamily = select.options[select.selectedIndex].text;

    var canvas = document.getElementById('myCanvas');
    var c = canvas.getContext('2d'); 
    var latest; // defined in drawName
    var rotate = 0;
	var scrolledAmount = 0;
    var square = {
    	x : canvas.width / 2,
    	y : canvas.height / 2,
    	width : 218,
    	height : 20,
    };
    canvas.addEventListener('mousemove', function(e) {move(e, square)}, false);
    canvas.addEventListener("click", function(e) { drawName(e);}, false);
	window.addEventListener('scroll', function(e) {
		scrolledAmount = window.scrollY;
	;}, false);
    // Begin helper functions. 

    /**
     *	Function renders the square around the cursor, as well as the
     *	latest text entry.
     *	@param square the latest square to draw.
     */
	var redraw = function(e, square){
		// c.resetTransform();
		c.clearRect(0, 0, canvas.width, canvas.height);
		if(latest != undefined){
			c.fillText(latest.t, latest.x, latest.y);
		}
		c.beginPath();
		c.strokeStyle = "rgba(0,255,0,255)";
		c.rect(square.x, square.y, square.width, square.height);
		c.stroke();
		c.closePath();
	}

	/**
	 *	Every mouse movement triggers this and updates the square object and
	 *	calls the function to update the screen.
	 *	@param e - mouse event.
	 */
	var move = function(e){
		square.x = e.clientX - 8;
		square.y = e.clientY - square.height * 1.5 + scrolledAmount;
		redraw(e, square);
	}

	/**
	 *	This function will draw a name on clickdown event. Updates latest to be this click.
	 *	That is how only one name stays on the screen. 
	 *	@param e - mouse event.
	 */
	var drawName = function(e){
		c.clearRect(0, 0, canvas.width, canvas.height);
		var text = document.getElementById('name').value;
        //c.font = "30px " + select.accessKey;
        let font = "30px " + select.options[select.selectedIndex].text;
        c.font = font;
        console.log(font);
	 	latest = {
	 		x : e.offsetX,
	 		y : e.offsetY,
	 		t : text
	 	}
	 	c.fillText(latest.t, latest.x, latest.y);
	}
}


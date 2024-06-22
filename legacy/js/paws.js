function randomNumber(min, max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function paw1() {
	<!-- pawData -->
	var pawElementID = "paw";
	var pawDivID = "#paw";
	<!-- End pawData -->
	document.getElementById(pawElementID).style.visibility= "visible";
	document.getElementById(pawElementID).style.left= randomNumber(5,95)+"%";
	document.getElementById(pawElementID).style.top= randomNumber(5,95)+"%";
	<!-- transform paw -->
	var transfRot = randomNumber(0,110);
	var transfScale= randomNumber(2,10)/10;
	transfRot *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
	document.getElementById(pawElementID).style.webkitTransform = ("rotate("+transfRot+"deg) scale("+transfScale+")");
	document.getElementById(pawElementID).style.MozTransform = ("rotate("+transfRot+"deg) scale("+transfScale+")");
	document.getElementById(pawElementID).style.msTransform = ("rotate("+transfRot+"deg) scale("+transfScale+")");
	document.getElementById(pawElementID).style.OTransform = ("rotate("+transfRot+"deg) scale("+transfScale+")");
	document.getElementById(pawElementID).style.transform = ("rotate("+transfRot+"deg) scale("+transfScale+")");
	<!--fadein fadeout paw -->
	$(pawDivID).fadeIn(2000).delay(Math.floor((Math.random() * 16000) + 1)).fadeOut(2000, function() {
		setTimeout("paw1()", Math.floor((Math.random() * 8000) + 1));
	});   
}

function paw2() {
	<!-- pawData -->
	var pawElementID = "paw2";
	var pawDivID = "#paw2";
	<!-- End pawData -->
	document.getElementById(pawElementID).style.visibility= "visible";
	document.getElementById(pawElementID).style.left= randomNumber(5,95)+"%";
	document.getElementById(pawElementID).style.top= randomNumber(5,95)+"%";
	<!-- transform paw -->
	var transfRot = randomNumber(0,110);
	var transfScale= randomNumber(2,10)/10;
	transfRot *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
	document.getElementById(pawElementID).style.webkitTransform = ("rotate("+transfRot+"deg) scale("+transfScale+")");
	document.getElementById(pawElementID).style.MozTransform = ("rotate("+transfRot+"deg) scale("+transfScale+")");
	document.getElementById(pawElementID).style.msTransform = ("rotate("+transfRot+"deg) scale("+transfScale+")");
	document.getElementById(pawElementID).style.OTransform = ("rotate("+transfRot+"deg) scale("+transfScale+")");
	document.getElementById(pawElementID).style.transform = ("rotate("+transfRot+"deg) scale("+transfScale+")");
	<!--fadein fadeout paw -->
	$(pawDivID).fadeIn(2000).delay(Math.floor((Math.random() * 11000) + 1)).fadeOut(2000, function() {
		setTimeout("paw2()", Math.floor((Math.random() * 12000) + 1));
	});   
}

$(document).ready(function() { 
	paw1();
	paw2();
});
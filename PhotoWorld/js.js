
//create input proprietate
//-------------input & create------------------

window.onload=myFunction;
function myFunction() {

    document.getElementById("bifat").required = true;
}
function Buna(){
	var x=document.getElementById("fname").value;
	if(document.getElementById("bifat").checked == true)
		alert("Multumim "+x);
	else 
	{
		var para = document.createElement("P");
		var t = document.createTextNode("Hei, e nevoie sa bifezi si asta, sa stim ca esti de acord ca ideea ta sa fie postata ");
		para.appendChild(t);
		document.getElementById("myDIV").appendChild(para);
	}
}
// -------------------------slideShow----------------------------------------

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");

	for(i=0; i < slides.length; i++)
	  slides[i]={numar:i}				//----------------------------proprietate? 

	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) {slideIndex = 1}    
	if (n < 1) {slideIndex = slides.length} ;
	for (i = 0; i < slides.length; i++) {
	  slides[i].style.display = "none";  
	}
	for (i = 0; i < dots.length; i++) {
	  dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";  
	dots[slideIndex-1].className += " active";
}

//-----------------culori input---------------------------

function up()
{
	var x=document.getElementById("fname");
	x.value=x.value.toUpperCase();
}
function focusf() {

    document.getElementById("fname").style.background = "#4CAF50";
}

function blurf() {

    document.getElementById("fname").style.background = "white";
}

//------------coordonate-------------

function showCoords(event) {
    var x = event.pageX;
    var y = event.pageY;
    var coords = "X coords: " + x + ", Y coords: " + y;
    document.getElementById("demo").innerHTML = coords;
}

//---------button alert-----------------

function Hello() {

    alert('Hello');

}
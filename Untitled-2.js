
window.onload=rotate;
function rotate(){
	"use strict";
	var randomNum=Math.floor(Math.random()*3);
	document.getElementById("pic").src=randomNum+".jpg"
	setTimeout(rotate,1000);}// JavaScript Document
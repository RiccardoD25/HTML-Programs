// JavaScript Document
var is_showing=false;
function show_hide(){
	//alert("click");
	if (is_showing==false){
		document.getElementById("main_nav").style.top="100px";
		document.getElementById("menu_icon").style.transform="rotate(-90deg)";
		is_showing=true;
	}else{
	document.getElementById("main_nav").style.top="-200px";
		document.getElementById("menu_icon").style.transform="rotate(0deg)";
		is_showing=false;
		
	}
	
}


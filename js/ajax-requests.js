var ajaxRequest = new XMLHttpRequest();
var btnSubmit = document.getElementById("btnSubmit");
var successBanner = document.querySelectorAll('.success');

ajaxRequest.onreadystatechange = function(){

	if(ajaxRequest.readyState === 4){
		var banner = document.getElementById("banner");
		banner.innerHTML = ajaxRequest.responseText;
	}
};

ajaxRequest.open("Get", "success.html");

function loadBanner(){
	ajaxRequest.send();
}

var ajaxRequest = new XMLHttpRequest();
var btnSubmit = document.querySelectorAll(".btnSubmit");
var successBanner = document.querySelectorAll('.success');

ajaxRequest.onreadystatechange = function(){

	if(ajaxRequest.readyState === 4 && ajaxRequest.status === 200){
		var banner = document.getElementById("banner");
		banner.innerHTML = ajaxRequest.responseText;
	}else if(ajaxRequest.readyState === 404){
		alert("File is not found");
	}
};

ajaxRequest.open("Get", "success.html", true);

function loadBanner(){
	ajaxRequest.send();
}


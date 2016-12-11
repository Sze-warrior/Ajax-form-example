var ajaxRequest = new XMLHttpRequest();
var btnSubmit = document.querySelectorAll(".btnSubmit");
var successBanner = document.querySelectorAll('.success');
var banner = document.getElementById("banner");

function loadSuccess(){

	ajaxRequest.onreadystatechange = function(){

		if(ajaxRequest.readyState === 4 && ajaxRequest.status === 200){
			banner.innerHTML = ajaxRequest.responseText;
		}else if(ajaxRequest.readyState === 404){
			banner.innerHTML = "hmm there was an error...";
		}
	}

	ajaxRequest.open("Get", "success.html", true);
	ajaxRequest.send();
};


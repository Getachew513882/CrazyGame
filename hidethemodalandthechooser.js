function hidethemodal() {
	//hide the  modal window 
	document.getElementById("modal").style.transform = "scaleX(0)";
	window.location.href="index.html";
}

function opendthemodal() {
	//opens the modal window
	document.getElementById("modal").style.transform = "scaleX(1)";
}

function hidethechooser(){
	document.getElementById('chooser').style.transform = "scaleX(0)";
}

function hidethetoastmessage()
{
	document.getElementById("toastmessage").style.transform = "scaleX(0)";
}
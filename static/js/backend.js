function setTopic(){
	var topic = document.getElementByName("topic")

	var selectedTopic;
	for (var i =0; i < 6; i++){
		if(topic[i].checked)
			selectedTopic=topic[i].value;

	}
	var specific = document.getElementById("specific")
	var req = new XMLHttpRequest();
	req.onreadystatechange = function(){
		if(req.readyState == 4 && req.status == 200){
			var text = req.resonseText;
			console.log(text)
			document.getElementById("specific").innerHTML = "Failed";
		}
	}
	var str = "topic="+selectedTopic+"&specific="specific;
	specific.innerHTML = "Sent";
	req.open("GET","localhost:4000/static/php/database.php?"+str, true);
	req.send();
}



function success_callback(responseText) {
    console.log(responseText)
}

function error_callback(responseText) {
    console.log(responseText)
}

function request_get (url,success_callback,error_callback) {
	if (window.XMLHttpRequest) {
		var req = new XMLHttpRequest();
	}else {
		var req = new ActiveXObject('Microsoft.XMLHTTP');
	}	
	req.open('GET',url);
	req.send();
	req.onreadystatechange = function () {
		if (req.readyState == 4 && req.status == 200) {
			if (success_callback) {
				success_callback(req.responseText);
			}
		}else if (req.readyState == 4 && req.status != 200){
			if (error_callback) {
				error_callback(req.responseText);
			}
		}
	} 
}

var myurl = 'http://114.215.104.68:89/sitemanage/records/see.aspx?id=1277699&URLSZF=http%3a%2f%2f114.215.104.68%3a89%2fsitemanage%2frecords%2fList.aspx%3f'
request_get(myurl,success_callback,error_callback)
	function iframe(){
		editor.document.designMode = 'on';
	}
		
	function bold(){
		editor.document.execCommand('bold', false, null);
	}

	function italic(){
		editor.document.execCommand('italic', false, null);
	}

	function underline(){
		editor.document.execCommand('underline', false, null);
	}

	function fontsize(){
		var size = prompt("Enter a size (1-5)", "");
		editor.document.execCommand('fontsize', false, size);
	}

	function fontcolor(){
		var color = prompt("Enter a hexadecimal code or name of color", "");
		editor.document.execCommand('forecolor', false, color);
	}

	function highlight(){
		editor.document.execCommand('backcolor', false, "yellow");
	}

	let it = 0;
	document.addEventListener("DOMContentLoaded", ready);

	function addcomment(string){
		let ko1 = document.createElement("p");
		ko1.innerHTML = string;
		document.getElementById("da").appendChild(ko1);
	}

	function ready(){
		it = getCookie("commetIterator");
		if(it == undefined)
			it = 0;
		for(let i = 0; i < it; i++)
			addcomment(getCookie("comment" + i));
	};

	function formsubmit(){
		document.getElementById("textarea").value = window.frames['editor'].document.body.innerHTML;
		setCookie("comment" + it++, document.getElementById("textarea").value);
		setCookie("commetIterator", it);
		addcomment(document.getElementById("textarea").value);
		document.getElementById("editor").contentDocument = "";
		return false;
	}

	function getCookie(name) {
	  var matches = document.cookie.match(new RegExp(
		"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
	  return matches ? decodeURIComponent(matches[1]) : undefined;
	}

	function setCookie(name, value, options) {
	  options = options || {};

	  var expires = options.expires;

	  if (typeof expires == "number" && expires) {
		var d = new Date();
		d.setTime(d.getTime() + expires * 1000);
		expires = options.expires = d;
	  }
	  if (expires && expires.toUTCString) {
		options.expires = expires.toUTCString();
	  }

	  value = encodeURIComponent(value);

	  var updatedCookie = name + "=" + value;

	  for (var propName in options) {
		updatedCookie += "; " + propName;
		var propValue = options[propName];
			if (propValue !== true) {
			  updatedCookie += "=" + propValue;
			}
		}

	  document.cookie = updatedCookie;
	}

var text = 'artem';

function Send(text){
	var req = new XMLHttpRequest();
	alert("fafsggg");
	req.open("POST", 'text.php', true);
	req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	req.send("param="+ text);	
}
function get(url) {								
  return new Promise(function(succeed, fail) {
	var request = new XMLHttpRequest();
	request.open("GET", url,true);
	request.addEventListener("load", function() {
	  if (request.status < 400)
		succeed(sm(request.responseText));
	  else
		fail(new Error("Request failed: " + request.statusText));
	});
	request.addEventListener("error", function() {
	  fail(new Error("Network error"));
	});
	request.send();
  });
}
function sm(val){
			values = [];
			values.push(val);
			display();
}
	

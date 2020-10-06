var titleAlert = "It Pops!!!";
var closeModal = "Ok";

if(document.getElementById) {
	window.alert = function(txt) {
		createCustomAlert(txt);
	}
}

//Function To Create Custom Alert
function createCustomAlert(txt) {
	doc = document;

	if(doc.getElementById("modalContainer")) return;

  //Create Div For Modal Container Body
	modalObject = doc.getElementsByTagName("body")[0].appendChild(doc.createElement("div"));
	modalObject.id = "modalContainer";
	modalObject.style.height = doc.documentElement.scrollHeight + "px";
  
   //Create Div For Alert Box Container Body
	alertObj = modalObject.appendChild(doc.createElement("div"));
	alertObj.id = "alertBox";
	if(doc.all) alertObj.style.top = document.documentElement.scrollTop + "px";
	alertObj.style.left = (doc.documentElement.scrollWidth - alertObj.offsetWidth)/2 + "px";
	alertObj.style.visiblity="visible";

   //Create Element For Title Alert
	h1 = alertObj.appendChild(doc.createElement("h1"));
  h1.appendChild(doc.createTextNode(titleAlert));
  
   //Create Tag For Alert Body Content
  	msg = alertObj.appendChild(doc.createElement("p"));
  	msg.appendChild(doc.createTextNode(txt));
  	msg.innerHTML = txt;

     //Create Tag To Close Modal Button
	btn = alertObj.appendChild(doc.createElement("a"));
	btn.id = "closeBtn";
	btn.appendChild(doc.createTextNode(closeModal));
	btn.href = "#";
	btn.focus();
	btn.onclick = function() { removeCustomAlert();return false; }

	alertObj.style.display = "block";
	
}

  //Function To Remove Custom Alert
function removeCustomAlert() {
	document.getElementsByTagName("body")[0].removeChild(document.getElementById("modalContainer"));
}

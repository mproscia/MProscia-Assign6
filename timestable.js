var num = parseInt(document.getElementById("num")); 
var table = document.createElement("table"); 

var createTable = function(x) { 
	for(var i = 0; i<=10; i++) { 
			var tr = document.createElement("tr"); 
			var td1 = document.createElement("td"); 
			var text1 = document.createTextNode(i);  
			td1.appendChild(text1); 
			tr.appendChild(td1);

			var td2 = document.createElement("td"); 
			var text2 = document.createTextNode("X"); 
			td2.appendChild(text2);
			tr.appendChild(td2);
 
			var td3 = document.createElement("td"); 
			var text3 = document.createTextNode(x); 
			td3.appendChild(text3); 
			tr.appendChild(td3);

			var td4 = document.createElement("td"); 
			var text4 = document.createTextNode("="); 
			td4.appendChild(text4); 
			tr.appendChild(td4);

			var td5 = document.createElement("td"); 
			var text5 = document.createTextNode(i = x); 
			td5.appendChild(text5); 
			tr.appendChild(td5); 
			
			table.appendChild(tr); 
	} 
	return table;
}

var button = document.getElementById('submit'); 
button.onclick = document.body.appendChild(createTable(num))

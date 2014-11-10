var start = function() { 
	var num = parseInt(document.getElementById("num").value); 	
	var table = document.createElement("table"); 
	var table1 = createTable(num); 
	document.body.appendChild(table1);
} 

var createTable = function(x) { 
	for(var i = 0; i<=10; i++) { 
		var tr = document.createElement("tr"); 
		var td = document.createElement("td"); 
		var text = document.createTextNode(i + " X " + x + " = " + i *x); 
		td.appendChild(text); 
		tr.appendChild(td); 
		table.appendChild(tr); 
	} 
	return table;
}

var button = document.getElementById('submit'); 
button.onclick = start

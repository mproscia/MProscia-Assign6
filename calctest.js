var triangular = function(n){
	var x = 0;
	for (var i = 1; i<= n; i++) { 
		x = x + i;
	} 
	return x; 
} 


var getNum = function(){
	var num = parsInt(document.getElementById(‘posNum’));
	var answer = triangular(num);
	var output = document.getElementById(‘submit’);
	output.innerHtml = answer
}



var button = document.getElementById(‘submit1’);

button.onclick = getNum;

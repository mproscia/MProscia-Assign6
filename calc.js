var triangular = function(n){
	var x = 0;
	for (var i = 1; i<= n; i++) { 
		x = x + i;
	} 
	return x; 
} 

var fibonacci = function(n) {
	var f1 = 1;
	var f2 = 1;
	var f3 = 0;
	if (n < 3) {
		return 1;
	} else { 
		for (var i = 3; i <= n; i++) { 
			f3 = f1 + f2; 
			f1 = f2; 
			f2 = f3; 
		} 
	} 
	return f3; 
} 

var getNumT = function(){
	var num = parseInt(document.getElementById(‘posNum’));
	var answer = triangular(num);
	var output = document.getElementById(‘triNum’);
	output.innerHtml = answer + “is the “ + num + “ triangular number.”;
}

var getNumF = function(){
	var num = parseInt(document.getElementById(‘wholeNum’));
	var answer = fibonacci(num);
	var output = document.getElementById(‘fibNum’);
	output.innerHtml = answer + “is the “ + num + “ triangular number.”;
}


var tButton = document.getElementById(‘submit1’);
var fButton = document.getElementById(‘submit2’);

tButton.onclick = getNumT;
fButton.onclick = getNumF;

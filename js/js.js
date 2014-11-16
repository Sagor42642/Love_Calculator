function trigger() {
	var first = document.getElementById('first').value;
	var second = document.getElementById('second').value;
	
	first= first.toLowerCase();
	second= second.toLowerCase();
	
	first= asciier(first)+295;
	second= asciier(second);
	
	for (var result= (first*1+second*1)/2; result >=100; result/=10) {}
	
	document.getElementById('result').innerHTML= (result=Math.floor(result));
	}

function asciier(string) {
	var ascii_value=0;	
	for (var i = 0; i < string.length; i++) {
  ascii_value += string.charCodeAt(i);
		}
	return ascii_value;	
	}
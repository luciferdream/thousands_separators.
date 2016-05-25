'use strict';

function thousands_separators(num) {
	var temp,len;
	len = num - Math.floor(num);
	if(num < 1000) return ""+num+"";
  	if(num >= 1000 && num < 1000000){
		temp = num / 1000;
		temp = Math.floor(temp);
		var temp2 = ""+num+"";
		var temp3 = "";
		if(len == 0)
		temp2 = temp2.substring(temp2.length-3,temp2.length);
		if(len > 0){
		var ll = String.valueOf(ll);
		temp3 = temp2;
		temp3 = temp3.substring(temp3.indexOf(".",3),temp3.indexOf(".",0)-3);
		temp2 = temp2.substring(temp2.indexOf(".",0),temp2.length);
		}
		return ""+temp + ','+temp3+ temp2;
	}
	if(num >= 1000000 && num < 1000000000){
		temp = num / 1000000;
		temp = Math.floor(temp);
		var temp2 = ""+num+"";
		temp2 = temp2.substring(temp2.length-6,temp2.length-3);
		
		var temp3 = ""+num+"";
		var temp3 = temp3.substring(temp3.length-3,temp3.length);
		return ""+temp + ',' + temp2 + ',' + temp3+"";
	}
}

module.exports = thousands_separators;

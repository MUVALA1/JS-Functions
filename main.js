 var guessGame=(range,times)=>{
 var x=Math.floor(Math.random() * range) + 1;
 var y=x%2
 if(y===0){
 	alert("number is even")
 }else{
 		alert("number is odd")
 }
for(r=1;r<=times;r++){
	  let z=prompt("Please place a number");
	if(z>x){
		alert("number is higher,make another guess");
	}
	 if(z<x){
		alert("number is lower,make another guess");
	}
	if(z==x){
		alert("you win");
		break;
	}
	if (r==times){
	  alert("you lose");
	}	
}}
guessGame(100,10);



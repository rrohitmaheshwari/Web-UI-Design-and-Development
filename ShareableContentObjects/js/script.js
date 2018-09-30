	
function login(){
	if(document.getElementById('username').value=="" ||document.getElementById('password').value==""){
		console.log('inside login() if');
		document.getElementById("message").style.display = "block";		
	}
	else{
		window.location.href = "q1.html";
	}
}



function q1Next(){
	sessionStorage.removeItem('mathsCorrect');
	sessionStorage.removeItem('mathsNoAnswer');
	if(document.getElementById('4').checked){
		sessionStorage.setItem('mathsCorrect', '1');
  		console.log('correct answer');
  	}
  	else if(document.getElementById('3').checked || document.getElementById('2').checked
  		|| document.getElementById('1').checked) {
  	}
  	else{
		sessionStorage.setItem('mathsNoAnswer', '1');
  		console.log('no answer');
  	}
	window.location.href = "q2.html";	  	
}

function q1Reset(){
	sessionStorage.removeItem('mathsCorrect');
	sessionStorage.removeItem('mathsNoAnswer');
	document.getElementById('4').checked=false;
	document.getElementById('3').checked=false;
	document.getElementById('2').checked=false;
	document.getElementById('1').checked=false;
}

function q2Next(){

	if(document.getElementById('5').checked) {
  		if(sessionStorage.getItem('mathsCorrect') != null){
			sessionStorage.setItem('mathsCorrect', '2');
  		}
  		else 	sessionStorage.setItem('mathsCorrect', '1');
  	}
  	else if(document.getElementById('6').checked || document.getElementById('7').checked
  		|| document.getElementById('8').checked) {
  	}
  	else{
  		if(sessionStorage.getItem('mathsNoAnswer') != null){
			sessionStorage.setItem('mathsNoAnswer', '2');
  		}
  		else sessionStorage.setItem('mathsNoAnswer', '1');
  	}
	window.location.href = "q3.html";	  	
}

function q2Reset(){
	document.getElementById('5').checked=false;
	document.getElementById('6').checked=false;
	document.getElementById('7').checked=false;
	document.getElementById('8').checked=false;
}

function mark1(id){
	document.getElementById('price').innerHTML='$'+document.getElementById(id).value;
}

function mark2(id){
	document.getElementById('company').innerHTML=document.getElementById(id).value;
}

function q3Next(){
	sessionStorage.removeItem('englishCorrect');
	sessionStorage.removeItem('englishNoAnswer');
	if(document.getElementById('10').checked && document.getElementById('13').checked) {
  		sessionStorage.setItem('englishCorrect', '1');
  	}
  	else if( 
  		(document.getElementById('9').checked || 
  		 document.getElementById('10').checked ||
  		 document.getElementById('11').checked)
  		&& 
  		(document.getElementById('12').checked || 
  			document.getElementById('13').checked) || 
  			document.getElementById('14').checked)
  	{}
  	
  	else{
  		sessionStorage.setItem('englishNoAnswer', '1');
  	}
	window.location.href = "q4.html";	  	
}

function q3Reset(){
    document.getElementById('price').innerHTML='______';
    document.getElementById('company').innerHTML='_____________';
	sessionStorage.removeItem('englishCorrect');
	sessionStorage.removeItem('englishNoAnswer');
	document.getElementById('9').checked=false;
	document.getElementById('10').checked=false;
	document.getElementById('11').checked=false;
	document.getElementById('12').checked=false;
	document.getElementById('13').checked=false;
	document.getElementById('14').checked=false;
}

function q4Next(){
	sessionStorage.removeItem('audioCorrect');
	sessionStorage.removeItem('audioNoAnswer');
	if(document.getElementById('15').checked) {
  		sessionStorage.setItem('audioCorrect', '1');
  	}
  	else if(document.getElementById('16').checked || 
  		 document.getElementById('17').checked ||
  		 document.getElementById('18').checked)
  
    {} 	
  	else{
  		sessionStorage.setItem('audioNoAnswer', '1');
  	}
	window.location.href = "survey.html";	  	
}

function q4Reset(){
	sessionStorage.removeItem('audioCorrect');
	sessionStorage.removeItem('audioNoAnswer');
	document.getElementById('15').checked=false;
	document.getElementById('16').checked=false;
	document.getElementById('17').checked=false;
	document.getElementById('18').checked=false;
}

function surveyNext(){

	if(document.getElementById('30').value=="" ||
		document.getElementById('city').value=="" ||
		document.getElementById('rooms').value=="") {
		document.getElementById('missing').style.display="block"; 
  	}
  	else{
  		window.location.href = "result.html";
  	}
}

function surveySkip(){
	window.location.href = "result.html";
}

function findResults(){
	if(sessionStorage.getItem('mathsNoAnswer') == null){
		document.getElementById('mathsAnswered').innerHTML='Number of Questions Answered: '+2;
	}
	else if(sessionStorage.getItem('mathsNoAnswer') == "1"){
		document.getElementById('mathsAnswered').innerHTML='Number of Questions Answered: '+1;
	}
	else 	document.getElementById('mathsAnswered').innerHTML='Number of Questions Answered: '+0;


	if(sessionStorage.getItem('mathsCorrect') == null){
		document.getElementById('mathsCorrect').innerHTML='Number of Questions Correct: '+0;
		document.getElementById('mathsScore').innerHTML='Score: '+0;
	}
	else if(sessionStorage.getItem('mathsCorrect') == "1"){
		document.getElementById('mathsCorrect').innerHTML='Number of Questions Correct: '+1;
		document.getElementById('mathsScore').innerHTML='Score: '+50;
	}
	else{
		document.getElementById('mathsCorrect').innerHTML='Number of Questions Correct: '+2;
		document.getElementById('mathsScore').innerHTML='Score: '+100;
	}





	if(sessionStorage.getItem('englishNoAnswer') == null){
		document.getElementById('readingAnswered').innerHTML='Number of Questions Answered: '+1;
	}
	else 	document.getElementById('readingAnswered').innerHTML='Number of Questions Answered: '+0;


	if(sessionStorage.getItem('englishCorrect') == null){
		document.getElementById('readingCorrect').innerHTML='Number of Questions Correct: '+0;
		document.getElementById('readingScore').innerHTML='Score: '+0;
	}
	else{
		document.getElementById('readingCorrect').innerHTML='Number of Questions Correct: '+1;
		document.getElementById('readingScore').innerHTML='Score: '+100;
	}





	if(sessionStorage.getItem('audioNoAnswer') == null){
		document.getElementById('audioAnswered').innerHTML='Number of Questions Answered: '+1;
	}
	else 	document.getElementById('audioAnswered').innerHTML='Number of Questions Answered: '+0;


	if(sessionStorage.getItem('audioCorrect') == null){
		document.getElementById('audioCorrect').innerHTML='Number of Questions Correct: '+0;
		document.getElementById('audioScore').innerHTML='Score: '+0;
	}
	else{
		document.getElementById('audioCorrect').innerHTML='Number of Questions Correct: '+1;
		document.getElementById('audioScore').innerHTML='Score: '+100;
	}

}

function finish(){
	window.location.href = "index.html";
}
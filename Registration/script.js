
$(document).ready(function(){
	$("#regForm").on('submit', function (e) {
		alert('Registration Success');
		if(validatePassword())
		{}
	else{e.preventDefault();}


});
});


function PasswordPop(){
	document.getElementById('progressBar').style.background="grey";
	document.getElementById('progressBar').style.color="green";
	document.getElementById('tips').style.visibility='visible';
}


function PasswordPopReverse(){
	document.getElementById('tips').style.visibility='hidden';
}


function checkPassword(){
	document.getElementById('upper').innerHTML="1 upper-case letter";
	document.getElementById('lower').innerHTML="1 lower-case letter";
	document.getElementById('number').innerHTML="1 number";
	document.getElementById('length').innerHTML="8 or more characters";
	document.getElementById('char').innerHTML="Uses only these English characters: A-z, 0-9, @, -, _ and .";
	document.getElementById('same').innerHTML="Your password can not be the same as your user ID.";


	var password = document.getElementById('password').value;
	var verifypassword = document.getElementById('verifypassword').value;
	if(verifypassword.length>0)
	{
		validatePassword();
	}

	var upper=false, lower=false, number=false, len=false, char=false, same=false;

	for(var i=0;i<password.length;i++){
		var userid = document.getElementById('userid').value;
		var ch = password.charCodeAt(i);
		if(userid.localeCompare(password) == 0) same=true;
		else{
			if(ch>=48 && ch<=57) number=true;
			else if((ch>=97 && ch<=122)) lower=true;
			else if((ch>=65 && ch<=90 )) upper=true;
			else if((ch == 64 || ch == 45 || ch == 95 || ch == 46)){}
				else	char=true;
		}
		if(password.length >= 8 && password.length<=20) len=true;
	}
	if(same || char){
		if(same){
			document.getElementById('same').innerHTML='<span style="color:red;">&#10006;</span>&nbsp;Your password can not be the same as your user ID.';
		}	
		if(char){		
			document.getElementById('char').innerHTML='<span style="color:red;">&#10006;</span>&nbsp;Uses only these English characters: A-z, 0-9, @, -, _ and .';
		}
		document.getElementById('progressBar').value="0";
		return false;
	}
	else{
		var pass=0;
		if(upper){
			document.getElementById('upper').innerHTML='<span style="color:green;">&#10004;</span>&nbsp;1 upper-case letter';
			pass+=25;		
		}
		if(lower){
			document.getElementById('lower').innerHTML='<span style="color:green;">&#10004;</span>&nbsp;1 lower-case letter';
			pass+=25;		
		}
		if(number){
			document.getElementById('number').innerHTML='<span style="color:green;">&#10004;</span>&nbsp;1 number';
			pass+=25;		
		}		
		if(len){
			document.getElementById('length').innerHTML='<span style="color:green;">&#10004;</span>&nbsp;8 or more characters';
			pass+=25;		
		}

		document.getElementById('progressBar').value=pass;	
	}
}

function validatePassword(){
	var password = document.getElementById('password').value;
	var verifypassword = document.getElementById('verifypassword').value;

	if(password.localeCompare(verifypassword) == 0 && password != ""){
		document.getElementById('PassNoMatch').style.color="green";		
		document.getElementById('PassNoMatch').innerHTML="Password Matched.";
		document.getElementById('PassNoMatch').style.display="block";
		return true;
	}
	else{
		document.getElementById('PassNoMatch').style.color="red";		
		document.getElementById('PassNoMatch').innerHTML="Password Doesn't Match.";
		document.getElementById('PassNoMatch').style.display="block";
		return false;
	}
}


function reset(){
	location.reload();
}

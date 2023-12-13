function validation(){
    if(document.Formfill.Username.value==""){
        document.gotElementById("result").innerHTML="Enter Username*";
        return false;
    }
    else  if(document.Formfill.Username.value.length<8){
        document.gotElementById("result").innerHTML="Atleast 8 letters*";
        return false;
    }
    else  if(document.Formfill.Email.value==""){
        document.gotElementById("result").innerHTML="Enter your Email*";
        return false;
    }
    else  if(document.Formfill.Password.value==""){
        document.gotElementById("result").innerHTML="Enter your Password*";
        return false;
    }
    else  if(document.Formfill.CPassword.value.length<8){
        document.gotElementById("result").innerHTML="Password must be 8-digits*";
        return false;
    }
    else  if(document.Formfill.CPassword.value==""){
        document.gotElementById("result").innerHTML="Enter Confirm Password*";
        return false;
    }
    else  if(document.Formfill.CPassword.value !== document.Formfill.Password.value){
        document.gotElementById("result").innerHTML="Password doesn't matched*";
        return false;
    }
    else  if(document.Formfill.Password.value == document.Formfill.CPassword.value){
        popup.classList.add(".open-slide")
        return false;
    }
    
}
var popup=document.getElementById('popup');
function CloseSlide(){
    popup.classList.remove(".open-slide")
}
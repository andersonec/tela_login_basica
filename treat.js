var email = document.getElementById('email');
var password = document.getElementById('password');

email.addEventListener('focus', ()=>{
    email.style.borderColor = "#283a42";
});
email.addEventListener('blur', ()=>{
    email.style.borderColor = "#ccc";
});

password.addEventListener('focus', ()=>{
    password.style.borderColor = "#283a42";
});
password.addEventListener('blur', ()=>{
    password.style.borderColor = "#ccc";
});

function validaEmail(field){
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@") + 1, field.value.length);

    if((usuario.length >= 1) &&
    (dominio.length >= 3) &&
    (usuario.search("@") == -1) &&
    (dominio.search("@") == -1) &&
    (usuario.search(" ") == -1) &&
    (dominio.search(" ") == -1) &&
    (dominio.search(".") != -1) &&
    (dominio.indexOf(".") >= -1) &&
    (dominio.lastIndexOf(".") < dominio.length -1)){
        document.getElementById("msgemail").innerHTML="<font color='green'>OK.</font>";
        alert("Email válido.");
    }
    else{
        document.getElementById("msgemail").innerHTML="<font color='red'>NO.</font>";
        alert("Email inválido.");
    }
}
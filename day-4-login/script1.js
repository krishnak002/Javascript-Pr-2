let email = document.getElementById('email');
let password = document.getElementById('password');

let user = {
    email : "krishnakanjani2@gmail.com",
    password : "krishna123"
};

function form() {
    if(user.email == email.value){
        if(user.password === password.value){
            alert("Login Sucessfully.");
        }else{
            alert("Incorrct Password.");
        }
    }else{
        alert("User Not Found.");
        
    }
}

var hEmail =document.getElementById("email");
var iEmail =document.getElementById("inputEmail");
var hPass=document.getElementById("password");
var iPass=document.getElementById("inputPassword");
var btnLogin=document.getElementById("btnLogin");


var list =[
    {
    email:"cris@gmail.com",
    password : "pochi"
}
]


const loguearse=()=>{
   
    if(list.some(e=>iEmail.value== e.email && iPass.value ==e.password )){
        localStorage.setItem('user',iEmail.value)
        window.location="Home.html";
       
    }else{
        localStorage.setItem('user',"")
        alert("email or password invalid");
    }
}

btnLogin.addEventListener('click',loguearse);

   
    


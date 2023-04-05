var button=document.getElementById("LogIn-button");
button=document.getElementsByClassName("LogIn-button");

button.addEventListener("click",myfunction());

function myfunction(){
    console.log("hello");
}
button.addEventListener("click",function(){
    document.write("Hello");
    alert("Hello");
    var username=document.getElementById("email").value;
    var Password=document.getElementById("password").value;
    console.log(username+" "+Password);


    document.getElementById("email").innerHTML = "Hello World";
    document.getElementById("password").innerHTML = "Hello World";

    if(username=="harshvardhansonihv@gmail.com" && Password=="Soni@12345"){
        alert("Validation Successful ");
        location.href="https://mbm.ac.in/";
    }
    else{
        alert("Validation Failed");
        location.href="#";
    }
});
let form = document.getElementById("loginForm");

form.addEventListener("submit", function(event){

    event.preventDefault(); // page reload stop

    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if(user === "" || pass === ""){
        alert("Fill all fields!");
    }
    else{
        alert("Login Successful ✅");
    }

});
// document.getElementById("btn")
// .addEventListener("click",function(){
//     alert("Me is learning",)
// })

// document.getElementById("btn1")
// .addEventListener("click",function(){
//     alert("me fine in the sence")
// })

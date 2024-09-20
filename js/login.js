// console.log("Hello from login.js");
document.getElementById("login-button").addEventListener("click",function(event){
    event.preventDefault(); // Prevent automatically reload
    console.log("Login button clicked");
    const phoneNumber = document.getElementById("phone-number").value;
    const pinNumber = document.getElementById("pin-number").value;
    if(phoneNumber !=='01994494143' || pinNumber !=='1234'){
        alert("Invalid phone number or pin number");
        return;
    }
    else{
       
        console.log("Login successful");
        window.location.href = "home.html";
       
    }
})
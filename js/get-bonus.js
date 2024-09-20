console.log("Response from get bonus");
document.getElementById("get-bonus-button").addEventListener("click", function(event){
event.preventDefault();
const getBonus =document.getElementById("get-bonus").value;
if(getBonus==="NEW50"){
    showAlert("Congratulations! $50 is added to your account", 3000);
    document.getElementById("current-balance").innerText=parseFloat(document.getElementById("current-balance").innerText)+50;
    return;
}
else{
    showAlert("Invalid cupon code. Your cupon code is-NEW50", 3000);
}
})
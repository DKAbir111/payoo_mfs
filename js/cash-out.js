//Cash-out
console.log("Response From Cash Out");
document.getElementById("cash-out-button").addEventListener("click", function(event){
    event.preventDefault(); // Prevent automatically reload
    const cashOut=parseFloat(document.getElementById("cash-out").value);
    const cashOutpinNumber=document.getElementById("cash-out-pin-number").value;
    const currentBalance=parseFloat(document.getElementById("current-balance").innerText);
    if (cashOutpinNumber === "1234" && !isNaN(cashOut)) {
       const newBalance=currentBalance-cashOut;
       document.getElementById("current-balance").innerText=newBalance;
       document.getElementById("cash-out").value='';
       document.getElementById("cash-out-pin-number").value='';
    }
    
    else{
        alert("Cash out unsuccessful!");
        return;
    }
})
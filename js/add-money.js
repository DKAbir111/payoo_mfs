//Add Money
console.log("Response From Add Money");
document.getElementById("add-money-button").addEventListener("click", function(event){
    event.preventDefault(); // Prevent automatically reload


    /*const addMoney=parseFloat(document.getElementById("add-money").value);
    const pinNumber=document.getElementById("pin-number").value;
    const currentBalance=parseFloat(document.getElementById("current-balance").innerText);*/

    const addMoney= returnAmountPinCurrentBalance("add-money","pin-number","current-balance");

    if (addMoney.pin === "1234" && !isNaN(addMoney.amount)) {
       const newBalance=addMoney.currentBalance+addMoney.amount;
       document.getElementById("current-balance").innerText=newBalance;
       document.getElementById("add-money").value='';
       document.getElementById("pin-number").value='';
    }
    
    else{
        alert("Money can not be added successfully!");
        return;
    }
})



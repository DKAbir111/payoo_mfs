// custom alert
function showAlert(message, timeout) {
    // Get the alert element
    const alertElement = document.getElementById("custom-alert");
    
    // Set the message
    alertElement.innerHTML = `<p>${message}</p>`;
    
    // Show the alert by removing the 'hidden' class
    alertElement.classList.remove("hidden");
    
    // Hide the alert after the timeout
    setTimeout(function() {
        alertElement.classList.add("hidden");
    }, timeout);
}


//Features hide and show with design functionalities 
function showFeatures(id1, id2) {
    //Hide All Features
    document.getElementById("cash-out-form").classList.add("hidden");
    document.getElementById("add-money-form").classList.add("hidden");
    document.getElementById("payment-history").classList.add("hidden");
    document.getElementById("get-bonus-form").classList.add("hidden");

    //Hide all design
    document.getElementById("cash-out-features-button").classList.remove("bg-gradient-to-r", "from-cyan-500", "to-blue-500", "border-none" ,"text-white");
    document.getElementById("add-money-features-button").classList.remove("bg-gradient-to-r", "from-cyan-500", "to-blue-500", "border-none" ,"text-white");
    document.getElementById("history-view").classList.remove("bg-gradient-to-r", "from-cyan-500", "to-blue-500", "border-none" ,"text-white");
    document.getElementById("get-bonus-features-button").classList.remove("bg-gradient-to-r", "from-cyan-500", "to-blue-500", "border-none" ,"text-white");

    //Show the selected feature
    document.getElementById("history-view").classList.remove("hidden");
    document.getElementById(id1).classList.remove("hidden");

    // Add Design
    document.getElementById(id2).classList.add("bg-gradient-to-r", "from-cyan-500", "to-blue-500", "border-none" ,"text-white");

}

//Account Balance Information
function returnAmountPinCurrentBalance(id,pin,current){
    const amount=parseFloat(document.getElementById(id).value);
    const pinNumber=document.getElementById(pin).value;
    const currentBalance=parseFloat(document.getElementById(current).innerText);
    return {amount:amount,pin:pinNumber,currentBalance:currentBalance}
}


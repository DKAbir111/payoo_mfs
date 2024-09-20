console.log("Response from features");


//Cash Out feature
document.getElementById("cash-out-features-button").addEventListener("click", function(){

    showFeatures("cash-out-form","cash-out-features-button");
    /*
    document.getElementById("cash-out-form").classList.remove("hidden");
    document.getElementById("history-view").classList.remove("hidden");
    document.getElementById("add-money-form").classList.add("hidden");
    document.getElementById("payment-history").classList.add("hidden");
    document.getElementById("cash-out-features-button").classList.add("bg-gradient-to-r", "from-cyan-500", "to-blue-500", "border-none" ,"text-white");
    document.getElementById("add-money-features-button").classList.remove("bg-gradient-to-r", "from-cyan-500", "to-blue-500", "border-none" ,"text-white");
    */
    
})


//Add money feature
document.getElementById("add-money-features-button").addEventListener("click", function(){
    showFeatures("add-money-form","add-money-features-button");

   /* document.getElementById("add-money-form").classList.remove("hidden");
    document.getElementById("history-view").classList.remove("hidden");
    document.getElementById("cash-out-form").classList.add("hidden");
    document.getElementById("payment-history").classList.add("hidden");
    document.getElementById("cash-out-features-button").classList.remove("bg-gradient-to-r", "from-cyan-500", "to-blue-500", "border-none" ,"text-white");
    document.getElementById("add-money-features-button").classList.add("bg-gradient-to-r", "from-cyan-500", "to-blue-500", "border-none" ,"text-white");
    */
 })

 //history-view feature
document.getElementById("history-view").addEventListener("click", function(){
    showFeatures("payment-history","history-view");

   /*
    document.getElementById("cash-out-form").classList.add("hidden");
    document.getElementById("history-view").classList.add("hidden");
    document.getElementById("add-money-form").classList.add("hidden");
    document.getElementById("payment-history").classList.remove("hidden");
    document.getElementById("cash-out-features-button").classList.remove("bg-gradient-to-r", "from-cyan-500", "to-blue-500", "border-none" ,"text-white");
    document.getElementById("add-money-features-button").classList.remove("bg-gradient-to-r", "from-cyan-500", "to-blue-500", "border-none" ,"text-white");
    */
})



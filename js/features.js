console.log("Response from features");

//Cash Out feature
document.getElementById("cash-out-features-button").addEventListener("click", function(){
    document.getElementById("cash-out-form").classList.remove("hidden");
    document.getElementById("add-money-form").classList.add("hidden");
    document.getElementById("cash-out-features-button").classList.add("bg-gradient-to-r", "from-cyan-500", "to-blue-500", "border-none" ,"text-white");
    document.getElementById("add-money-features-button").classList.remove("bg-gradient-to-r", "from-cyan-500", "to-blue-500", "border-none" ,"text-white");
})


//Add money feature
document.getElementById("add-money-features-button").addEventListener("click", function(){
    document.getElementById("add-money-form").classList.remove("hidden");
    document.getElementById("cash-out-form").classList.add("hidden");
    document.getElementById("cash-out-features-button").classList.remove("bg-gradient-to-r", "from-cyan-500", "to-blue-500", "border-none" ,"text-white");
    document.getElementById("add-money-features-button").classList.add("bg-gradient-to-r", "from-cyan-500", "to-blue-500", "border-none" ,"text-white");
 })


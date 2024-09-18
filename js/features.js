console.log("Response from features");

//Cash Out feature
document.getElementById("cash-out-features-button").addEventListener("click", function(){
    document.getElementById("cash-out-form").classList.remove("hidden");
    document.getElementById("add-money-form").classList.add("hidden");
})


//Add money feature
document.getElementById("add-money-features-button").addEventListener("click", function(){
    document.getElementById("add-money-form").classList.remove("hidden");
    document.getElementById("cash-out-form").classList.add("hidden");
 })


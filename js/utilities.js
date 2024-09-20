//Features hide and show with design functionalities 

function showFeatures(id1, id2) {
    //Hide All Features
    document.getElementById("cash-out-form").classList.add("hidden");
    document.getElementById("add-money-form").classList.add("hidden");
    document.getElementById("payment-history").classList.add("hidden");

    //Hide all design
    document.getElementById("cash-out-features-button").classList.remove("bg-gradient-to-r", "from-cyan-500", "to-blue-500", "border-none" ,"text-white");
    document.getElementById("add-money-features-button").classList.remove("bg-gradient-to-r", "from-cyan-500", "to-blue-500", "border-none" ,"text-white");
    document.getElementById("history-view").classList.remove("bg-gradient-to-r", "from-cyan-500", "to-blue-500", "border-none" ,"text-white");

    //Show the selected feature
    document.getElementById("history-view").classList.remove("hidden");
    document.getElementById(id1).classList.remove("hidden");

    // Add Design
    document.getElementById(id2).classList.add("bg-gradient-to-r", "from-cyan-500", "to-blue-500", "border-none" ,"text-white");

}

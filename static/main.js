function toggleQuery() {
    var prompt = document.getElementById("query");
    if (prompt.placeholder === "Manager...") {
        prompt.placeholder = "Ticker...";
    } else {
        prompt.placeholder = "Manager...";
    }
}
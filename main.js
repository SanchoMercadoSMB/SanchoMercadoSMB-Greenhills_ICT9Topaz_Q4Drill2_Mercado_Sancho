function calculateHeatIndex() {

    let temp = parseFloat(document.getElementById("temp").value);
    let humidity = parseFloat(document.getElementById("humidity").value);

    let heatIndex = temp + (0.33 * humidity) - 4;

    let status = "";

    if (heatIndex <= 27) {
        status = "Cool";
    } 
    else if (heatIndex >= 28 && heatIndex <= 32) {
        status = "Warm";
    } 
    else if (heatIndex >= 33 && heatIndex <= 37) {
        status = "Hot";
    } 
    else if (heatIndex >= 38 && heatIndex <= 41) {
        status = "Very Hot";
    } 
    else {
        status = "Extreme Heat";
    }

    window.alert(
        "Heat Index: " + heatIndex.toFixed(2) + " °C\nStatus: " + status
    );
}
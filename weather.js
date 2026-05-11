// =============================================
//  Jo-ann Obewe – Weather App
//  Open-Meteo public API (no key required)
// =============================================
 
const cityText        = document.getElementById("city");
const temperatureText = document.getElementById("temperature");
const windText        = document.getElementById("wind");
const output          = document.getElementById("output");
 
function log(msg)    { output.textContent += msg + "\n"; }
function clearLog()  { output.textContent = ""; }
 
document.getElementById("btnKuopio").addEventListener("click",   () => loadWeather("Kuopio",   62.8924, 27.6770));
document.getElementById("btnHelsinki").addEventListener("click", () => loadWeather("Helsinki", 60.1699, 24.9384));
document.getElementById("btnTampere").addEventListener("click",  () => loadWeather("Tampere",  61.4981, 23.7608));
 
async function loadWeather(cityName, lat, lon) {
    clearLog();
    cityText.textContent        = "Loading…";
    temperatureText.textContent = "–";
    windText.textContent        = "–";
 
    try {
        const url =
            "https://api.open-meteo.com/v1/forecast?latitude=" + lat +
            "&longitude=" + lon +
            "&current=temperature_2m,wind_speed_10m";
 
        const response = await fetch(url);
        if (!response.ok) throw new Error("HTTP Error: " + response.status);
 
        const data        = await response.json();
        const temperature = data.current.temperature_2m;
        const wind        = data.current.wind_speed_10m;
 
        cityText.textContent        = cityName;
        temperatureText.textContent = temperature + " °C";
        windText.textContent        = wind + " km/h";
 
        log("City: "        + cityName);
        log("Temperature: " + temperature + " °C");
        log("Wind Speed: "  + wind + " km/h");
 
    } catch (error) {
        cityText.textContent = "Error";
        log("Error: " + error.message);
    }
}
 
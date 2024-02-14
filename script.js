const button = document.getElementById("search-button");
const input = document.getElementById("city-input");

const cityName = document.getElementById('city-name');
const cityTime = document.getElementById('city-time');
const cityTemp = document.getElementById('city-temp');

// API call 
async function getData(cityName){
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=cb59fe878b774cccb8255748241402&q=${cityName}&aqi=yes`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
}

// handling event listeners 
button.addEventListener("click" , async () => {
    const value = input.value;
    console.log(value);
    try {
        const result = await getData(value);
        cityName.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`;
        cityTime.innerText = result.location.localtime;
        cityTemp.innerText = `${result.current.temp_c}°C`;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
});

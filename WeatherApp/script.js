async function getWeather() {
    const city = document.getElementById("city").value.trim();
    const { Lat, Lon } = await getGeoLoc(city);

    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${Lat}&lon=${Lon}&appid=67dad901346f279941637166a62e1195`
    );




    const data = await response.json();
    console.log(data);
    const des = data.weather[0].description;
    const Icn = data.weather[0].icon;
    const temp = data.main.temp
    const hum = data.main.humidity
    const visi = data.visibility

    document.getElementById("box").innerHTML = `
    <div>
                <p>Temp : ${temp-273}C </p>
                <p>Huminiity : ${hum}%</p>
                <p>Description: ${des}</p>
                <p> visibility: ${visi}</p> 
            </div>
            <img src=" https://openweathermap.org/img/wn/${Icn}@2x.png" alt="Weather Icon">`
}


async function getGeoLoc(City) {
    console.log(City);
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${City}&limit=1&appid=67dad901346f279941637166a62e1195`);

    const data = await response.json();

    const Lat = data[0].lat;
    const Lon = data[0].lon;

    return { Lat, Lon };
}
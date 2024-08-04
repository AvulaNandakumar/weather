let cityEl = document.getElementById("city");
let searchBtnEl = document.getElementById("search");
let cityName = document.getElementById("city-name");

let temp = document.getElementById("temp");
let temp_max = document.getElementById("temp_max");
let temp_min = document.getElementById("temp_min");
let feelslike = document.getElementById("feelslike");
let humidity = document.getElementById("humidity");
let wind = document.getElementById("wind");
let result=document.getElementById("result");

document.body.removeChild(result);
searchBtnEl.addEventListener("click", async () => {


    await fetch(`/${city.value}`).then((response) => response.json()).then((data) => {

        cityName.textContent = data.name;
        temp.textContent = data.main.temp;
        temp_max.textContent=data.main.temp_max;
        temp_min.textContent=data.main.temp_min;
        feelslike.textContent=data.main.feels_like;
        humidity.textContent=data.main.humidity;
        wind.textContent=data.wind.speed;
        document.body.appendChild(result);
    })});
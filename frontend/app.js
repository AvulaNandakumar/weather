let cityEl = document.getElementById("city");
let searchBtnEl = document.getElementById("search");
let cityName = document.getElementById("city-name");

let temp = document.getElementById("temp");
let temp_max = document.getElementById("temp_max");
let temp_min = document.getElementById("temp_min");
let feelslike = document.getElementById("feelslike");
let humidity = document.getElementById("humidity");
let wind = document.getElementById("wind");
let result = document.getElementById("result");
let container = document.getElementById("container");

container.removeChild(result);

searchBtnEl.addEventListener("click", async () => {

    const response = await fetch(`/${city.value}`)
    const data = await response.json()

    cityName.textContent = data.name;
    temp.textContent = data.main.temp;
    temp_max.textContent = data.main.temp_max;
    temp_min.textContent = data.main.temp_min;
    feelslike.textContent = data.main.feels_like;
    humidity.textContent = data.main.humidity;
    wind.textContent = data.wind.speed;
    container.appendChild(result);
});


VANTA.CLOUDS({
  el: "body",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  skyColor: 0x3cc1f4,
  cloudShadowColor: 0x587d9f,
  sunColor: 0xd9ce64,
  sunGlareColor: 0xd97d24,
  sunlightColor: 0xe8c467
})

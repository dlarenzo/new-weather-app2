// FIVE DAY FORECAST

const fiveDay = `https://api.openweathermap.org/data/2.5/forecast?lat=40.5308&lon=-112.2983&appid=a6e100d4acc39477dd37c1f40f6c2361&units=imperial`;

let fiveDayCity = document.querySelector("#city");
let dayOne = document.querySelector("#data1");
let dayTwo = document.querySelector("#data2");
let dayThree = document.querySelector("#data3");
let dayFour = document.querySelector("#data4");
let dayFive = document.querySelector("#data5");

fetch(fiveDay)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    //  LOCATION
    fiveDayCity.textContent = jsObject.city.name;

    //   FIVE DAY
    dayOne.textContent = Math.floor(jsObject.list[0].main.temp);
    dayTwo.textContent = Math.floor(jsObject.list[1].main.temp);
    dayThree.textContent = Math.floor(jsObject.list[2].main.temp);
    dayFour.textContent = Math.floor(jsObject.list[3].main.temp);
    dayFive.textContent = Math.floor(jsObject.list[4].main.temp);

    //console.log(jsObject.main.temp);
  });

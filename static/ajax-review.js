// PART 1: SHOW A FORTUNE

function showFortune() {
  fetch('/fortune')
    .then(response => response.text())
    .then(result => {
      document.querySelector('#fortune-text').innerHTML = result;
    });
}

document.querySelector('#get-fortune-button').addEventListener('click', showFortune);

// PART 2: SHOW WEATHER

function showWeather(evt) {
  evt.preventDefault();
  const zipcode = document.querySelector('#zipcode-field').value;
  const url = `/weather?zipcode=${zipcode}`;
  // request weather with that URL and show the forecast in #weather-info
  fetch(url)
    .then(response => response.json())
    .then(result => {
      document.getElementById('weather-info').innerText = result.forecast;
    });
}

document.querySelector('#weather-form').addEventListener('submit', showWeather);

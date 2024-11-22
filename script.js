// Ваш API-ключ OpenWeatherMap
const API_KEY = '10deb987277ead9d171171611350dbc4';
const CITY_NAME = 'London'; // Місто за замовчуванням

// Елементи DOM
const button = document.getElementById('getWeather');
const weatherDiv = document.getElementById('weather');

// Обробник натискання кнопки
button.addEventListener('click', () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}&units=metric`;

    // Виконання запиту до API
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP помилка: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Витягнення потрібних даних
            const temperature = data.main.temp;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;

            // Відображення даних на сторінці
            weatherDiv.innerHTML = `
                <h2>Погода в місті ${CITY_NAME}</h2>
                <p><strong>Температура:</strong> ${temperature} °C</p>
                <p><strong>Вологість:</strong> ${humidity} %</p>
                <p><strong>Швидкість вітру:</strong> ${windSpeed} м/с</p>
            `;
        })
        .catch(error => {
            // Відображення помилки
            weatherDiv.innerHTML = `<p>Сталася помилка: ${error.message}</p>`;
        });
});

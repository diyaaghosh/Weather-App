const url = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = 'f00c38e0279b7bc85480c3fe775d518c';

$(document).ready(function () {
    
    $('#Searchbutton').click(function () {
        const cityName = $('#city-input').val().trim(); 
        if (cityName) {
            fetchWeather(cityName); 
        } else {
            alert('Please enter a city name.');
        }
    });

    
    fetchWeather('Pune');
});

async function fetchWeather(cityName) {
    const apiUrl = `${url}?q=${cityName}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (response.ok) {
            displayWeather(data);
        } else {
            alert('City not found. Please try again.');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function displayWeather(data) {
    $('#city-name').text(data.name);
    $('#date').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    $('#temperature').html(`${data.main.temp}°C`);
    $('#description').text(data.weather[0].description);
    $('#wind-speed').html(`Wind Speed: ${data.wind.speed} m/s`);
   
    const iconCode = data.weather[0].icon;
const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
$('#weather-icon').attr('src', iconUrl).addClass('animated-icon');

$('#weather-info').fadeIn();

}
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark_background");
    var button = document.getElementById("switch");
    if (element.classList.contains("dark_background")) {
        button.textContent = "Light Mode";
    } else {
        button.textContent = "Dark Mode";
    }
 }
 $('#music-control').click(function () {
    const music = $('#background-music')[0];
    if (music.paused) {
        music.play();
        $(this).text('Pause Music');
    } else {
        music.pause();
        $(this).text('Play Music');
    }
});
 

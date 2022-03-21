const input = document.querySelector(`input`);
const button = document.querySelector(`button`);
const cityName = document.querySelector(`.city-name`);
const warning = document.querySelector(`.warning`);
const photo = document.querySelector('.photo');
const weather = document.querySelector('.weather');
const temperature = document.querySelector(`.temperature`);
const humidity = document.querySelector(`.humidity`);


const API_LINK = 'https://api.openweathermap.org/data/2.5/weather?';
const API_KEY = '&appid=8e01a19f3bc7856ed00b8c5964b7efca';
const API_UNITS = '$units=metric';

c
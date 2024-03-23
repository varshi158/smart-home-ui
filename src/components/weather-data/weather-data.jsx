import { useEffect, useState } from "react";
import s from "./weather-data.module.css";
import { EyeDropperIcon, CloudIcon } from "@heroicons/react/24/outline";
import { SunIcon } from "@heroicons/react/24/solid";

function getOrdinalSuffix(day) {
    if (day >= 11 && day <= 13) {
        return "th";
    }
    switch (day % 10) {
        case 1:
            return "st";
        case 2:
            return "nd";
        case 3:
            return "rd";
        default:
            return "th";
    }
}

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


function WeatherData () {
    const [date, setDate] = useState(new Date());
    const[weatherData, setWeatherData] = useState(null);
    // const

    useEffect(() => {
        const updateDate = () => {
            setDate(new Date());
        };

        const timer = setInterval(updateDate, 1000 * 60);

        const cleanUp = () => {
            clearInterval(timer);
          };

          return cleanUp;
    }, []);

     // Get hours and minutes with leading zeros
     const hoursWithZero = date.getHours().toString().padStart(2, '0');
     const minutesWithZero = date.getMinutes().toString().padStart(2, '0');

    const dayOfWeek = daysOfWeek[date.getDay()];
    const dayOfMonth = date.getDate();
    const month = monthsOfYear[date.getMonth()];
    const year = date.getFullYear();
    const ordinalSuffix = getOrdinalSuffix(dayOfMonth);

    useEffect(() => {
        const getWeatherData = async (locationData) => {
            const apiKey = import.meta.env.VITE_REACT_APP_WEATHER_API_KEY;
            const response = await fetch(
                `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${locationData.coords.latitude},${locationData.coords.longitute}&aqi=no`,
                {
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                }
            );
            const data = await response.json();
            console.log("data");
            console.table(data);
            setWeatherData(data);
        };

        const coords = navigator.geolocation.getCurrentPosition(getWeatherData);
    }, []);

    return (
        <div className={s.weather_data_container}>
                  
            <div className={s.time_and_temp_icon_container}>
                <h1 className={s.widget_time}>
                    {hoursWithZero}:{minutesWithZero}
                </h1> 
                <div className={s.weather_icon_div}>
                    <SunIcon height={50} width={50} color="gold"/>
                    {/* <img className={s.weather_icon} src={weatherData.current.condition.icon} alt="" /> */}
                </div>
            </div>

            <div>
                <h4 className={s.current_date}>
                    {dayOfWeek + " " + dayOfMonth + ordinalSuffix + " " + month + " " + year}
                </h4>
            </div>

            <div className={s.temperature_container}>
                <div className={s.temp_icon_container}>
                    <EyeDropperIcon height={22} width={22}/>
                </div>
                <div className={s.temperature_info}>
                    <p className={s.temp_title}>Temperature</p>
                    <p className={s.temp_percent}>
                        {27}°C
                        {/* {!weatherData ? "Loading..." : weatherData.current.temp_c}°C */}
                    </p>
                </div>
            </div>

            <div className={s.humidity_container}>
                <div className={s.rain_icon_container}>
                    <CloudIcon height={22} width={22}/>
                </div>
                <div className={s.humidity_info}>
                    <p className={s.humidity_title}>Humidity</p>
                    <p className={s.humidity_percent}>
                        {32}%
                        {/* {!weatherData ? "Loading..." : weatherData.current.humidity}% */}
                    </p>
                </div>
            </div>

        </div>
    )
}

export default WeatherData;





import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Home.css"; // Import the CSS file
import profilePic from "../assets/profilepic.jpg";

function Home() {
  const [time, setTime] = useState(new Date());
  const [weather, setWeather] = useState({ temp: "18°C", condition: "Sunny" }); // Mocked data

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Stockholm&appid=YOUR_API_KEY&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        setWeather({
          temp: `${Math.round(data.main.temp)}°C`,
          condition: data.weather[0].main,
        });
      });

    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const formattedDate = time.toLocaleDateString([], {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="home-container">
      <motion.div
        className="home-card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img src={profilePic} alt="Your profile" className="profile-pic" />

        <h1 className="title">Welcome!</h1>

        <p className="date-text">{formattedDate}</p>

        <div className="time-text">{formattedTime}</div>

        <div className="weather-text">
          Weather: <strong>{weather.temp}</strong> and{" "}
          <strong>{weather.condition}</strong>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;

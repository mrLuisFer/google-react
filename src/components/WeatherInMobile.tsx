import React, { useEffect, useState } from "react"
import { WeatherType, Temp } from "../types"
import Weather from "./Weather"
import { useFetchApi } from "../hooks/useFetchApi"

const WeatherInMobile: React.FC = () => {
  const [weather, setWeather] = useState<WeatherType>()
  const [handleErr, setHandleErr] = useState<Boolean>(false)
  const [city] = useState("london")

  const apiKey = process.env.REACT_APP_WEATHER_API_KEY
  const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

  const urlAndKey = {
    apiKey: apiKey,
    api_url: api_url,
  }
  const data = useFetchApi(urlAndKey)

  useEffect(() => {
    let mounted = true
    if (mounted) {
      data.then((res) => setWeather(res))
    } else {
      setHandleErr(true)
      return function cleanUp() {
        mounted = false
      }
    }
  }, [])

  if (!handleErr) {
    let temp: Temp = weather?.main.temp
    let tempMin: Temp = weather?.main.temp_min
    let tempMax: Temp = weather?.main.temp_max

    const weatherName = weather?.name
    const weatherMain = weather?.weather[0].main
    const weatherDesc = weather?.weather[0].description
    const weatherTemp = (temp - 273.15).toFixed(2)
    const weatherTempMin = (tempMin - 273.15).toFixed(0)
    const weatherTempMax = (tempMax - 273.15).toFixed(0)
    const weatherRainPorcent = weather?.clouds.all

    return (
      <Weather
        weatherName={weatherName}
        weatherMain={weatherMain}
        weatherDesc={weatherDesc}
        weatherTemp={weatherTemp}
        weatherTempMin={weatherTempMin}
        weatherTempMax={weatherTempMax}
        weatherRainPorcent={weatherRainPorcent}
      />
    )
  } else {
    return (
      <div>
        <h4>some error</h4>
      </div>
    )
  }
}

export default WeatherInMobile

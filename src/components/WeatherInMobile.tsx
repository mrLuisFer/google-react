import React, { useCallback, useEffect, useState } from "react"
import { WeatherType } from "../utils/Types"

const WeatherInMobile: React.FC = () => {
  const [weather, setWeather] = useState<WeatherType>(Object)

  const apiKey = process.env.REACT_APP_WEATHER_API_KEY
  const api_url = `https://api.openweathermap.org/data/2.5/weather?q=london&appid=${apiKey}`

  const fetchingApi = useCallback(async () => {
    const res = await fetch(`${api_url}`)
    const data = await res.json()

    setWeather(data)
  }, [api_url])

  useEffect(() => {
    fetchingApi()
  }, [fetchingApi])

  console.log(weather)

  return (
    <div>
      <h3>yes</h3>
      <h4>{weather.id}</h4>
      <p>{weather.name}</p>
    </div>
  )
}

export default WeatherInMobile

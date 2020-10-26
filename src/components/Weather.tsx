import React from "react"
import { WeatherProps } from "../types"

const Weather: React.FC<WeatherProps> = ({
  weatherName,
  weatherMain,
  weatherTemp,
  weatherDesc,
  weatherTempMax,
  weatherRainPorcent,
  weatherTempMin,
}) => {
  return (
    <div className="bg-gray-100 shadow-lg mx-5 mt-5 rounded-lg flex justify-between p-4 items-center text-gray-600 hover:bg-gray-200 hover:shadow-xl justify-self-center max-w-4xl">
      <i className="fas fa-cloud text-4xl mr-2 text-gray-700 "></i>
      <div className="flex text-left text-xs content-between font-semibold leading-6">
        <div className="pr-5">
          <p>
            {weatherTemp}°C in {weatherName}
          </p>
          <p>
            {weatherMain} with {weatherDesc}
          </p>
        </div>

        <div className="pr-8">
          <p>
            {weatherTempMax}° / {weatherTempMin}°
          </p>
          <p>{weatherRainPorcent}% today</p>
        </div>
      </div>
    </div>
  )
}
export default Weather

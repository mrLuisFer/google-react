import React from "react"

interface WeatherProps {
  weatherName: string | number | any
  weatherMain: string | number | any
  weatherDesc: string | number | any
  weatherTemp: number | number | any
  weatherTempMin: number | number | any
  weatherTempMax: number | number | any
  weatherRainPorcent: number | string | any
}

const Weather: React.FC<WeatherProps> = ({
  weatherName,
  weatherMain,
  weatherTemp,
  weatherDesc,
  weatherTempMax,
  weatherRainPorcent,
  weatherTempMin,
}) => (
  <div className="bg-gray-100 shadow-lg mx-5 mt-5 rounded-md flex justify-between p-4 items-center text-gray-600">
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

export default Weather

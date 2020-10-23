type WeatherTypeClouds = {
  all: number
}

type WeatherTypeCoord = {
  lat: number | string
  lon: number
}

type WeatherTypeMain = {
  feels_like: number
  humidity: number
  pressure: number
  temp: number
  temp_max: number
  temp_min: number
}

type WeatherTypeSys = {
  country: string | number
  id: number
  sunrise: number
  sunset: number
  type: number
}

type WeatherTypeWeather = {
  id: number
  main: string
  description: string | number
  icon: string | number
}

type WeatherTypeWind = {
  deg: number
  speed: number
}

export interface WeatherType {
  base: string
  cod: number
  dt: number
  id: number
  name: string | number
  timezone: number
  visibility: number
  clouds: WeatherTypeClouds | object | any
  coord: WeatherTypeCoord | object
  main: WeatherTypeMain | object
  sys: WeatherTypeSys
  weather: Array<WeatherTypeWeather>
  wind: WeatherTypeWind | object
}

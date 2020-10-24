// import { useCallback, useEffect } from "react"

export const useFetchApi = async (
  api_url,
  handleErr,
  setHandleErr?,
  setWeather?
) => {
  const width: number = document.body.clientWidth
  if (width <= 600 && !handleErr) {
    try {
      const res = await fetch(`${api_url}`)
      const data = await res.json()
      return data
    } catch {
      console.log("Api error")
      return true
    }
  }
}

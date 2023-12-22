import { useEffect } from 'react'
import { urlsConfig } from './urlsConfig'
export const useCoinData = (
  coinId: string,
  setCoinData: any,
  setError: any,
  isLoading: any
) => {
  useEffect(() => {
    if (!coinId) {
      return
    }
    const data = JSON.parse(localStorage.getItem(`${coinId}Data`) || 'null')
    if (data) {
      isLoading.current = false
      setCoinData(data)
      return
    }
    fetch(urlsConfig.getCoinDataUrl(coinId, 'usd', 30, 'daily', 0), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        return response.json()
      })
      .then((res) => {
        isLoading.current = false
        localStorage.setItem(`${coinId}Data`, JSON.stringify(res))
        setCoinData(res)
      })
      .catch((error) => {
        isLoading.current = false
        setError(error)
      })
  }, [coinId])
}

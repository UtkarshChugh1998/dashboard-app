const baseUrl = 'https://api.coingecko.com/api/v3/'
export const urlsConfig = {
  getCoinDataUrl: (
    coinId: string,
    currencyId: string,
    days: number,
    interval: string,
    precision: number
  ) => {
    return `${baseUrl}/coins/${coinId}/market_chart?vs_currency=${currencyId}&days=${days}&interval=${interval}&precision=${precision}`
  }
}

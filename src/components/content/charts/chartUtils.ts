const formatDate = (date: Date) => {
  const year = date.toLocaleString('default', { year: 'numeric' })
  const month = date.toLocaleString('default', { month: 'short' })
  const day = date.toLocaleString('default', { day: '2-digit' })

  // Generate yyyy-mm-dd date string
  const formattedDate = year + '-' + month + '-' + day
  return formattedDate
}
export function filterResponseData(data: any) {
  const effectiveData = data?.prices?.map((price: any[], index: number) => {
    return {
      date: formatDate(new Date(price[0])),
      price: price[1],
      market_cap: Math.round(data.market_caps[index][1] / 1000000),
      total_volume: Math.round(data.total_volumes[index][1] / 1000000)
    }
  })
  return effectiveData
}

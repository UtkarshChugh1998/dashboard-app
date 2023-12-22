import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line
} from 'recharts'

import { filterResponseData } from './chartUtils'
import { useCoinData } from '../../../hooks/useCoinData'
import { useEffect, useRef, useState } from 'react'
import { INITIAL_LINE_CHART_CONFIG } from '../../../config/cardConfig'
import { ActionButtons } from '../../common/utils/ActionButtons'
import { DropDown } from '../../common/DropDown'

export const UILineChart = (props: any) => {
  const coinOptions = props.coinOptions
  const [coinData, setCoinData] = useState<any>()
  const isLoading = useRef<boolean>(true)
  const [coinError, setError] = useState<any>()
  const [currentCoin, setCoin] = useState<any>({ label: '', value: '' })

  useCoinData(currentCoin.value || '', setCoinData, setError, isLoading)

  const storedConfig = JSON.parse(
    localStorage.getItem(`${currentCoin.value}Config`) || 'null'
  )
  const [chartConfig, setChartConfig] = useState<any>(
    storedConfig || INITIAL_LINE_CHART_CONFIG
  )

  useEffect(() => {
    setChartConfig(storedConfig || INITIAL_LINE_CHART_CONFIG)
  }, [currentCoin])

  const handleSave = () => {
    localStorage.setItem(
      `${currentCoin.value}Config`,
      JSON.stringify(chartConfig)
    )
  }

  const handleVisible = (props: any) => {
    const dataKey = props.dataKey
    const inactive = props.inactive
    setChartConfig((prev: any) => ({ ...prev, [dataKey]: !inactive }))
  }
  const effectiveData = coinData ? filterResponseData(coinData) : null
  return (
    <div className="chartContent">
      <DropDown
        options={coinOptions}
        setValue={(coinId: string) => setCoin(coinId)}
      />
      <div className="chartContainer">
        {!currentCoin.label ? (
          <h3>Select a Coin to view Data</h3>
        ) : (
          <>
            {isLoading.current ? (
              <div>Loading...</div>
            ) : (
              <>
                <LineChart
                  width={500}
                  height={300}
                  data={effectiveData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray=" 3" />
                  <XAxis dataKey="date" fontSize={10} overflow="true" />
                  <YAxis fontSize={10} type="number" />
                  <Tooltip />
                  <Legend
                    iconSize={12}
                    className="legend"
                    onClick={(props: any) => handleVisible(props)}
                  />
                  <Line
                    type="monotone"
                    dataKey="price"
                    stroke="#000"
                    name={`${currentCoin.label} Price`}
                    hide={chartConfig.price}
                  />
                  <Line
                    type="monotone"
                    dataKey="market_cap"
                    stroke="#000"
                    name={`${currentCoin.label} Market Cap`}
                    hide={chartConfig.market_cap}
                  />
                  <Line
                    type="monotone"
                    dataKey="total_volume"
                    stroke="#000"
                    name={`${currentCoin.label} Total Volume`}
                    hide={chartConfig.total_volume}
                  />
                </LineChart>
                <div>
                  <ActionButtons name="Save" onClick={handleSave} />
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  )
}

import { cardConfig } from '../../config/cardConfig'
import { CardContainer } from '../common/card/CardContainer'

export const TokenContent = (props: any) => {
  const bitCoinConfigContainer = cardConfig('bitcoinChart')
  return (
    <div>
      <CardContainer config={bitCoinConfigContainer} />
    </div>
  )
}

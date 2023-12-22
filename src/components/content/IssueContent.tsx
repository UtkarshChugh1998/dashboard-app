import { cardConfig } from '../../config/cardConfig'
import { CardContainer } from '../common/card/CardContainer'

export const IssueContent = () => {
  const instrumentalConfig = cardConfig('instrumental')
  const offChainConfig = cardConfig('offChain')
  const logConfig = cardConfig('log')
  return (
    <div className="issueContainer">
      <div className="subContainer">
        <CardContainer config={instrumentalConfig} />
        <CardContainer config={logConfig} />
      </div>
      <div className="subContainer">
        <CardContainer config={offChainConfig} />
      </div>
    </div>
  )
}

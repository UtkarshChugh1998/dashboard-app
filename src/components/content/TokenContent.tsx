import { cardConfig } from '../../config/cardConfig'
import { mockContent } from '../../config/mock'
import { Card } from '../common/card/Card'
import { CardContainer } from '../common/card/CardContainer'

export const TokenContent = (props: any) => {
  const configContainer = cardConfig('token')
  return (
    <div>
      <CardContainer config={configContainer} />
    </div>
  )
}

import { CardConfig, cardConfig } from '../../../config/cardConfig'
import { Card } from './Card'

type ICardContainerProps = {
  config: CardConfig[]
}
export const CardContainer = (props: ICardContainerProps) => {
  const config = props.config
  return (
    <div className="cardContainer">
      {config.map((cardConfig, index: number) => (
        <Card cardConfig={cardConfig} key={index} />
      ))}
    </div>
  )
}

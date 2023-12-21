import { CardConfig } from '../../../config/cardConfig'
import { getIcon } from '../../../config/iconConfig'
import { ActionButtons } from '../utils/ActionButtons'
import { CardContent } from './CardContent'
import './card.css'

type ICardProps = {
  heading: string
  content: any
  actionButtons: any
}

type ICardConfig = {
  cardConfig: CardConfig
}
export const Card = (props: ICardConfig) => {
  const { cardConfig } = props
  const { headingConfig } = cardConfig
  const { actionButtons } = headingConfig
  return (
    <div className="card">
      <div className="cardHeading">
        <div className="headingContent">
          <div className="cardIcon">{getIcon('default')}</div>
          <div>{headingConfig.heading}</div>
        </div>
        <div className="headingDetails">{headingConfig.headingDetails}</div>
        <div className="actionContent">
          {actionButtons.map((actionButton, index) => (
            <button
              className="actionButton"
              onClick={actionButton.onClick}
              key={index}
            >
              {actionButton.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

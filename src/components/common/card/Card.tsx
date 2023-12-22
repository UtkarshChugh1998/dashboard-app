import { getConfig } from '@testing-library/react'
import { CardConfig } from '../../../config/cardConfig'
import { getIcon } from '../../../config/iconConfig'
import './card.css'
import { getContent } from '../../../config/ContentConfig'

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
  const { actionButtons, icon } = headingConfig
  const contentConfig = cardConfig?.contentConfig
  const content = getContent(contentConfig?.content)
  return (
    <div className="card">
      <div className="cardHeading">
        <div className="headingContent">
          {icon && <div className="cardIcon">{getIcon(icon)}</div>}
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
      <div>{content}</div>
    </div>
  )
}

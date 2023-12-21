import { getContent } from '../../config/ContentConfig'
import { NavBarOption } from '../../config/navBarOptions'

type IContent = {
  currentOption: NavBarOption
}
export const Content = (props: any) => {
  const { currentOption } = props
  const content = getContent(currentOption?.content)
  return <div>{content}</div>
}

import { useState } from 'react'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'
import { NavBarOption, ParentHierarchy } from '../../config/navBarOptions'
import { getIcon } from '../../config/iconConfig'

type IMenuOption = {
  navContent: NavBarOption
  setSelectedOption: (val: NavBarOption) => void
  selectedOption?: NavBarOption
  parentHierarchy: ParentHierarchy
}
export const MenuOption = (props: IMenuOption) => {
  const [isOpen, setOpen] = useState<boolean>(false)
  const { navContent, setSelectedOption, selectedOption } = props
  const parentHierarchy = {
    heading: navContent.heading,
    parent: props.parentHierarchy
  }
  const handleClick = () => {
    if (navContent.options.length > 0) {
      setOpen((preValue) => !preValue)
    } else {
      setSelectedOption(navContent)
    }
  }
  const classNames = `heading ${
    selectedOption === navContent ? 'selected' : ''
  }`
  return (
    <div className="navContent">
      <div className={classNames} onClick={handleClick}>
        {navContent.icon && (
          <div className="iconItem">{getIcon(navContent.icon)}</div>
        )}
        <div className="headingItem">{navContent.heading}</div>
        {navContent.options.length > 0 && (
          <div>{isOpen ? <AiFillCaretUp /> : <AiFillCaretDown />}</div>
        )}
      </div>
      <div className={`options ${isOpen ? 'active' : ''}`}>
        {navContent.options.map((option: NavBarOption, index: number) => (
          <MenuOption
            navContent={option}
            key={`${option}-${index}`}
            setSelectedOption={props.setSelectedOption}
            parentHierarchy={parentHierarchy}
            selectedOption={selectedOption}
          />
        ))}
      </div>
    </div>
  )
}

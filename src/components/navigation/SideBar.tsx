import {
  AiOutlineBell,
  AiOutlineDollarCircle,
  AiOutlineGlobal,
  AiOutlineHome,
  AiOutlineUser
} from 'react-icons/ai'

type ISideBar = {
  sideBarItem: string
  setSideBarItem: (val: string) => void
}
const Icon = (props: any) => {
  const { handleClick, value, selected } = props
  return (
    <div
      className={`icon ${selected ? 'iconSelected' : ''}`}
      onClick={() => handleClick(props.value)}
    >
      {props.children}
    </div>
  )
}
export const SideBar = (props: ISideBar) => {
  const { sideBarItem, setSideBarItem } = props
  const handleClick = (value: string) => {
    setSideBarItem(value)
  }
  return (
    <div className="sidebarContainer">
      <div className="sideItemsTop">
        <Icon
          value="home"
          handleClick={handleClick}
          selected={sideBarItem === 'home'}
        >
          <AiOutlineHome />
        </Icon>
        <Icon
          value="global"
          handleClick={handleClick}
          selected={sideBarItem === 'global'}
        >
          <AiOutlineGlobal />
        </Icon>
        <Icon
          value="currency"
          handleClick={handleClick}
          selected={sideBarItem === 'currency'}
        >
          <AiOutlineDollarCircle />
        </Icon>
      </div>
      <div className="sideItemsBottom">
        <Icon
          value="notifications"
          handleClick={handleClick}
          selected={sideBarItem === 'notifications'}
        >
          <AiOutlineBell />
        </Icon>
        <Icon
          value="user"
          handleClick={handleClick}
          selected={sideBarItem === 'user'}
        >
          <AiOutlineUser />
        </Icon>
      </div>
    </div>
  )
}

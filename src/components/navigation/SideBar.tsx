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
  const handleClick = props.handleClick
  return (
    <div className="icon" onClick={() => handleClick(props.value)}>
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
        <Icon value="home" handleClick={handleClick}>
          <AiOutlineHome />
        </Icon>
        <Icon value="global" handleClick={handleClick}>
          <AiOutlineGlobal />
        </Icon>
        <Icon value="currency" handleClick={handleClick}>
          <AiOutlineDollarCircle />
        </Icon>
      </div>
      <div className="sideItemsBottom">
        <Icon value="notifications" handleClick={handleClick}>
          <AiOutlineBell />
        </Icon>
        <Icon value="user" handleClick={handleClick}>
          <AiOutlineUser />
        </Icon>
      </div>
    </div>
  )
}

import { useState } from 'react'
import { Content } from './content/Content'
import { NavBar } from './menu/NavBar'
import { SideBar } from './navigation/SideBar'
import { NavBarOption } from '../config/navBarOptions'

export const Home = () => {
  const [sideBarItem, setSideBarItem] = useState<string>('home')
  const [currentOption, setSelectedOption] = useState<NavBarOption>()

  return (
    <div className="homeContainer">
      <div className="sidebar">
        <SideBar setSideBarItem={setSideBarItem} sideBarItem={sideBarItem} />
      </div>
      <div className="navbar">
        <NavBar
          sideBarItem={sideBarItem}
          setSelectedOption={setSelectedOption}
          selectedOption={currentOption}
        />
      </div>
      <div className="content">
        <Content currentOption={currentOption} />
      </div>
    </div>
  )
}

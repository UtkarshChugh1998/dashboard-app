import { useEffect, useState } from 'react'
import { Content } from './content/Content'
import { NavBar } from './menu/NavBar'
import { SideBar } from './navigation/SideBar'
import { NavBarOption } from '../config/navBarOptions'
import { Header } from './content/header/Header'

export const Home = () => {
  const [sideBarItem, setSideBarItem] = useState<string>('home')
  const [currentOption, setSelectedOption] = useState<NavBarOption | null>()
  useEffect(() => {
    setSelectedOption(null)
  }, [sideBarItem])
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
        <Header />
        <Content currentOption={currentOption} />
      </div>
    </div>
  )
}

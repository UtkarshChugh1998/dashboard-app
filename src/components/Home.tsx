import { useState } from 'react'
import { Content } from './common/Content'
import { NavBar } from './menu/NavBar'
import { SideBar } from './navigation/SideBar'

export const Home = () => {
  const [sideBarItem, setSideBarItem] = useState<string>('home')
  const [navBarItem, setNavBarItem] = useState<string>('')
  return (
    <div className="homeContainer">
      <div className="sidebar">
        <SideBar setSideBarItem={setSideBarItem} sideBarItem={sideBarItem} />
      </div>
      <div className="navbar">
        <NavBar />
      </div>
      <div className="content">
        <Content />
      </div>
    </div>
  )
}

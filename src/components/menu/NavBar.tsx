import { useState } from 'react'
import {
  NavBarOption,
  ParentHierarchy,
  navBarOptions
} from '../../config/navBarOptions'
import { MenuOption } from './MenuOption'
import { OrganizationDetails } from './OrganizationDetails'
import { ServiceDetailsOption } from './ServiceDetailsOption'

export const NavBar = (props: any) => {
  const { sideBarItem, setSelectedOption, selectedOption } = props
  const optionsList = navBarOptions(sideBarItem)
  const parentHierarchy: ParentHierarchy = {
    heading: sideBarItem,
    parent: null
  }
  return (
    <div className="navbarDrawer">
      <ServiceDetailsOption />
      <OrganizationDetails />
      {optionsList.map((navContent: NavBarOption, index: number) => (
        <MenuOption
          navContent={navContent}
          key={`${sideBarItem}-${index}`}
          parentHierarchy={parentHierarchy}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      ))}
    </div>
  )
}

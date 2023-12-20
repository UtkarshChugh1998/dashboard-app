export const navBarOptions = (sideBarValue: string) => {
  return navList[sideBarValue] || navList.home
}

const navList: any = {
  home: ['Option 1', 'Option 2', 'Option 3'],
  global: ['Option 1', 'Option 2', ' Option 3'],
  currency: ['Chain', 'Environment', ' Production']
}

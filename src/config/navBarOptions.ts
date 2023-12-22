export const navBarOptions = (sideBarValue: string): NavBarOption[] => {
  return navList[sideBarValue] || navList.home
}
export type NavBarOption = {
  icon?: string
  heading: string
  options: NavBarOption[]
  content?: string
}

export type ParentHierarchy = {
  heading: string
  parent: ParentHierarchy | null
}
type NavBarList = Record<string, NavBarOption[]>
const getOptions = (headingValue: string) => {
  return [
    {
      heading: `${headingValue} Option 1`,
      options: [],
      icon: 'default',
      content: 'basic'
    },
    {
      heading: `${headingValue} Option 2`,
      options: [],
      icon: 'default',
      content: 'basic'
    },
    {
      heading: `${headingValue} Option 3`,
      options: [],
      icon: 'default',
      content: 'basic'
    }
  ]
}

const navList: NavBarList = {
  home: [
    {
      heading: 'Heading 1',
      options: getOptions('Home Heading 1')
    },
    {
      heading: 'Heading 2',
      options: getOptions('Home Heading 2')
    },
    {
      heading: 'Heading 3',
      options: getOptions('Home Heading 3')
    }
  ],
  global: [
    { heading: 'Global Heading 1', options: getOptions('GH 1') },
    { heading: 'Global Heading 2', options: getOptions('GH 2') },
    { heading: 'Global Heading 3', options: getOptions('GH 3') }
  ],
  currency: [
    { heading: 'Chain', options: getOptions('chain') },
    { heading: 'Environment', options: getOptions('Environment') },
    {
      heading: 'Production',
      options: [
        {
          heading: 'Dashboard',
          options: [],
          icon: 'dashboard',
          content: 'dashboard'
        },
        {
          heading: 'Settings',
          options: [],
          icon: 'settings',
          content: 'basic'
        },
        {
          heading: 'API Integration',
          options: [],
          icon: 'api',
          content: 'basic'
        },
        { heading: 'Tokens', options: [], icon: 'tokens', content: 'tokens' },
        {
          heading: 'Markets',
          options: [],
          icon: 'markets',
          content: 'basic'
        },
        { heading: 'Issue', options: [], icon: 'issue', content: 'issue' }
      ]
    },
    { heading: 'Teams', options: [], icon: 'teams', content: 'basic' },
    {
      heading: 'Configure',
      options: [],
      icon: 'configure',
      content: 'basic'
    },
    { heading: 'Health', options: [], icon: 'health', content: 'basic' }
  ]
}

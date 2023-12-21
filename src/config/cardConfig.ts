export const cardConfig = (card: string): CardConfig[] => {
  return [
    {
      headingConfig: {
        heading: 'Instrument Details',
        headingDetails: '',
        actionButtons: []
      }
    },
    {
      headingConfig: {
        heading: 'Contract Address',
        headingDetails: 'Address 123, Street 123, City 123, PinCode: Abc',
        actionButtons: []
      }
    },
    {
      headingConfig: {
        heading: 'Type',
        headingDetails: 'Type Example ABC',
        actionButtons: []
      }
    },
    {
      headingConfig: {
        heading: 'Status',
        headingDetails: 'Status Details',
        actionButtons: []
      }
    },
    {
      headingConfig: {
        heading: 'Supply',
        headingDetails: 'Supply Details',
        actionButtons: [
          {
            name: 'Mint',
            onClick: () => alert('Mint')
          }
        ]
      }
    }
  ]
}

export type CardConfig = {
  headingConfig: HeadingConfig
  content?: any
  footerConfig?: any
}

type HeadingConfig = {
  heading: string
  headingDetails: string
  actionButtons: ButtonConfig[]
}
type ButtonConfig = {
  name: string
  onClick: (e: any) => void
}

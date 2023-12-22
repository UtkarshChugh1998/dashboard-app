const instrumentDetailsConfig = [
  {
    headingConfig: {
      heading: 'Instrument Details',
      headingDetails: '',
      actionButtons: [],
      icon: 'instrumental'
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
const logDetailsConfig: CardConfig[] = [
  {
    headingConfig: {
      heading: 'Log',
      headingDetails: '',
      actionButtons: []
    }
  },
  {
    headingConfig: {
      heading: '',
      headingDetails: 'Log Details',
      actionButtons: [],
      icon: 'log'
    }
  },
  {
    headingConfig: {
      heading: '',
      headingDetails: 'Log Details',
      actionButtons: [],
      icon: 'log'
    }
  }
]

const offChainConfig: CardConfig[] = [
  {
    headingConfig: {
      heading: 'Off Chain',
      headingDetails: '',
      actionButtons: []
    }
  },
  {
    headingConfig: {
      heading: 'Legal',
      headingDetails: '',
      actionButtons: [],
      icon: 'legal'
    },
    contentConfig: {
      content: 'basic'
    }
  },
  {
    headingConfig: {
      heading: 'Docs',
      headingDetails: '',
      actionButtons: [],
      icon: 'docs'
    },
    contentConfig: {
      content: 'basic'
    }
  }
]

export const INITIAL_LINE_CHART_CONFIG = {
  price: false,
  market_cap: false,
  total_volume: false
}
const bitCoinChartConfig: CardConfig[] = [
  {
    headingConfig: {
      heading: 'Bitcoin Price Chart',
      headingDetails: '',
      actionButtons: []
    },
    contentConfig: {
      content: 'bitcoin'
    }
  }
]
const ethereumChartConfig: CardConfig[] = [
  {
    headingConfig: {
      heading: 'Ethereum Price Chart',
      headingDetails: '',
      actionButtons: []
    },
    contentConfig: {
      content: 'ethereum'
    }
  }
]
const polygonChartConfig: CardConfig[] = [
  {
    headingConfig: {
      heading: 'Polygon Market Value Chart',
      headingDetails: '',
      actionButtons: []
    },
    contentConfig: {
      content: 'polygon'
    }
  }
]

export const cardConfig = (card: string): CardConfig[] => {
  switch (card) {
    case 'instrumental details': {
      return instrumentDetailsConfig
    }
    case 'bitcoinChart': {
      return bitCoinChartConfig
    }
    case 'ethereumChart': {
      return ethereumChartConfig
    }
    case 'polygonChart': {
      return polygonChartConfig
    }
    case 'offChain': {
      return offChainConfig
    }
    case 'log': {
      return logDetailsConfig
    }
    default: {
      return instrumentDetailsConfig
    }
  }
}

export type CardConfig = {
  headingConfig: HeadingConfig
  contentConfig?: any
  footerConfig?: any
}

type HeadingConfig = {
  heading: string
  headingDetails: string
  actionButtons: ButtonConfig[]
  icon?: string
}
type ButtonConfig = {
  name: string
  onClick: (e: any) => void
}

import { ApiContent } from '../components/content/ApiContent'
import { BasicContent } from '../components/content/BasicContent'
import { DashboardContent } from '../components/content/DashboardContent'
import { IssueContent } from '../components/content/IssueContent'
import { TokenContent } from '../components/content/TokenContent'
import { UILineChart } from '../components/content/charts/UILineChart'

const dropDownOptions = [
  {
    label: 'BitCoin',
    value: 'bitcoin'
  },
  {
    label: 'Ethereum',
    value: 'ethereum'
  },
  {
    label: 'Polygon (MATIC)',
    value: 'matic-network'
  }
]
export const getContent = (content: string) => {
  switch (content) {
    case 'dashboard': {
      return <DashboardContent />
    }
    case 'issue': {
      return <IssueContent />
    }
    case 'tokens': {
      return <TokenContent />
    }
    case 'api': {
      return <ApiContent />
    }
    case 'bitcoin': {
      return <UILineChart coinOptions={dropDownOptions} />
    }
    case 'basic': {
      return <div className="basicContent">Basic Content</div>
    }
    default: {
      return null
    }
  }
}

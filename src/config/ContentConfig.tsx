import { ApiContent } from '../components/content/ApiContent'
import { BasicContent } from '../components/content/BasicContent'
import { DashboardContent } from '../components/content/DashboardContent'
import { TokenContent } from '../components/content/TokenContent'

export const getContent = (content: string) => {
  switch (content) {
    case 'dashboard': {
      return <DashboardContent />
    }
    case 'tokens': {
      return <TokenContent />
    }
    case 'api': {
      return <ApiContent />
    }
    default: {
      return <BasicContent />
    }
  }
}

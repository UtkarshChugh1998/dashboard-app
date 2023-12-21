import {
  AiFillStar,
  AiOutlineAppstore,
  AiOutlineChrome,
  AiOutlineCode,
  AiOutlineSafetyCertificate,
  AiOutlineSetting,
  AiOutlineStock,
  AiOutlineTeam,
  AiTwotoneSetting
} from 'react-icons/ai'

export const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'dashboard': {
      return <AiOutlineAppstore />
    }
    case 'settings': {
      return <AiOutlineSetting />
    }
    case 'api': {
      return <AiOutlineCode />
    }
    case 'tokens': {
      return <AiOutlineChrome />
    }
    case 'markets': {
      return <AiOutlineStock />
    }
    case 'issue': {
      return <AiFillStar />
    }
    case 'teams': {
      return <AiOutlineTeam />
    }
    case 'configure': {
      return <AiTwotoneSetting />
    }
    case 'health': {
      return <AiOutlineSafetyCertificate />
    }
    default: {
      return <AiOutlineChrome />
    }
  }
}

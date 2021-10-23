import MessageIcon from '@material-ui/icons/Message'
import FacebookIconOutlined from '../../../assets/FacebookIconOutlined'
import InstagramIcon from '../../../assets/InstagramIcon'
import WhatsAppIcon from '../../../assets/WhatsAppIcon'
import TwitterOutlinedIcon from '../../../assets/TwitterOutlinedIcon'
import EmailOutlinedIcon from '../../../assets/EmailOutlinedIcon'
import VisibilityOffIcon from '../../../assets/VisibilityOffIcon'
import FolderOpenIcon from '../../../assets/FolderOpenIcon'
import FolderClosedIcon from '../../../assets/FolderClosedIcon'

const getIcon = key => {
  switch (key) {
    case 'opened':
      return <FolderOpenIcon />
    case 'Facebook':
      return <FacebookIconOutlined />
    case 'Whatsapp':
      return <WhatsAppIcon />
    case 'Instagram':
      return <InstagramIcon />
    case 'Twitter':
      return <TwitterOutlinedIcon />
    case 'Email':
      return <EmailOutlinedIcon />
    case 'hidden':
      return <VisibilityOffIcon />
    case 'closed':
      return <FolderClosedIcon />
    default:
      return <MessageIcon />
  }
}

export default function getGroupedBy(obj) {
  return Object.entries(obj).map(e => ({
    key: e[0],
    value: e[1],
    icon: getIcon(e[0]),
  }))
}

import FreeBreakfastOutlinedIcon from '@material-ui/icons/FreeBreakfastOutlined'
import WcOutlinedIcon from '@material-ui/icons/WcOutlined'
import LocalHospitalOutlinedIcon from '@material-ui/icons/LocalHospitalOutlined'
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined'

import UserLogo from '../../assets/UserLogo'
import SecurityLogo from '../../assets/SecurityLogo'
import SkillsIcon from '../../assets/skillsIcon'
import AparienceIcon from '../../assets/AparienceIcon'
import MainIcon from '../../assets/MainIcon'
import DarkIcon from '../../assets/DarkIcon'
import LigthIcon from '../../assets/LigthIcon'
import Appearance from './Appearance'

export const menuItems = [
  {
    label: 'Banio',
    icon: <WcOutlinedIcon />,
    badge: '(alt + B)',
  },
  {
    label: 'Break',
    icon: <FreeBreakfastOutlinedIcon />,
    badge: '',
  },
  {
    label: 'Medico',
    icon: <LocalHospitalOutlinedIcon />,
    badge: '',
  },
  {
    label: 'Pausa',
    icon: <SmsOutlinedIcon />,
    badge: '',
  },
]

const USUARIO = 'Usuario'
const SEGURIDAD = 'Seguridad'
const APARIENCIA = 'Apariencia'
const ACCESIBILIDAD = 'Accesibilidad'

export const configMenuItems = [
  {
    label: USUARIO,
    icon: <UserLogo />,
  },
  {
    label: SEGURIDAD,
    icon: <SecurityLogo />,
  },
  {
    label: APARIENCIA,
    icon: <SkillsIcon />,
  },
  {
    label: ACCESIBILIDAD,
    icon: <AparienceIcon />,
  },
]

export const navLinks = [
  { title: 'bandeja', path: '/cases' },
  { title: 'Dashboard', path: '/dashboard' },
]

export const selectComponent = name => {
  switch (name) {
    case USUARIO:
      return <MainIcon />
    case SEGURIDAD:
      return <DarkIcon />
    case APARIENCIA:
      return <Appearance />
    case ACCESIBILIDAD:
      return <AparienceIcon />
    default:
      return <UserLogo />
  }
}

export const themeMode = [
  {
    label: 'Original',
    Icon: ({ isSelect }) => <MainIcon isSelect={isSelect} />,
    value: 'main',
  },
  {
    label: 'Dark Mode',
    Icon: ({ isSelect }) => <DarkIcon isSelect={isSelect} />,
    value: 'dark',
  },
  {
    label: 'Dark Epiron',
    Icon: ({ isSelect }) => <LigthIcon isSelect={isSelect} />,
    value: 'ligth',
  },
]

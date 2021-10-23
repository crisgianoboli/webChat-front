import AlignmentIcon from '../../assets/AlignmentIcon'
import BoldIcon from '../../assets/BoldIcon'
import ItalicIcon from '../../assets/ItalicIcon'
import TemplatesIcon from '../../assets/TemplatesIcon'
import UnderlineIcon from '../../assets/UnderlineIcon'
import UnOrderListIcon from '../../assets/UnOrderListIcon'
import FastAnswerIcon from '../../assets/FastAnswerIcon'
import FacebookIcon from '../../assets/FacebookIcon'
import TwitterIcon from '../../assets/TwitterIcon'
import InstagramIcon from '../../assets/InstagramIcon'
import EmailOutlinedIcon from '../../assets/EmailOutlinedIcon'

export const styles = [
  {
    label: 'Italica',
    style: 'ITALIC',
    icon: <ItalicIcon />,
  },
  {
    label: 'Negrita',
    style: 'BOLD',
    icon: <BoldIcon />,
  },
  {
    label: 'Subrayado',
    style: 'UNDERLINE',
    icon: <UnderlineIcon />,
  },
]

export const types = [
  { label: 'UL', style: 'unordered-list-item', icon: <UnOrderListIcon /> },
]

export const otherButtons = [
  {
    label: 'Plantillas',
    style: 'templates',
    icon: <TemplatesIcon />,
  },
  {
    label: 'Respuestas rapidas',
    style: 'fast-answer',
    icon: <FastAnswerIcon />,
  },
]

export const alignment = [
  { label: 'Izquierda', style: 'left', icon: <AlignmentIcon /> },
  { label: 'Centro', style: 'center', icon: <AlignmentIcon /> },
  { label: 'Derecha', style: 'right', icon: <AlignmentIcon /> },
]

export const channels = [
  { label: 'Facebook', Icon: FacebookIcon },
  { label: 'Facebook privado', Icon: FacebookIcon, isPrivate: true },
  { label: 'Twitter', Icon: TwitterIcon },
  { label: 'Twitter privado', Icon: TwitterIcon, isPrivate: true },
  { label: 'Instagram', Icon: InstagramIcon },
  { label: 'Instagram privado', Icon: InstagramIcon, isPrivate: true },
  { label: 'Mail', Icon: EmailOutlinedIcon },
]

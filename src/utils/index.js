/* eslint-disable sonarjs/prefer-single-boolean-return */
import moment from 'moment'
import uniqid from 'uniqid'

import client from '../client/client'

import OperatorLogo from '../assets/Operator'
import BotLogo from '../assets/BotLogo'
import UserLogo from '../assets/UserLogo'
import CaseIncomingIcon from '../assets/CaseIncomingIcon'
import CaseOutgoingIcon from '../assets/CaseOutgoingIcon'
import Msj from '../assets/Msj'
import AsessorPhoneIcon from '../assets/AsessorPhoneIcon'
import UserPhoneIcon from '../assets/UserPhoneIcon'
import FacebookIcon from '../assets/FacebookIcon'
import InstagramIcon from '../assets/InstagramIcon'
import WhatsAppIcon from '../assets/WhatsAppIcon'
import TwitterIcon from '../assets/TwitterIcon'
import EmailOutlinedIcon from '../assets/EmailOutlinedIcon'
import SearchIcon from '../assets/SearchIcon'
import InformationIcon from '../assets/InformationIcon'
import CaseIcon from '../assets/CaseIcon'
import AttachmentIcon from '../assets/AttachmentIcon'
import ObservationsIcon from '../assets/ObservationsIcon'
import RecordIcon from '../assets/RecordIcon'
import BanderaIcon from '../assets/BanderaIcon'
import ArbolIcon from '../assets/ArbolIcon'
import AdjuntoIcon from '../assets/AttachIcon'
import PhoneIcon from '../assets/PhoneIcon'
/* import ChatIcon from '../assets/Msj' */

const NullComponent = () => <div data-testid="null-Icon" />

export const selectIcon = origin => {
  const ICONS = {
    Facebook: FacebookIcon,
    Instagram: InstagramIcon,
    Whatsapp: WhatsAppIcon,
    Email: EmailOutlinedIcon,
    Mensajero: EmailOutlinedIcon,
    Twitter: TwitterIcon,
    Phone: PhoneIcon,
    Saliente: CaseOutgoingIcon,
    Entrante: CaseIncomingIcon,
    AdjuntoIcon: AdjuntoIcon,
    0: OperatorLogo,
    1: UserLogo,
    2: AsessorPhoneIcon,
    3: UserPhoneIcon,
    4: BotLogo,
    Buscar: SearchIcon,
    Usuario: UserLogo,
    Cliente: UserLogo,
    Informacion: ObservationsIcon,
    Tags: CaseIcon,
    Adjuntos: AttachmentIcon,
    Observaciones: InformationIcon,
    Historial: RecordIcon,
    Bandera: BanderaIcon,
    Arbol: ArbolIcon,
    Mensaje: Msj,
  }

  return ICONS[origin] || NullComponent
}

export const zeroTimer = moment().startOf('day').format('HH:mm:ss')

export const secondsToHhmmss = (seconds = 1) => {
  return moment.utc(seconds * 1000).format('HH:mm:ss')
}

export const selectTagAvatarLetter = tagType => {
  switch (tagType) {
    case 1:
      return 'U'
    case 2:
      return 'M'
    case 3:
      return 'A'
    default:
      return 'A'
  }
}

export const TOKEN = 'Authorization'
export const xEpironUser = 'x-epiron-user'
export const PROFILE_TOKEN = 'Profile-Token'

export const getStorageItems = () => {
  return {
    Authorization: `Bearer ${localStorage.getItem(TOKEN)}`,
    [xEpironUser]: localStorage.getItem(xEpironUser),
    Profile: localStorage.getItem(PROFILE_TOKEN),
  }
}

export const clientExitCase = async (params, payload) => {
  return await client.post(`/cases/exitCase/${params}`, payload)
}

export const filter = ({ search, origin, fn }) => {
  if (search) {
    fn(prevState =>
      prevState.filter(r => {
        if (r.TagName.toLowerCase().includes(search.toLowerCase())) {
          return true
        } else {
          return false
        }
      })
    )
  } else {
    fn(origin)
  }
}

export const getClientAttributeValues = attrGroup => {
  const initialValues = {
    Client: {},
    AttributeList: {},
  }
  attrGroup?.forEach(({ ClientAttributeGroupName, AttributeList }, i) => {
    if (ClientAttributeGroupName !== 'Cuentas asociadas') {
      AttributeList?.forEach(
        ({ ClientAttributeId, ClientAttributeName, hash, Value }) => {
          if (ClientAttributeId) {
            initialValues.AttributeList[`${ClientAttributeId}_${hash}`] = Value
          } else {
            initialValues.Client[ClientAttributeName] = Value
          }
        }
      )
    }
  })
  return initialValues
}

export const duplicateInputField = (
  prevState,
  indexGroup,
  indexAttr,
  field
) => {
  const newArr = Array.from(prevState)
  newArr[indexGroup].AttributeList.splice(indexAttr + 1, 0, {
    ...field,
    Value: null,
    hash: uniqid.time(),
  })
  return newArr
}

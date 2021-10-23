import moment from 'moment'

export const headCells = [
  {
    id: 'CaseId',
    numeric: false,
    disablePadding: false,
    label: 'Caso',
    class: 'caseId',
    isSelected: true,
  },
  {
    id: 'ClientFullName',
    numeric: false,
    disablePadding: false,
    label: 'Usuario',
    width: 'xlarge', // 230px
    class: 'user',
    isSelected: true,
  },
  {
    id: 'CaseModifiedDate',
    numeric: false,
    disablePadding: false,
    label: 'Espera',
    width: 'medium', // 100px
    class: '',
    isSelected: true,
  },
  {
    id: 'Notifications',
    numeric: false,
    disablePadding: false,
    label: 'Notificación',
    width: 'small', // 50px
    class: 'notificacion',
    isSelected: true,
  },
  {
    id: 'Cliente',
    numeric: false,
    disablePadding: false,
    label: 'Último',
    width: 'small',
    class: '',
    isSelected: true,
  },
  {
    id: 'Followers',
    numeric: false,
    disablePadding: false,
    label: 'Canal',
    width: 'small',
    class: '',
    isSelected: true,
  },
  {
    id: 'TimeLastComentClient',
    numeric: false,
    disablePadding: false,
    label: 'Modificado',
    width: 'medium', // 100px
    class: '',
    isSelected: true,
  },
  {
    id: 'CaseCreated',
    numeric: false,
    disablePadding: false,
    label: 'Ingreso',
    width: 'medium', // 100px
    class: '',
    isSelected: true,
  },
  {
    id: 'AttentionQueueName',
    disablePadding: false,
    label: 'Cola de atención',
    width: 'large', // 230px
    class: '',
    isSelected: true,
  },
  {
    id: 'StateName',
    numeric: false,
    disablePadding: false,
    label: 'Estado',
    class: '',
    isSelected: true,
  },
]

export const diff = then => {
  // TODO
  return moment
    .utc(moment(new Date(), 'DD/MM/YYYY HH:mm:ss').diff(moment(then)))
    .format('HH:mm-')
    .replace(':', 'h ')
    .replace('-', 'm ')
}

export const format = date => {
  let formatDate = date.toLowerCase()
  if (formatDate.includes('día')) {
    formatDate = formatDate.replace('día', 'd ')
    formatDate = formatDate.replace('s', '')
  }
  if (formatDate.includes('hora')) {
    formatDate = formatDate.replace('hora', 'h ')
    formatDate = formatDate.replace('s', '')
  }
  if (formatDate.includes('minuto')) {
    formatDate = formatDate.replace('minuto', 'm ')
  }
  if (formatDate.includes('s')) {
    formatDate = formatDate.replace('s', '')
  }
  return formatDate
}

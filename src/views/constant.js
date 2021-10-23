import * as yup from 'yup'
const VERSION = 'Versión 4.53.7 - EPIRON - Todos los derechos reservados.'
const RECOVER = 'Recuperación'

const changeState = ({ state, value }) => {
  let prevState = state
  if (value.length >= 8) {
    prevState = {
      ...prevState,
      minNumber: true,
    }
  } else {
    prevState = {
      ...prevState,
      minNumber: false,
    }
  }
  if (value.match(/(?=.*[A-Z])/)) {
    prevState = {
      ...prevState,
      capitalLetter: true,
    }
  } else {
    prevState = {
      ...prevState,
      capitalLetter: false,
    }
  }
  if (value.match(/(?=.*[0-9])/)) {
    prevState = {
      ...prevState,
      number: true,
    }
  } else {
    prevState = {
      ...prevState,
      number: false,
    }
  }
  if (value.match(/[!@#$+%^&*(),.?":{}|<>]/g)) {
    prevState = {
      ...prevState,
      character: true,
    }
  } else {
    prevState = {
      ...prevState,
      character: false,
    }
  }
  return prevState
}
const warningText = '* Es requerido'
export const loginFormData = {
  title: 'Bienvenidos',
  subtitle: '',
  step: '',
  version: VERSION,
  direction: 'column',
  buttonLabel: 'Ingresar',
  validationSchema: yup.object({
    username: yup.string().required(warningText),
    password: yup.string().min(8, 'minimo 8').required(warningText),
  }),
  link: {
    label: '¿Olvido su contraseña?',
    to: '/recover',
  },

  fields: [
    {
      id: 'authType',
      label: 'Tipo de autenticación',
      value: '',
      type: 'select',
      input_type: 'select',
      name: 'authType',
      options: [],
    },
    {
      id: 'domain',
      label: 'Dominio',
      value: '',
      type: 'select',
      input_type: 'select',
      name: 'domain',
      options: [],
    },
    {
      id: 'username',
      label: 'Usuario',
      name: 'username',
      input_type: 'input',
      type: 'text',
      value: '',
      error: 'Usuario requerido',
    },
    {
      id: 'password',
      label: 'Contraseña',
      name: 'password',
      input_type: 'input',
      type: 'password',
      value: '',
      error: 'Contraseña requerida',
    },
  ],
  loadFieldOptions(data) {
    const group = [
      {
        category: 'AuthTypes',
        label: 'AuthenticationTypeName',
        value: 'AuthenticationTypeTag',
      },
      { category: 'Domains', label: 'DomainName' },
    ]
    for (let i = 0; i < group.length; i++) {
      this.fields[i].options = data[group[i].category].map(e => {
        return {
          optionValue: e[group[i].value] || e[group[i].label],
          option_label: e[group[i].label],
        }
      })
    }
    return this
  },
}

export const recoverForm1 = {
  title: RECOVER,
  subtitle:
    'Te guiaremos en el proceso para que puedas recuperar tu contraseña.',
  step: 1,
  version: VERSION,
  direction: 'column',
  nextStep: 'Ya tengo un código de verificación',
  buttonLabel: 'Solicitar código',
  height: '50%',
  validationSchema: yup.object({
    username: yup.string().required(warningText),
    email: yup.string().email('Debe ser un email válido').required(warningText),
  }),
  fields: [
    {
      id: 'username',
      label: 'Usuario',
      name: 'username',
      input_type: 'input',
      type: 'text',
      value: '',
      error: 'Usuario requerido',
    },
    {
      id: 'email',
      label: 'Mail',
      name: 'email',
      input_type: 'input',
      type: 'text',
      value: '',
      error: 'Mail requerido',
    },
  ],
}

export const recoverForm2 = {
  title: RECOVER,
  subtitle:
    'Te hemos enviado un código a tu mail.\n Ingresa el código de verificación para continuar',
  step: 2,
  version: VERSION,
  direction: 'column',
  link: {
    label: '¿No recibiste el código de verificación?',
    to: '/',
  },
  validationSchema: yup.object({
    code: yup
      .string()
      .min(8, 'Debe tener al menos 8 carácteres')
      .required(warningText),
  }),
  buttonLabel: 'Aceptar',
  fields: [
    {
      id: 'code',
      label: 'Código de verificación',
      name: 'code',
      input_type: 'input',
      type: 'text',
      value: '',
      error: 'Ingrese el código de verificación',
    },
  ],
}

export const recoverForm3 = {
  title: RECOVER,
  step: 3,
  version: VERSION,
  direction: 'column',
  buttonLabel: 'Aceptar',
  height: '75%',
  changeState,
  validationSchema: yup.object({
    password: yup.string().required(warningText),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Las contraseñas no coinciden')
      .required(warningText),
  }),
  fields: [
    {
      id: 'password',
      label: 'Nueva contraseña',
      name: 'password',
      input_type: 'input',
      type: 'password',
      value: '',
    },
    {
      id: 'passwordConfirmation',
      label: 'Repetir nueva contraseña',
      name: 'passwordConfirmation',
      input_type: 'input',
      type: 'password',
      value: '',
    },
  ],
  errorList: [
    {
      id: 'minNumber',
      label: 'Mínimo 8 caracteres.',
    },
    {
      id: 'capitalLetter',
      label: 'Incluye al menos un carácter en máyuscula.',
    },
    {
      id: 'number',
      label: 'Incluye al menos un número.',
    },
    {
      id: 'character',
      label: 'Incluye un carácter especial.',
    },
  ],
}

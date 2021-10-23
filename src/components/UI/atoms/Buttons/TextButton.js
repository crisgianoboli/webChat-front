import { useContext } from 'react'

import MaterialButton from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

import { Context } from '../../../../../src/context'
import { any, func, bool } from 'prop-types'
import clsx from 'clsx'

const useStyles = makeStyles(({ palette }) => ({
  root: {
    borderRadius: ({ props }) => props.borderRadius,
    color: ({ themeMode }) => palette.TextButtonPanel[themeMode],
    display: 'flex',
    fontFamily: 'Nunito',
    fontSize: ({ props }) => `${props.fontSize}px`,
    fontWeight: 400,
    height: ({ props }) => `${props.height}px`,
    minWidth: '25px',
    textTransform: ({ props }) => props.uppercase && 'uppercase',
    width: ({ props }) => `${props.width}px`,
    justifyContent: 'center',
    alignItems: 'center',
    '& :disabled': {
      backgroundColor: 'red',
    },
    marginBottom: ({ props }) => `${props.marginBottom}px`,
  },
}))

const TextButton = props => {
  const { text, startIcon, endIcon, onClick, disabled, className } = props
  const {
    state: {
      modalState: { themeMode },
    },
  } = useContext(Context)

  const { root } = useStyles({ props, themeMode })

  return (
    <MaterialButton
      startIcon={startIcon}
      endIcon={endIcon}
      className={clsx(root, { [className]: className })}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </MaterialButton>
  )
}

TextButton.propTypes = {
  text: any,
  startIcon: any,
  endIcon: any,
  onClick: func.isRequired,
  uppercase: bool,
  disabled: bool,
}

TextButton.defaultProps = {
  text: '',
  startIcon: '',
  EndIcon: '',
  uppercase: false,
  disabled: false,
}

export default TextButton

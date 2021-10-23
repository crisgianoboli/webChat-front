import { useState } from 'react'
import { func, string } from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import { Box, IconButton, TextField, InputAdornment } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'

const TEXT = 'text'
const PASSWORD = 'password'

const useStyles = makeStyles(({ palette }) => ({
  error: {
    color: palette.primary.cinnabar,
    fontFamily: 'Roboto',
    fontSize: '0.8rem',
  },
  inputBase: {
    '& .MuiInputBase-root': {
      '& input:-webkit-autofill': {
        '-webkit-box-shadow': '0 0 0px 1000px white inset',
      },
    },
  },
}))

const InputForm = ({ id, label, name, type, value, handleChange, error }) => {
  const [textType, setTextType] = useState(type)
  const classes = useStyles()

  const handleTypeChange = () => {
    setTextType(prevState => (prevState === PASSWORD ? TEXT : PASSWORD))
  }

  return (
    <Box margin="10px 0" width="100%">
      <TextField
        fullWidth
        id={id}
        name={name}
        label={label}
        value={value}
        onChange={handleChange}
        type={textType}
        className={classes.inputBase}
        error={error}
        InputProps={
          type === PASSWORD && {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleTypeChange}>
                  {textType === PASSWORD ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }
        }
      />
      {error && (
        <Box component="span" className={classes.error}>
          {error}
        </Box>
      )}
    </Box>
  )
}

InputForm.propTypes = {
  id: string.isRequired,
  label: string.isRequired,
  name: string.isRequired,
  type: string.isRequired,
  value: string.isRequired,
  handleChange: func.isRequired,
  error: string,
}

export default InputForm

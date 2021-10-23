import { func, string } from 'prop-types'

import { Checkbox, FormControlLabel, Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(({ palette }) => ({
  checkbox: {
    height: '20px',
    color: palette.primary.main,
  },
  formControlLabel: {
    '& .MuiTypography-body1': {
      fontSize: '12px',
      color: palette.primary.dark,
    },
  },
  typograpy: {
    color: palette.primary.red,
  },
}))

const CheckboxCustom = ({
  id,
  label,
  error,
  name,
  disabled,
  required,
  value,
  handleChange,
}) => {
  const { checkbox, formControlLabel, typograpy } = useStyles()

  return (
    <Box display="flex" marginTop="10px" marginBottom="10px">
      <FormControlLabel
        className={formControlLabel}
        control={
          <Checkbox
            id={id}
            checked={value}
            onChange={handleChange}
            name={name}
            disabled={disabled}
            required={required}
            className={checkbox}
          />
        }
        label={label}
      />
      {required && (
        <Typography component="span" className={typograpy}>
          *
        </Typography>
      )}

      {error && <Box component="span">{error}</Box>}
    </Box>
  )
}

CheckboxCustom.propTypes = {
  id: string.isRequired,
  label: string.isRequired,
  name: string.isRequired,
  type: string.isRequired,
  value: string.isRequired,
  handleChange: func.isRequired,
  error: string,
}

export default CheckboxCustom

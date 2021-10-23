import { array, func, string } from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Box,
} from '@material-ui/core'

const useStyles = makeStyles(({ palette }) => ({
  input: {
    '& :focus': {
      background: palette.primary.transparent,
    },
  },
  formControl: {
    width: '100%',
    '& :hover .MuiOutlinedInput-notchedOutline': {
      borderColor: palette.primary.main,
    },
    '& .Mui-required': {
      color: palette.primary.red,
    },
  },
}))

const SelectCustom = ({
  handleChange,
  id,
  name,
  options,
  label,
  error,
  value,
  disabled,
  required,
}) => {
  const { input, formControl } = useStyles()

  return (
    <Box margin="20px 0" width="100%">
      <FormControl
        variant="outlined"
        className={formControl}
        size="small"
        required={required}
      >
        <InputLabel id={`outlined-label-${id}`}>{label}</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id={id}
          name={name}
          onChange={handleChange}
          error={error}
          value={value}
          fullWidth
          disabled={disabled}
          className={input}
          required={required}
          InputProps={{
            className: input,
          }}
          label={label}
        >
          {options.map(({ ClienAttributeItemValue, ClientAttributeItemId }) => (
            <MenuItem
              value={ClienAttributeItemValue}
              key={`options-${ClientAttributeItemId}`}
            >
              {ClienAttributeItemValue}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

SelectCustom.propTypes = {
  handleChange: func.isRequired,
  id: string,
  name: string,
  options: array.isRequired,
  label: string.isRequired,
  value: string,
  error: string,
}

SelectCustom.defaultProps = {
  options: [],
  label: '',
}

export default SelectCustom

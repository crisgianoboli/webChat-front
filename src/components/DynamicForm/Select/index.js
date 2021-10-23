import { useTranslation } from 'react-i18next'
import { array, func, string } from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import { Select, InputLabel, MenuItem, Box } from '@material-ui/core'

const useStyles = makeStyles(({ palette }) => ({
  root: {
    backgroundColor: props => palette.primary[props.background],
    borderRadius: props => props.borderRadius,
    paddingLeft: '.8rem',
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
      border: props => props.hoverBorder,
    },
    '& .MuiInput-underline:before': {
      border: props => props.hoverBorder,
    },
    '& .MuiSelect-select': {
      backgroundColor: 'transparent',
    },
  },
  labelForm: {
    fontFamily: 'Nunito',
    fontSize: '14px',
    lineHeight: '19px',
    color: palette.primary.silverChalice,
    marginTop: '1rem',
  },
}))

const SelectForm = ({
  handleChange,
  id,
  name,
  options,
  label,
  error,
  value,
  disabled,
  ...props
}) => {
  const classes = useStyles()
  const { t } = useTranslation()
  const { root } = useStyles(props)
  return (
    <Box width="100%">
      {label && (
        <InputLabel className={classes.labelForm}>{t(label)}</InputLabel>
      )}
      <Select
        labelId="demo-simple-select-helper-label"
        id={id}
        name={name}
        onChange={handleChange}
        error={error}
        value={value}
        fullWidth
        className={root}
        disabled={disabled}
      >
        {options.map(element => (
          <MenuItem value={element.optionValue} key={element.option_label}>
            {element.option_label}
          </MenuItem>
        ))}
      </Select>
    </Box>
  )
}

SelectForm.propTypes = {
  handleChange: func.isRequired,
  id: string,
  name: string,
  options: array.isRequired,
  label: string.isRequired,
  value: string,
  error: string,
}

SelectForm.defaultProps = {
  options: [],
  label: '',
}

export default SelectForm

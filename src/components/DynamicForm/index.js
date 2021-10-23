import { string, shape, array, func } from 'prop-types'

import InputForm from './TextField/index'
import SelectForm from './Select'

export const DynamicForm = ({
  field,
  handleChange,
  value,
  error,
  disabled,
}) => {
  const { type, id, name, label, options, input_type } = field
  switch (input_type) {
    case 'input':
      return (
        <InputForm
          id={id}
          label={label}
          name={name}
          type={type}
          handleChange={handleChange}
          value={value}
          error={error}
        />
      )
    case 'select':
      return (
        <SelectForm
          name={id}
          id={id}
          options={options}
          label={label}
          handleChange={handleChange}
          type={type}
          value={value}
          disabled={disabled}
        />
      )

    default:
      return null
  }
}

DynamicForm.propTypes = {
  handleChange: func.isRequired,
  field: shape({
    type: string,
    id: string,
    label: string,
    options: array,
    input_type: string,
  }),
  value: string,
  error: string,
}

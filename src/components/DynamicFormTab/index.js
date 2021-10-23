import { string, shape, func, bool } from 'prop-types'

import TextFieldCustom from './TextFieldCustom'
import SelectCustom from './SelectCustom'
import CheckboxCustom from './CheckboxCustom'

const DynamicFormTab = ({
  id,
  name,
  label,
  type,
  typeCode,
  options,
  maxCharacter,
  required,
  isActive,
  handleChange,
  value,
  error,
  onDuplicate,
}) => {
  switch (typeCode) {
    case 2:
      return (
        <SelectCustom
          id={id}
          name={name}
          label={label}
          value={value}
          type={type}
          options={options}
          handleChange={handleChange}
          required={required}
          error={error}
        />
      )

    case 3:
      return (
        <CheckboxCustom
          id={id}
          name={name}
          label={label}
          value={
            value !== null && typeof value !== 'boolean'
              ? JSON.parse(value.toLowerCase().trim())
              : value
          }
          type={type}
          handleChange={handleChange}
          required={required}
          error={error}
        />
      )
    case 4:
      return (
        <TextFieldCustom
          id={id}
          name={name}
          label={label}
          value={value}
          type={type}
          maxCharacter={maxCharacter}
          handleChange={handleChange}
          required={required}
          error={error}
          multiline
          rows={3}
        />
      )
    default:
      return (
        <TextFieldCustom
          id={id}
          name={name}
          label={label}
          value={value}
          type={type}
          handleChange={handleChange}
          required={required}
          error={error}
          onDuplicate={onDuplicate}
        />
      )
  }
}

DynamicFormTab.propTypes = {
  handleChange: func.isRequired,
  field: shape({}),
  value: string.isRequired,
  name: string.isRequired,
  label: string.isRequired,
  error: string,
  required: bool,
}

export default DynamicFormTab

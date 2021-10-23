import { string } from 'prop-types'

const CaretDownIcon = ({ variant }) => {
  return (
    <svg
      viewBox="0 0 10 5"
      fill="none"
      className={variant}
      data-testid="caretDownIcon"
    >
      <path
        opacity="0.7"
        d="M9 0.5L5 4.5L1 0.5"
        stroke="#002856"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

CaretDownIcon.propTypes = {
  variant: string.isRequired,
}

export default CaretDownIcon

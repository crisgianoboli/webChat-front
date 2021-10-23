import { string } from 'prop-types'

const CheckedIcon = ({ variant }) => {
  return (
    <svg viewBox="0 0 8 6" className={variant}>
      <path d="M2.83862 5.4001C2.71895 5.4001 2.60925 5.36321 2.5195 5.28021L0.535017 3.44505C0.355515 3.27906 0.355515 3.02085 0.535017 2.85485C0.714518 2.68886 0.993742 2.68886 1.17324 2.85485L2.84859 4.39491L6.82754 0.724593C7.00704 0.558599 7.28626 0.558599 7.46576 0.724593C7.64527 0.890588 7.64527 1.1488 7.46576 1.3148L3.1677 5.28021C3.06798 5.36321 2.95829 5.4001 2.83862 5.4001Z" />
    </svg>
  )
}

CheckedIcon.propTypes = {
  variant: string,
}

CheckedIcon.defaultProps = {
  variant: '',
}

export default CheckedIcon

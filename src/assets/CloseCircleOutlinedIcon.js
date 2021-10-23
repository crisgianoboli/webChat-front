import { string } from 'prop-types'

const CloseCircleOutlinedIcon = ({ variant }) => {
  return (
    <svg viewBox="0 0 26 26" fill="none" className={variant}>
      <path
        d="M1 13C1 6.375 6.375 1 13 1C19.625 1 25 6.375 25 13C25 19.625 19.625 25 13 25C6.375 25 1 19.625 1 13Z"
        stroke="#3F96B4"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M9 17L17 9"
        stroke="#3F96B4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 17L9 9"
        stroke="#3F96B4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

CloseCircleOutlinedIcon.propTypes = {
  variant: string,
}

CloseCircleOutlinedIcon.defaultProps = {
  variant: '',
}

export default CloseCircleOutlinedIcon

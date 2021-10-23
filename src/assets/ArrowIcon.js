import { string } from 'prop-types'

const ArrowIcon = ({ variant }) => {
  return (
    <svg
      className={variant}
      width="10"
      height="11"
      viewBox="0 0 10 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.876953 1.53524V9.46492C0.876953 9.9418 1.3418 10.2448 1.72461 10.0162L8.50313 5.95918C8.83453 5.76094 8.83453 5.23922 8.50313 5.04098L1.72461 0.983987C1.3418 0.755394 0.876953 1.05836 0.876953 1.53524Z"
        stroke="#3F96B4"
        strokeMiterlimit="10"
      />
    </svg>
  )
}

ArrowIcon.propTypes = {
  variant: string,
}

ArrowIcon.defaultProps = {
  variant: '',
}

export default ArrowIcon

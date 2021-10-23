import { string } from 'prop-types'

const CloseIcon = ({ variant }) => {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      className={variant}
    >
      <path
        d="M6.5 0C2.90875 0 0 2.90875 0 6.5C0 10.0913 2.90875 13 6.5 13C10.0913 13 13 10.0913 13 6.5C13 2.90875 10.0913 0 6.5 0ZM9.75 8.83187L8.83187 9.75L6.5 7.41813L4.16813 9.75L3.25 8.83187L5.58187 6.5L3.25 4.16813L4.16813 3.25L6.5 5.58187L8.83187 3.25L9.75 4.16813L7.41813 6.5L9.75 8.83187Z"
        fill="#BBBBBB"
      />
    </svg>
  )
}

CloseIcon.propTypes = {
  variant: string,
}

CloseIcon.defaultProps = {
  variant: '',
}

export default CloseIcon

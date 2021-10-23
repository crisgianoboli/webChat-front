import { string } from 'prop-types'

const RefreshIcon = ({ variant }) => {
  return (
    <svg viewBox="0 0 13 13" fill="none" className={variant}>
      <path d="M6.5 0C2.91602 0 0 2.91602 0 6.5C0 10.084 2.91602 13 6.5 13C10.084 13 13 10.084 13 6.5H12C12 9.54297 9.54297 12 6.5 12C3.45703 12 1 9.54297 1 6.5C1 3.45703 3.45703 1 6.5 1C8.4375 1 10.1309 1.99219 11.1094 3.5H8.5V4.5H12.5V0.5H11.5V2.35938C10.3086 0.921875 8.50977 0 6.5 0Z" />
    </svg>
  )
}

RefreshIcon.propTypes = {
  variant: string,
}

RefreshIcon.defaultProps = {
  variant: '',
}

export default RefreshIcon

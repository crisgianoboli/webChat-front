import { string } from 'prop-types'

const EmailOutlinedIcon = ({ variant }) => {
  return (
    <svg viewBox="0 0 16 15" fill="none" className={variant}>
      <path d="M4.99739 0C4.44511 0 3.99739 0.447715 3.99739 1V1.29572L0.891822 3.36281C0.334719 3.73362 0 4.3585 0 5.02772V13C0 14.1046 0.895431 15 2 15H14C15.1046 15 16 14.1046 16 13V5.02743C16 4.35836 15.6654 3.73362 15.1086 3.36277L12.0026 1.29439V1C12.0026 0.447715 11.5549 0 11.0026 0H4.99739ZM5.3316 1.66364C5.3316 1.49795 5.46591 1.36364 5.6316 1.36364H10.3684C10.5341 1.36364 10.6684 1.49795 10.6684 1.66364V6.60112L9.10429 7.63694C8.43484 8.08028 7.56516 8.08028 6.89571 7.63694L5.3316 6.60112V1.66364ZM6.2987 2.72727C6.13301 2.72727 5.9987 2.86159 5.9987 3.02727V3.79091C5.9987 3.95659 6.13301 4.09091 6.2987 4.09091H9.7013C9.86699 4.09091 10.0013 3.95659 10.0013 3.79091V3.02727C10.0013 2.86159 9.86699 2.72727 9.7013 2.72727H6.2987ZM3.5311 3.23224C3.73048 3.09946 3.99739 3.24239 3.99739 3.48193V5.71822L2.26851 4.57337C2.08964 4.45492 2.08929 4.19246 2.26785 4.07354L3.5311 3.23224ZM12.0026 2.9217L13.7321 4.07354C13.9107 4.19246 13.9104 4.45492 13.7315 4.57337L12.4682 5.40988C12.2688 5.54194 12.0026 5.39894 12.0026 5.15975V2.9217ZM6.2987 4.77273C6.13301 4.77273 5.9987 4.90704 5.9987 5.07273V5.83636C5.9987 6.00205 6.13301 6.13636 6.2987 6.13636H9.7013C9.86699 6.13636 10.0013 6.00205 10.0013 5.83636V5.07273C10.0013 4.90704 9.86699 4.77273 9.7013 4.77273H6.2987ZM1.3342 5.57972L6.89592 9.26193C7.56527 9.70508 8.43473 9.70508 9.10408 9.26193L14.6658 5.57972V11.6364C14.6658 12.7409 13.7704 13.6364 12.6658 13.6364H3.3342C2.22963 13.6364 1.3342 12.7409 1.3342 11.6364V5.57972Z" />
    </svg>
  )
}

EmailOutlinedIcon.propTypes = {
  variant: string,
}

EmailOutlinedIcon.defaultProps = {
  variant: '',
}

export default EmailOutlinedIcon

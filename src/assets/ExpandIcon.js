import { string } from 'prop-types'

const ExpandIcon = ({ variant, fill = '#6F7271' }) => {
  return (
    <svg
      width="15"
      height="14"
      viewBox="0 0 15 14"
      fill="none"
      className={variant}
    >
      <path
        opacity="0.9"
        d="M14.5898 0.636364V3.97727C14.5898 4.32727 14.3035 4.61364 13.9535 4.61364C13.6035 4.61364 13.3171 4.32727 13.3171 3.97727V2.17955L9.29212 6.18864C9.16484 6.31591 9.00575 6.37955 8.84666 6.37955C8.68757 6.37955 8.52848 6.31591 8.40121 6.18864C8.14666 5.93409 8.14666 5.53636 8.40121 5.28182L12.4103 1.27273H10.6126C10.2626 1.27273 9.97621 0.986364 9.97621 0.636364C9.97621 0.286364 10.2626 0 10.6126 0H13.9535C14.1285 0 14.2876 0.0636364 14.3989 0.190909C14.5262 0.302273 14.5898 0.461364 14.5898 0.636364ZM5.82394 7.875L1.86257 11.8205V10.0227C1.86257 9.67273 1.57621 9.38636 1.22621 9.38636C0.876207 9.38636 0.589844 9.67273 0.589844 10.0227V13.3636C0.589844 13.5386 0.65348 13.6977 0.780753 13.8091C0.892116 13.9364 1.05121 14 1.22621 14H4.56712C4.91712 14 5.20348 13.7136 5.20348 13.3636C5.20348 13.0136 4.91712 12.7273 4.56712 12.7273H2.76939L6.73075 8.76591C6.9853 8.51136 6.9853 8.11364 6.73075 7.85909C6.47621 7.62045 6.06257 7.62045 5.82394 7.875Z"
        fill={fill}
      />
    </svg>
  )
}

ExpandIcon.propTypes = {
  variant: string,
}

ExpandIcon.defaultProps = {
  variant: '',
}

export default ExpandIcon

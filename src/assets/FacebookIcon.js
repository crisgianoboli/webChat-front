import { string } from 'prop-types'

const FacebookIcon = ({ variant }) => {
  return (
    <svg viewBox="0 0 10 18" fill="none" className={variant}>
      <path d="M7.03369 0.419189C4.56994 0.419189 3.125 1.70435 3.125 4.63244V7.20861H0V10.2947H3.125V17.7013H6.25V10.2947H8.75L9.375 7.20861H6.25V5.15442C6.25 4.05145 6.61423 3.50529 7.66235 3.50529H9.375V0.545768C9.07875 0.506266 8.21557 0.419189 7.03369 0.419189Z" />
    </svg>
  )
}

FacebookIcon.propTypes = {
  variant: string,
}

FacebookIcon.defaultProps = {
  variant: '',
}

export default FacebookIcon

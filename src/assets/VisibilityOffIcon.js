import { string } from 'prop-types'

const VisibilityOffIcon = ({ variant }) => {
  return (
    <svg viewBox="0 0 21 19" fill="none" className={variant}>
      <path d="M2.09572 0L1.11202 0.995444L5.36762 5.28018L12.9593 12.9624L14.2637 14.3041L18.9043 19L19.888 18.0046L15.6324 13.6982C18.53 12.2456 20.4734 10.0897 20.5937 9.95444L21 9.5L20.5937 9.04556C20.4092 8.83727 16.0333 3.96014 10.5 3.96014C9.16077 3.96014 7.89639 4.25769 6.73625 4.6959L2.09572 0ZM10.5 5.3451C11.9729 5.3451 13.3656 5.76438 14.6059 6.34055C15.047 7.08713 15.2902 7.93109 15.2902 8.80752C15.2902 10.0653 14.8091 11.215 14.0285 12.0752L12.0825 10.1059C12.3685 9.75157 12.553 9.30253 12.553 8.80752C12.553 7.66059 11.6334 6.73007 10.5 6.73007C10.0108 6.73007 9.56708 6.91671 9.2169 7.20615L7.82688 5.79954C8.67694 5.53445 9.56708 5.3451 10.5 5.3451ZM4.12729 5.97266C1.93266 7.3387 0.507892 8.92924 0.406314 9.04556L0 9.5L0.406314 9.95444C0.58274 10.1546 4.63518 14.6422 9.85845 14.9966C10.0696 15.0182 10.2835 15.0399 10.5 15.0399C10.7165 15.0399 10.9304 15.0182 11.1415 14.9966C11.7056 14.9587 12.2562 14.883 12.7882 14.7585L11.5692 13.5251C11.2217 13.6062 10.8689 13.6549 10.5 13.6549C7.85896 13.6549 5.70978 11.4801 5.70978 8.80752C5.70978 8.43964 5.75789 8.07987 5.83809 7.72551L4.12729 5.97266ZM4.51222 7.37927C4.40262 7.84724 4.34114 8.32332 4.34114 8.80752C4.34114 10.0112 4.67528 11.1203 5.26069 12.0752C3.69425 11.1663 2.49669 10.1005 1.88187 9.5C2.39244 8.99957 3.31199 8.16913 4.51222 7.37927ZM16.4878 7.37927C17.688 8.16913 18.6049 8.99957 19.1181 9.5C18.5033 10.1005 17.287 11.1879 15.7179 12.0968C16.306 11.1419 16.6589 10.0112 16.6589 8.80752C16.6589 8.32332 16.5974 7.84453 16.4878 7.37927Z" />
    </svg>
  )
}

VisibilityOffIcon.propTypes = {
  variant: string,
}

VisibilityOffIcon.defaultProps = {
  variant: '',
}

export default VisibilityOffIcon
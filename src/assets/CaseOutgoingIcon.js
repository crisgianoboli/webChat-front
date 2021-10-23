import { string } from 'prop-types'

const CaseOutgoingIcon = ({ variant }) => {
  return (
    <svg viewBox="0 0 16 14" fill="none" className={variant}>
      <path d="M7.89686 8.56683C8.50877 9.13949 9.13222 9.70059 9.73258 10.2848C10.3445 10.8782 10.4923 11.5663 9.85958 12.206C9.22458 12.8456 8.54571 12.7047 7.93842 12.0974C6.57837 10.7374 5.21831 9.37963 3.86288 8.01727C3.20479 7.35456 3.18632 6.65722 3.83979 5.9922C5.21601 4.5952 6.60839 3.21206 8.00077 1.83353C8.58266 1.25857 9.25229 1.18237 9.84111 1.75964C10.4807 2.3854 10.3653 3.07813 9.75105 3.6808C9.14838 4.26962 8.518 4.83073 7.90147 5.40338C7.9338 5.51191 7.96844 5.62044 8.00077 5.72896C8.73275 5.72896 9.46242 5.72896 10.1944 5.72896C11.3097 5.72896 12.425 5.74051 13.5403 5.72665C14.4547 5.71511 15.1982 5.96218 15.1751 7.0336C15.152 8.01958 14.457 8.27589 13.5818 8.26896C11.7438 8.25511 9.90576 8.26434 8.06542 8.26434C8.00538 8.36363 7.95227 8.46523 7.89686 8.56683Z" />
      <path d="M0.00702974 6.88113C0.00702974 5.53493 -0.0137521 4.18873 0.0116479 2.84253C0.0555206 0.715864 1.70883 -0.482553 3.70157 0.184773C3.91632 0.256355 4.18417 0.621191 4.1657 0.8267C4.14492 1.04606 3.84704 1.34394 3.61152 1.41552C3.29979 1.5125 2.92803 1.39935 2.58397 1.42014C1.82197 1.46863 1.36246 1.86117 1.36016 2.65781C1.35092 5.54186 1.35785 8.42591 1.35323 11.31C1.35092 12.1366 1.81966 12.4784 2.57935 12.5222C2.96035 12.5453 3.37137 12.4691 3.71542 12.5892C3.93017 12.6631 4.14953 13.0094 4.17262 13.2519C4.1911 13.4251 3.92324 13.7299 3.72004 13.8038C1.81274 14.4919 0.101702 13.3073 0.00933883 11.2638C0.00702974 11.1876 0.00702974 11.1091 0.00702974 11.0329C0.00702974 9.64973 0.00702974 8.26427 0.00702974 6.88113Z" />
    </svg>
  )
}

CaseOutgoingIcon.propTypes = {
  variant: string,
}

CaseOutgoingIcon.defaultProps = {
  variant: '',
}

export default CaseOutgoingIcon

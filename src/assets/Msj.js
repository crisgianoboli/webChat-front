import { string } from 'prop-types'

const Msj = ({ variant }) => {
  return (
    <svg
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={variant}
    >
      <path
        d="M20 12.5H16.25V15H6.25L2.5 18.75V15H0V3.75H2.5V0H20V12.5ZM15 5H1.25V13.75H3.75V15.7324C4.08203 15.4004 4.40918 15.0684 4.73145 14.7363C5.05371 14.4043 5.38737 14.0755 5.73242 13.75H15V5ZM18.75 1.25H3.75V3.75H16.25V11.25H18.75V1.25Z"
        fill="#3F96B4"
      />
    </svg>
  )
}

Msj.propTypes = {
  variant: string,
}

Msj.defaultProps = {
  variant: '',
}

export default Msj

import { string } from 'prop-types'

const AttachIcon = ({ variant, text }) => {
  return (
    <svg className={variant} viewBox="0 0 14 19" fill="none">
      <text
        x="1"
        y="11"
        fontFamily="Nunito"
        fontStyle="normal"
        fontWeight="bold"
        fontSize="6px"
      >
        {text.toUpperCase()}
      </text>
      <path
        d="M2.06612 18.6667H11.9336C13.0749 18.6667 14 17.703 14 16.5145V2.15221C14 0.963667 13.0749 0 11.9339 0H4.04488H2.0664C0.92512 0 0 0.963667 0 2.15221V16.5145C0 17.703 0.92512 18.6667 2.06612 18.6667ZM11.9339 18.0833H10.5148L13.44 15.0357V16.5145C13.44 17.3795 12.7644 18.0833 11.9339 18.0833ZM2.06612 0.583333H3.48488L0.56 3.63096V2.15221C0.56 1.28712 1.23564 0.583333 2.06612 0.583333ZM0.56 4.45579L4.27672 0.583333H11.9339C12.7644 0.583333 13.44 1.28712 13.44 2.15221V14.2109L9.723 18.0833H2.06612C1.23564 18.0833 0.56 17.3795 0.56 16.5145V4.45579Z"
        fill="#3F96B4"
      />
    </svg>
  )
}

AttachIcon.propTypes = {
  variant: string,
}

AttachIcon.defaultProps = {
  variant: '',
}

export default AttachIcon

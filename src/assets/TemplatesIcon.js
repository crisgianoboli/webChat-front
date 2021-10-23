import { string } from 'prop-types'

const TemplatesIcon = ({ variant }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15.4 15.4"
      fill="#6f7271"
      height="15"
      className={variant}
    >
      <g id="Capa_2" data-name="Capa 2">
        <g id="Capa_1-2" data-name="Capa 1">
          <path d="M13.2,15.4H2.2A2.22,2.22,0,0,1,0,13.2V2.2A2.22,2.22,0,0,1,2.2,0h11a2.22,2.22,0,0,1,2.2,2.2v11A2.22,2.22,0,0,1,13.2,15.4ZM2.2,1.3a.9.9,0,0,0-.9.9v11a.9.9,0,0,0,.9.9h11a.9.9,0,0,0,.9-.9V2.2a.9.9,0,0,0-.9-.9Z" />
          <path d="M14.7,4.9H.7A.67.67,0,0,1,0,4.3a.67.67,0,0,1,.7-.6h14a.67.67,0,0,1,.7.6A.67.67,0,0,1,14.7,4.9Z" />
          <path d="M5.3,14.3a.68.68,0,0,1-.7-.7V4.3c0-.4.3-.6.7-.6a.67.67,0,0,1,.7.6v9.4A.67.67,0,0,1,5.3,14.3Z" />
        </g>
      </g>
    </svg>
  )
}

TemplatesIcon.propTypes = {
  variant: string,
}

TemplatesIcon.defaultProps = {
  variant: '',
}

export default TemplatesIcon

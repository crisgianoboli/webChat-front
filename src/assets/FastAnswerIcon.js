import { string } from 'prop-types'

const FastAnswerIcon = ({ variant }) => {
  return (
    <svg viewBox="0 0 25.31 12" fill="#6f7271" height="11" className={variant}>
      <defs></defs>
      <g id="Capa_2" data-name="Capa 2">
        <g id="Capa_1-2" data-name="Capa 1">
          <path d="M8.6,3.2H3.3a.54.54,0,0,1-.5-.5.47.47,0,0,1,.5-.5H8.6a.47.47,0,0,1,.5.5.54.54,0,0,1-.5.5Z" />
          <path d="M7.1,9.9H3.6a.5.5,0,1,1,0-1H7.1a.5.5,0,0,1,0,1Z" />
          <path d="M5.5,6.5H.5a.5.5,0,0,1,0-1h5a.5.5,0,0,1,0,1Z" />
          <path d="M23.4,12H12.2a2,2,0,0,1-2-2V2a2,2,0,0,1,2-2H23.3a2,2,0,0,1,2,2v8.1A1.84,1.84,0,0,1,23.4,12ZM12.2,1.3a.68.68,0,0,0-.7.7v8.1a.68.68,0,0,0,.7.7H23.3a.68.68,0,0,0,.7-.7V2a.68.68,0,0,0-.7-.7Z" />
          <path d="M17.8,7.4a.6.6,0,0,1-.4-.1L12.8,4.2a.65.65,0,0,1,.7-1.1h.1l4.2,2.8L22,3.1a.65.65,0,0,1,.7,1.1L18.1,7.3C18.1,7.4,17.9,7.4,17.8,7.4Z" />
        </g>
      </g>
    </svg>
  )
}

FastAnswerIcon.propTypes = {
  variant: string,
}

FastAnswerIcon.defaultProps = {
  variant: '',
}

export default FastAnswerIcon

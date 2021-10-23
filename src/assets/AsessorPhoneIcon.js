import { makeStyles } from '@material-ui/core/styles'
import { string } from 'prop-types'

const useStyles = makeStyles(({ palette }) => ({
  logo: {
    height: '18px',
    fill: palette.primary.main,
    margin: '0 5px',
  },
}))

const AsessorPhoneIcon = ({ color }) => {
  const classes = useStyles()
  const { logo } = classes
  return (
    <svg className={`${logo} ${color}`} viewBox="0 0 15.11 19.75">
      <g id="Capa_2" data-name="Capa 2">
        <g id="Capa_1-2" data-name="Capa 1">
          <path d="M8.71,16.85H7.26A1.44,1.44,0,0,0,6,17.57H5.08A2.18,2.18,0,0,1,2.9,15.4H4.35V8.87H1.45a6.55,6.55,0,0,1,5-6.33V1.05A8,8,0,0,0,0,8.87v4.35a2.18,2.18,0,0,0,1.45,2v.14A3.64,3.64,0,0,0,5.08,19H6a1.43,1.43,0,0,0,1.25.73H8.71a1.45,1.45,0,1,0,0-2.9ZM2.18,14a.73.73,0,0,1-.73-.73v-2.9H2.9V14Z" />
          <path d="M13.57,0H8.65A1.63,1.63,0,0,0,7.11,1.7V13.3A1.63,1.63,0,0,0,8.65,15h4.92a1.63,1.63,0,0,0,1.54-1.7V1.7A1.63,1.63,0,0,0,13.57,0ZM11.11,14.32a1,1,0,0,1,0-2.05,1,1,0,0,1,0,2.05Zm2.77-2.73H8.34V2.05h5.54Z" />
        </g>
      </g>
    </svg>
  )
}

AsessorPhoneIcon.propTypes = {
  color: string,
}

AsessorPhoneIcon.defaultProps = {
  color: '',
}

export default AsessorPhoneIcon

import { makeStyles } from '@material-ui/core/styles'
import { string } from 'prop-types'

const useStyles = makeStyles(({ palette }) => ({
  logo: {
    height: '18px',
    fill: palette.primary.main,
    margin: '0 5px',
  },
}))

const UserPhoneIcon = ({ color }) => {
  const classes = useStyles()
  const { logo } = classes
  return (
    <svg className={`${logo} ${color}`} viewBox="0 0 15.11 19.75">
      <g id="Capa_2" data-name="Capa 2">
        <g id="Capa_1-2" data-name="Capa 1">
          <path d="M13.94,4.74H8.66A1.7,1.7,0,0,0,7,6.47V18.26A1.7,1.7,0,0,0,8.66,20h5.28a1.7,1.7,0,0,0,1.65-1.74V6.47A1.7,1.7,0,0,0,13.94,4.74ZM11.3,19.3a1,1,0,0,1,0-2.08,1,1,0,0,1,0,2.08Zm3-2.77H8.33V6.82h5.94Z" />
          <path d="M4.25,5.73A4.17,4.17,0,0,1,8.5,1.63a4.24,4.24,0,0,1,3.7,2.11h1.88A6,6,0,0,0,8.5,0,5.86,5.86,0,0,0,2.55,5.73a5.69,5.69,0,0,0,2.63,4.75A8.21,8.21,0,0,0,0,18H1.7a6.54,6.54,0,0,1,4.38-6.12V9.09A4,4,0,0,1,4.25,5.73Z" />
        </g>
      </g>
    </svg>
  )
}

UserPhoneIcon.propTypes = {
  color: string,
}

UserPhoneIcon.defaultProps = {
  color: '',
}

export default UserPhoneIcon

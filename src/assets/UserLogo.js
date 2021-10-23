import { makeStyles } from '@material-ui/core/styles'
import { string } from 'prop-types'

const useStyles = makeStyles(({ palette }) => ({
  logo: {
    height: '17px',
    fill: palette.primary.main,
    margin: '0 5px',
  },
}))

const UserLogo = ({ color }) => {
  const classes = useStyles()
  const { logo } = classes
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 18"
      fill="none"
      className={`${logo} ${color}`}
    >
      <path
        fill="#3F96B4"
        d="M8.5 0C5.22285 0 2.55 2.5728 2.55 5.72727C2.55 7.69922 3.5959 9.45064 5.17969 10.483C2.14824 11.7358 0 14.6314 0 18H1.7C1.7 14.3757 4.73477 11.4545 8.5 11.4545C12.2652 11.4545 15.3 14.3757 15.3 18H17C17 14.6314 14.8518 11.7358 11.8203 10.483C13.4041 9.45064 14.45 7.69922 14.45 5.72727C14.45 2.5728 11.7771 0 8.5 0ZM8.5 1.63636C10.8574 1.63636 12.75 3.4581 12.75 5.72727C12.75 7.99645 10.8574 9.81818 8.5 9.81818C6.14258 9.81818 4.25 7.99645 4.25 5.72727C4.25 3.4581 6.14258 1.63636 8.5 1.63636Z"
      />
    </svg>
  )
}

UserLogo.propTypes = {
  color: string,
}

UserLogo.defaultProps = {
  color: '',
}

export default UserLogo

import { makeStyles } from '@material-ui/core/styles'
import { string } from 'prop-types'

const useStyles = makeStyles(({ palette }) => ({
  logo: {
    height: '20px',
    fill: palette.primary.main,
    margin: '0 5px',
  },
}))

const Operator = ({ color }) => {
  const classes = useStyles()
  const { logo } = classes
  return (
    <svg
      width="17"
      height="20"
      viewBox="0 0 17 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${logo} ${color}`}
    >
      <path d="M8.46154 0C3.8101 0 0 3.8101 0 8.46154V13.0769C0 14.0715 0.649038 14.9189 1.53846 15.2404V15.3846C1.53846 17.497 3.27224 19.2308 5.38462 19.2308H6.37019C6.63762 19.6905 7.1244 20 7.69231 20H9.23077C10.0781 20 10.7692 19.3089 10.7692 18.4615C10.7692 17.6142 10.0781 16.9231 9.23077 16.9231H7.69231C7.1244 16.9231 6.63762 17.2326 6.37019 17.6923H5.38462C4.11058 17.6923 3.07692 16.6587 3.07692 15.3846H4.61538V8.46154H1.53846C1.53846 4.65144 4.65144 1.53846 8.46154 1.53846C12.2716 1.53846 15.3846 4.65144 15.3846 8.46154H12.3077V15.3846H14.6154C15.8804 15.3846 16.9231 14.3419 16.9231 13.0769V8.46154C16.9231 3.8101 13.113 0 8.46154 0ZM1.53846 10H3.07692V13.8462H2.30769C1.88101 13.8462 1.53846 13.5036 1.53846 13.0769V10ZM13.8462 10H15.3846V13.0769C15.3846 13.5036 15.0421 13.8462 14.6154 13.8462H13.8462V10Z" />
    </svg>
  )
}

Operator.propTypes = {
  color: string,
}

Operator.defaultProps = {
  color: '',
}

export default Operator

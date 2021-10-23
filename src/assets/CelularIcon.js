import { makeStyles } from '@material-ui/core/styles'
import { string } from 'prop-types'

const useStyles = makeStyles(({ palette }) => ({
  logo: {
    height: '20px',
    fill: palette.primary.main,
    margin: '0 5px',
  },
}))

const CelularIcon = ({ color }) => {
  const classes = useStyles()
  const { logo } = classes
  return (
    <svg viewBox="0 0 10 18" fill="none" className={`${logo} ${color}`}>
      <path d="M8.07692 0H1.92308C0.861538 0 0 0.916364 0 2.04545V15.9545C0 17.0836 0.861538 18 1.92308 18H8.07692C9.13846 18 10 17.0836 10 15.9545V2.04545C10 0.916364 9.13846 0 8.07692 0ZM5 17.1818C4.36154 17.1818 3.84615 16.6336 3.84615 15.9545C3.84615 15.2755 4.36154 14.7273 5 14.7273C5.63846 14.7273 6.15385 15.2755 6.15385 15.9545C6.15385 16.6336 5.63846 17.1818 5 17.1818ZM8.46154 13.9091H1.53846V2.45455H8.46154V13.9091Z" />
    </svg>
  )
}

CelularIcon.propTypes = {
  color: string,
}

CelularIcon.defaultProps = {
  color: '',
}

export default CelularIcon

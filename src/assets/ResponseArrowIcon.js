import { string } from 'prop-types'

const ResponseArrowIcon = ({ variant }) => {
  return (
    <svg viewBox="0 0 9 8" fill="none" className={variant}>
      <path d="M3.20359 0L0.253521 2.94676L0 3.21151L0.253521 3.47626L3.20359 6.42302L3.73367 5.89353L1.41741 3.57986H6.41869C7.44142 3.57986 8.26248 4.4 8.26248 5.42158C8.26248 6.44317 7.44142 7.26331 6.41869 7.26331V8C7.84043 8 9 6.84173 9 5.42158C9 4.00144 7.84043 2.84317 6.41869 2.84317H1.41741L3.73367 0.529496L3.20359 0Z" />
    </svg>
  )
}

ResponseArrowIcon.propTypes = {
  variant: string,
}

ResponseArrowIcon.defaultProps = {
  variant: '',
}

export default ResponseArrowIcon

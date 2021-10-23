import { string } from 'prop-types'

const TimerOutlinedIcon = ({ variant }) => {
  return (
    <svg viewBox="0 0 18 20" fill="none" className={variant}>
      <path
        d="M8.99805 8.47719L8.99805 4.84106"
        stroke="#3F96B4"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.99805 1.9323L8.99805 1.20508"
        stroke="#3F96B4"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6343 3.93238L15.1797 3.38696"
        stroke="#3F96B4"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.99868 11.75C8.19541 11.75 7.54423 11.0988 7.54423 10.2955C7.54423 9.49224 8.19541 8.84106 8.99868 8.84106C9.80195 8.84106 10.4531 9.49224 10.4531 10.2955C10.4531 11.0988 9.80195 11.75 8.99868 11.75Z"
        stroke="#3F96B4"
        strokeWidth="1.6"
        strokeMiterlimit="10"
      />
      <path
        d="M8.99858 2.29565C10.5807 2.29565 12.1273 2.76481 13.4428 3.64381C14.7583 4.5228 15.7837 5.77215 16.3891 7.23386C16.9946 8.69557 17.153 10.304 16.8443 11.8557C16.5357 13.4075 15.7738 14.8329 14.6551 15.9516C13.5363 17.0703 12.1109 17.8322 10.5592 18.1409C9.00745 18.4495 7.39903 18.2911 5.93731 17.6857C4.4756 17.0802 3.22626 16.0549 2.34727 14.7394C1.46827 13.4239 0.999113 11.8773 0.999113 10.2951C0.999113 8.17353 1.84191 6.13883 3.3421 4.63864C4.84229 3.13845 6.87699 2.29565 8.99858 2.29565Z"
        stroke="#3F96B4"
        strokeWidth="1.6"
        strokeMiterlimit="10"
      />
    </svg>
  )
}

TimerOutlinedIcon.propTypes = {
  variant: string,
}

TimerOutlinedIcon.defaultProps = {
  variant: '',
}

export default TimerOutlinedIcon

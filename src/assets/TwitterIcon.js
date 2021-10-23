import { string } from 'prop-types'

const TwitterIcon = ({ variant }) => {
  return (
    <svg viewBox="0 0 15 13" fill="none" className={variant}>
      <path d="M15 2.00813C14.4482 2.24923 13.855 2.41318 13.2324 2.48551C13.8672 2.10939 14.3555 1.51387 14.585 0.805035C13.9917 1.15222 13.3325 1.40538 12.6318 1.54281C12.0703 0.952106 11.2695 0.580811 10.3857 0.580811C8.68652 0.580811 7.30713 1.94303 7.30713 3.6211C7.30713 3.85979 7.33398 4.09125 7.3877 4.31306C4.8291 4.18769 2.56103 2.97736 1.04492 1.13776C0.778809 1.5862 0.627441 2.10939 0.627441 2.66634C0.627441 3.71995 1.16943 4.6506 1.99707 5.19549C1.4917 5.17862 1.01807 5.0436 0.603028 4.81455C0.603028 4.82902 0.603028 4.84107 0.603028 4.85313C0.603028 6.32626 1.6626 7.55588 3.07129 7.83315C2.8125 7.90306 2.5415 7.94164 2.26074 7.94164C2.06299 7.94164 1.86768 7.92235 1.68213 7.88619C2.07275 9.09411 3.21045 9.97172 4.55566 9.99824C3.50342 10.8132 2.17529 11.2978 0.734863 11.2978C0.48584 11.2978 0.241699 11.2833 0 11.2544C1.3623 12.1175 2.97852 12.6214 4.7168 12.6214C10.3784 12.6214 13.4741 7.98986 13.4741 3.97311C13.4741 3.84291 13.4692 3.71031 13.4644 3.58011C14.0649 3.15095 14.5874 2.61571 15 2.00813Z" />
    </svg>
  )
}

TwitterIcon.propTypes = {
  variant: string,
}

TwitterIcon.defaultProps = {
  variant: '',
}

export default TwitterIcon
import { string } from 'prop-types'

const UnOrderListIcon = ({ variant }) => {
  return (
    <svg
      width="16"
      height="12"
      viewBox="0 0 16 12"
      fill="none"
      className={variant}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.8625 9.41615H5.20027C4.90343 9.41615 4.66348 9.661 4.66348 9.9627C4.66348 10.2649 4.90343 10.5093 5.20027 10.5093H14.8625C15.1594 10.5093 15.3993 10.2649 15.3993 9.9627C15.3993 9.661 15.1594 9.41615 14.8625 9.41615ZM1.44273 0.124756C0.850107 0.124756 0.369141 0.614467 0.369141 1.21786C0.369141 1.82125 0.850107 2.31097 1.44273 2.31097C2.03534 2.31097 2.51631 1.82125 2.51631 1.21786C2.51631 0.614467 2.03534 0.124756 1.44273 0.124756ZM5.20027 1.76441H14.8625C15.1594 1.76441 15.3993 1.5201 15.3993 1.21786C15.3993 0.915617 15.1594 0.671308 14.8625 0.671308H5.20027C4.90343 0.671308 4.66348 0.915617 4.66348 1.21786C4.66348 1.5201 4.90343 1.76441 5.20027 1.76441ZM14.8625 5.04373H5.20027C4.90343 5.04373 4.66348 5.28858 4.66348 5.59028C4.66348 5.89252 4.90343 6.13683 5.20027 6.13683H14.8625C15.1594 6.13683 15.3993 5.89252 15.3993 5.59028C15.3993 5.28858 15.1594 5.04373 14.8625 5.04373ZM1.44273 4.49718C0.850107 4.49718 0.369141 4.98689 0.369141 5.59028C0.369141 6.19367 0.850107 6.68338 1.44273 6.68338C2.03534 6.68338 2.51631 6.19367 2.51631 5.59028C2.51631 4.98689 2.03534 4.49718 1.44273 4.49718ZM1.44273 8.86959C0.850107 8.86959 0.369141 9.35931 0.369141 9.9627C0.369141 10.5661 0.850107 11.0558 1.44273 11.0558C2.03534 11.0558 2.51631 10.5661 2.51631 9.9627C2.51631 9.35931 2.03534 8.86959 1.44273 8.86959Z"
        fill="#6F7271"
      />
    </svg>
  )
}

UnOrderListIcon.propTypes = {
  variant: string,
}

UnOrderListIcon.defaultProps = {
  variant: '',
}

export default UnOrderListIcon
import { string } from 'prop-types'

const FacebookIconOutlined = ({ variant }) => {
  return (
    <svg viewBox="0 0 18 18" fill="none" className={variant}>
      <path d="M17.9991 9.0108C17.9991 10.2507 17.9962 11.4906 18 12.73C18.0038 13.9733 17.6019 15.0743 16.8259 16.036C16.0473 17.0006 15.057 17.6451 13.8325 17.8805C13.39 17.9657 12.9311 17.9913 12.4793 17.9963C11.4424 18.0085 10.4054 17.9879 9.36808 17.9879C8.09708 17.9883 6.82608 18.0009 5.55507 18.0001C4.78031 17.9993 4.011 17.938 3.28867 17.6237C1.48284 16.8382 0.398499 15.4775 0.0604041 13.5336C0.0188763 13.2944 0.00880892 13.0473 0.00838945 12.8035C0.00251684 10.2788 0 7.75371 0 5.22862C0 4.18342 0.292792 3.22256 0.879214 2.35988C1.71103 1.13594 2.85199 0.36641 4.3126 0.0940964C4.57183 0.0458436 4.83946 0.0240249 5.10372 0.021927C6.74176 0.00891969 8.37938 0.00178666 10.017 0.000108302C10.9843 -0.000730878 11.9516 0.00304543 12.9185 0.0206682C14.2138 0.0445848 15.333 0.523756 16.2806 1.39524C17.2269 2.26547 17.7949 3.34298 17.9627 4.62189C17.9895 4.82539 17.9971 5.03267 17.9975 5.23827C18.0008 6.4962 17.9991 7.75329 17.9991 9.0108ZM7.38817 8.4968C7.38817 8.20519 7.37223 7.92868 7.39236 7.65427C7.41711 7.31775 7.44228 6.97663 7.52072 6.65019C7.71536 5.8387 8.17216 5.22946 8.97671 4.92693C9.38696 4.77252 9.8144 4.71798 10.2515 4.72847C10.9117 4.74441 11.5288 4.93281 12.1311 5.18666C12.2318 5.22904 12.27 5.29827 12.2704 5.39561C12.2717 6.0208 12.2704 6.64599 12.2725 7.27118C12.2729 7.36139 12.2385 7.38867 12.1479 7.38783C11.7742 7.38447 11.4004 7.38489 11.0271 7.39286C10.892 7.3958 10.7561 7.41636 10.6236 7.44279C10.4746 7.47258 10.3903 7.52587 10.4046 7.71511C10.4126 7.81916 10.4021 7.92448 10.4017 8.02938C10.4008 8.18547 10.4012 8.34155 10.4012 8.50687C11.0594 8.50687 11.7041 8.50687 12.3581 8.50687C12.1802 9.39305 12.0045 10.2687 11.827 11.1532C11.3505 11.1532 10.8811 11.1532 10.4126 11.1532C10.4126 12.9017 10.4126 14.6396 10.4126 16.3868C10.4562 16.3868 10.4939 16.3868 10.5317 16.3868C11.1815 16.3864 11.8308 16.3893 12.4806 16.3838C12.7104 16.3822 12.9424 16.375 13.1698 16.3448C14.1186 16.2194 14.9164 15.8035 15.531 15.0634C16.1073 14.3694 16.3653 13.5592 16.3645 12.6617C16.3624 10.1852 16.3661 7.70881 16.3552 5.23281C16.351 4.29461 16.0264 3.46634 15.3821 2.78115C14.6463 1.99861 13.7226 1.63147 12.6559 1.63063C10.2741 1.62896 7.89238 1.63483 5.51061 1.63903C4.90867 1.64029 4.32225 1.72588 3.76854 1.97722C2.75593 2.43667 2.05332 3.16843 1.76053 4.26146C1.63343 4.7356 1.62378 5.21981 1.62378 5.70611C1.6242 7.99749 1.61958 10.2885 1.62336 12.5798C1.62378 12.8438 1.64559 13.1115 1.69299 13.3712C1.87043 14.3392 2.34024 15.1314 3.15401 15.7024C3.83482 16.1803 4.60203 16.3771 5.42378 16.3843C6.03495 16.3897 6.64612 16.3843 7.25729 16.383C7.2875 16.383 7.3177 16.3788 7.35252 16.3763C7.35503 16.3427 7.35923 16.3154 7.35923 16.2882C7.35965 14.6048 7.35881 12.921 7.3609 11.2376C7.3609 11.1591 7.33741 11.136 7.25981 11.1369C6.96283 11.1411 6.66626 11.1385 6.36927 11.1381C6.33278 11.1381 6.29628 11.1339 6.26147 11.1322C6.26147 10.2486 6.26147 9.3771 6.26147 8.4968C6.6306 8.4968 6.99261 8.4968 7.38817 8.4968ZM9.62857 16.3813C9.62857 14.3816 9.62857 12.3885 9.62857 10.3841C9.83957 10.3841 10.0413 10.385 10.2431 10.3841C10.5049 10.3829 10.767 10.3816 11.0288 10.3774C11.1643 10.3753 11.2003 10.3443 11.2293 10.215C11.2616 10.0724 11.2939 9.92928 11.3228 9.78578C11.3572 9.61417 11.3878 9.44172 11.4218 9.25962C10.8157 9.25962 10.2267 9.25962 9.64116 9.25962C9.63528 9.24577 9.63025 9.2399 9.63025 9.2336C9.63109 8.70953 9.61473 8.18505 9.6378 7.66224C9.66171 7.11509 9.96877 6.77523 10.4927 6.67201C10.6559 6.64012 10.8249 6.63466 10.9919 6.62249C11.1643 6.60991 11.3371 6.60403 11.5162 6.5948C11.5162 6.36613 11.5162 6.14962 11.5162 5.93353C11.5162 5.78373 11.4885 5.74765 11.3459 5.6994C10.9419 5.56345 10.5258 5.50513 10.1009 5.50345C9.76029 5.50219 9.42093 5.51729 9.11472 5.69017C8.49893 6.03759 8.22124 6.60445 8.17133 7.2758C8.12518 7.89469 8.14196 8.5182 8.13106 9.13961C8.13022 9.1799 8.13106 9.22018 8.13106 9.27304C7.74976 9.27304 7.38523 9.27304 7.01945 9.27304C7.01945 9.64816 7.01945 10.0103 7.01945 10.3858C7.06224 10.3858 7.09957 10.3858 7.13691 10.3858C7.42341 10.3858 7.70949 10.3858 7.99599 10.3858C8.13903 10.3858 8.13903 10.3858 8.13903 10.5251C8.13903 12.4321 8.13903 14.3392 8.13945 16.2466C8.13945 16.2903 8.14322 16.3339 8.14532 16.3809C8.64155 16.3813 9.12646 16.3813 9.62857 16.3813Z" />
    </svg>
  )
}

FacebookIconOutlined.propTypes = {
  variant: string,
}

FacebookIconOutlined.defaultProps = {
  variant: '',
}

export default FacebookIconOutlined
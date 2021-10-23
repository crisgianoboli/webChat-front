import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(({ palette }) => ({
  selected: {
    boxShadow: props =>
      props.isSelect
        ? `0px 0px 0px 3px ${palette.primary.main}`
        : `2px 2px 3px 3px rgba(0,0,0,0.2)`,
    borderRadius: '5px',
  },
}))

const LigthIcon = ({ isSelect }) => {
  const { selected } = useStyles({ isSelect })

  return (
    <svg
      className={selected}
      width="88"
      height="57"
      viewBox="0 0 88 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="88" height="57" rx="5" fill="#0E1621" />
      <circle cx="77.4093" cy="43.4093" r="6.40927" fill="#D8D8D8" />
      <circle
        cx="77.4093"
        cy="43.4093"
        r="6.24903"
        stroke="#C5DFE9"
        stroke-opacity="0.4"
        stroke-width="0.320463"
      />
      <path
        d="M79.0706 46.9783C78.2689 46.9881 77.4637 47.0299 76.6675 46.9619C75.2957 46.8445 74.5466 45.0762 75.3137 43.8155C75.4562 43.5815 75.4521 43.4417 75.3137 43.2069C74.9167 42.5407 74.9063 41.8154 75.2273 41.1238C75.5538 40.4202 76.1182 40.0336 76.8577 40.012C77.5806 39.991 78.5871 40.012 79.3093 40H79.3681C79.3604 40.3051 79.3681 40.9473 79.3681 41.2883C78.5027 41.2883 77.7245 41.2763 76.9469 41.292C76.359 41.304 76.0172 41.9575 76.3098 42.4816C76.4593 42.7486 76.6841 42.863 76.9732 42.86C77.6608 42.854 78.3484 42.8682 79.036 42.854C79.2864 42.8488 79.3916 42.9288 79.3729 43.2107C79.3542 43.4925 79.3687 43.8006 79.3687 44.1363C79.2221 44.146 79.1017 44.1595 78.9814 44.1602C78.3166 44.1602 77.6518 44.1602 76.9871 44.1602C76.5236 44.1602 76.2261 44.4526 76.213 44.9027C76.1999 45.3528 76.5174 45.7125 76.9739 45.7252C77.6152 45.7401 78.2571 45.7297 78.8991 45.7297H79.3632C79.3632 45.9495 79.3632 46.1619 79.3632 46.3705V46.9769L79.0706 46.9783Z"
        fill="#002B5A"
      />
      <path
        d="M8.06714 14.6257C8.06714 12.6604 9.66037 11.0671 11.6257 11.0671H65.3743C67.3396 11.0671 68.9329 12.6604 68.9329 14.6257V42.9329H11.6257C9.66037 42.9329 8.06714 41.3396 8.06714 39.3743V14.6257Z"
        fill="#182533"
        stroke="#002856"
        stroke-width="0.134286"
      />
      <rect x="14" y="17" width="48" height="2" fill="#9C9C9C" />
      <rect x="14" y="22" width="48" height="2" fill="#9C9C9C" />
      <rect x="14" y="27" width="48" height="2" fill="#9C9C9C" />
      <rect x="14" y="32" width="48" height="2" fill="#9C9C9C" />
      <rect x="14" y="37" width="19" height="2" fill="#9C9C9C" />
    </svg>
  )
}

export default LigthIcon

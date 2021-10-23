import { string } from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded'
import { Avatar, Badge } from '@material-ui/core'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles(({ palette, spacing }) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: spacing(1),
    },
  },
  avatar: {
    border: `1px solid ${palette.primary.light}`,
  },
  small: {
    width: spacing(3),
    height: spacing(3),
  },
  medium: {
    width: spacing(5),
    height: spacing(5),
  },
  large: {
    width: spacing(7),
    height: spacing(7),
  },
  badge: {
    '&::after': {
      backgroundColor: props => props.color,
      color: palette.primary.white,
      position: 'absolute',
      width: '30%',
      height: '30%',
      borderRadius: '50%',
      border: '1px solid currentColor',
      content: '""',
      bottom: 0,
      right: 0,
      display: props => (props.displayBadge ? 'block' : 'none'),
    },
  },
  empty: {
    border: `1px solid ${palette.primary.light}`,
    borderRadius: 50,
  },
  avatarChild: {
    backgroundColor: palette.primary.white,
  },
  avatarDefault: {
    color: palette.primary.main,
  },
}))

export default function ImageAvatars(props) {
  const classes = useStyles(props)
  const { t } = useTranslation()
  const { size, image } = props

  return (
    <div className={classes.root}>
      <Badge
        overlap="circle"
        variant="dot"
        badgeContent=" "
        className={classes.badge}
      >
        {image ? (
          <Avatar
            alt={t('FotoPerfil')}
            src={image}
            className={`${classes[size]} ${classes.avatar} `}
          />
        ) : props.children ? (
          <Avatar
            alt={t('FotoPerfil')}
            src={image}
            className={`${classes[size]} ${classes.avatar} ${classes.avatarChild} `}
          >
            {props.children}
          </Avatar>
        ) : (
          <Avatar
            alt={t('FotoPerfil')}
            className={`${classes[size]} ${classes.avatar} ${classes.avatarChild} `}
          >
            <AccountCircleRoundedIcon
              className={`${classes[size]} ${classes.avatarDefault}`}
            />
          </Avatar>
        )}
      </Badge>
    </div>
  )
}

ImageAvatars.propTypes = {
  size: string,
  image: string,
}

ImageAvatars.defaultProps = {
  size: 'small',
  image: '',
}

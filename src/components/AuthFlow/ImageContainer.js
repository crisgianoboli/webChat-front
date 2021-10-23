import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import EprionELogoIcon from '../../assets/EpironLogo'

const useStyles = makeStyles(({ palette }) => ({
  imgContainer: {
    borderRadius: '20px',
    border: `1px solid ${palette.primary.white}`,
    background: palette.primary.white,
  },
  logo: {
    height: '87px',
  },
}))

const ImageContainer = () => {
  const classes = useStyles()

  return (
    <Box
      className={classes.imgContainer}
      width={345}
      height={143}
      display="flex"
      alignItems="center"
      justifyContent="center"
      alignSelf="flex-end"
    >
      <Box>
        <EprionELogoIcon variant={classes.logo} />
      </Box>
    </Box>
  )
}

export default ImageContainer

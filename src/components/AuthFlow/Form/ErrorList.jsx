import { Box, makeStyles } from '@material-ui/core'
import XIcon from '../../../assets/XIcon'
import GreenCheckedIcon from '../../../assets/GreenCheckedIcon'

const useStyles = makeStyles({
  errorList: {
    fontSize: 12,
    fontFamily: 'Poppins',
    margin: '10px',
  },
})

export default function ErrorList({ errorList, icon }) {
  const classes = useStyles()

  return (
    <>
      {errorList &&
        errorList.map(({ label, id }) => (
          <Box key={id} display="flex" alignItems="center">
            {icon[id] ? <GreenCheckedIcon /> : <XIcon />}
            <Box component="span" className={classes.errorList}>
              {label}
            </Box>
          </Box>
        ))}
    </>
  )
}

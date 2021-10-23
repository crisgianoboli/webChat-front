import { Box } from '@material-ui/core'
import InboxCell from './InboxCell'

function StateCell({ StateName }) {
  return (
    <>
      <InboxCell align="left">
        <Box
          display="flex"
          alignItems="center"
          fontSize="12px"
          lineHeight="normal"
          textAlign="initial"
        >
          {StateName}
        </Box>
      </InboxCell>
    </>
  )
}

export default StateCell

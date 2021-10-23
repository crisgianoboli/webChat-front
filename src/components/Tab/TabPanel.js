import { node, any } from 'prop-types'

import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core'

const useStyle = makeStyles(() => ({
  scroll: {
    overflowX: 'auto',
    padding: 0,
  },
}))

function TabPanel(props) {
  const { children, value, index, ...other } = props
  const { scroll } = useStyle()
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box className={scroll} p={3}>
          {children}
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: node,
  index: any.isRequired,
  value: any.isRequired,
}

export default TabPanel

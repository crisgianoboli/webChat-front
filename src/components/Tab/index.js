import { useState } from 'react'
import { arrayOf, string, shape, node } from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import TabPanel from './TabPanel'

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  }
}

const useStyles = makeStyles(({ palette }) => ({
  root: {
    borderRadius: '6px',
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    lineHeight: '14px',
  },
  bar: {
    boxShadow: 'none',
    position: 'static',
  },
  tabPanel: {
    padding: 0,
  },
}))

function SimpleTab({ labels, variant }) {
  const { root, bar, tabPanel } = useStyles()
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    event.preventDefault()
    setValue(newValue)
  }
  return (
    <div className={root}>
      <AppBar className={bar}>
        <Tabs
          className={variant}
          variant="fullWidth"
          value={value}
          onChange={handleChange}
        >
          {labels.map(({ label }, i) => (
            <Tab key={i} label={label} {...a11yProps(i)} component="a" />
          ))}
        </Tabs>
      </AppBar>
      {labels.map(({ Component }, i) => (
        <TabPanel className={tabPanel} key={i} value={value} index={i}>
          <Component />
        </TabPanel>
      ))}
    </div>
  )
}

SimpleTab.propTypes = {
  labels: arrayOf(
    shape({
      label: string.isRequired,
      Component: node.isRequired,
    })
  ).isRequired,
}

export default SimpleTab

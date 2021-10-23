import { Box } from '@material-ui/core'
import { arrayOf, func, number, shape, string } from 'prop-types'
import Dot from '../Dot'

const DotsContainer = ({ steps, activeStep, onChangeActive }) => {
  return (
    <Box display="flex">
      {steps.map(({ key }, index) => {
        return (
          <Dot
            onChangeActive={onChangeActive}
            index={index}
            activeStep={activeStep}
            key={`dot-${index}`}
          />
        )
      })}
    </Box>
  )
}

DotsContainer.propsType = {
  steps: arrayOf(
    shape({
      key: number,
      label: string,
    })
  ).isRequired,
  onChangeActive: func.isRequired,
  activeStep: number.isRequired,
}

DotsContainer.defaultProps = {
  steps: [],
}

export default DotsContainer

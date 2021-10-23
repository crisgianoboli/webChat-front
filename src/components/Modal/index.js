import { useContext } from 'react'
import { node, string, bool, func } from 'prop-types'
import clsx from 'clsx'

import { Modal, IconButton, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CloseIcon from '@material-ui/icons/Close'

import { Context } from '../../context'

const useStyles = makeStyles(() => ({
  modal: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    '& :focus': {
      outline: 'none',
    },
  },
  titleContainer: {
    marginLeft: props => (props.alignTitle === 'center' ? '35%' : 0),
    textTransform: props => props.textTransform,
    fontWeight: props => (props.textTransform === 'capitalize' ? 700 : 400),
    fontSize: props =>
      props.textTransform === 'capitalize' ? '1.75rem' : '0.875rem',
  },
  closeIcon: {
    padding: '6px',
  },
}))

const SimpleModal = ({
  title,
  children,
  open,
  width,
  titleColor,
  bgTitle,
  bgColor,
  toggleModal,
  customToggle,
  alignTitle,
  textTransform,
  padding,
  height,
  className,
}) => {
  const { dispatch } = useContext(Context)
  const { titleContainer, modal, closeIcon } = useStyles({
    alignTitle,
    textTransform,
  })

  const handleClick = () => {
    if (toggleModal) {
      dispatch(toggleModal(open))
    } else {
      customToggle()
    }
  }

  return (
    <Modal className={modal} open={open} disableAutoFocus disableEnforceFocus>
      <Box
        className={clsx(className)}
        bgcolor={bgColor}
        width={width}
        height={height}
        borderRadius="22px"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems={alignTitle}
          padding="10px 25px"
          bgcolor={bgTitle}
          borderRadius="22px 22px 0 0"
        >
          <Box className={titleContainer} component="span" color={titleColor}>
            {title}
          </Box>
          <IconButton onClick={handleClick} className={closeIcon}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
        <Box padding={padding}>{children}</Box>
      </Box>
    </Modal>
  )
}

SimpleModal.propTypes = {
  width: string,
  title: string,
  open: bool.isRequired,
  children: node.isRequired,
  titleColor: string,
  bgTitle: string,
  toggleModal: func,
  alignTitle: string,
  textTransform: string,
  padding: string,
  height: string,
  bgColor: string,
}

SimpleModal.defaultProps = {
  width: '400px',
  title: '',
  titleColor: 'primary.main',
  bgColor: 'primary.white',
  alignTitle: 'center',
  textTransform: 'uppercase',
  padding: '30px',
}

export default SimpleModal

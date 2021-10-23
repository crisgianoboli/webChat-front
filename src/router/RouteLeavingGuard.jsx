/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { Prompt } from 'react-router-dom'
import LeaveModal from './LeaveModal'

const RouteLeavingGuard = ({ when, navigate, shouldBlockNavigation }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [lastLocation, setLastLocation] = useState(null)
  const [confirmedNavigation, setConfirmedNavigation] = useState(false)
  useEffect(() => {
    if (confirmedNavigation && lastLocation) {
      navigate(lastLocation.pathname)
    }
  }, [confirmedNavigation, lastLocation])

  const closeModal = () => {
    setModalVisible(false)
  }

  const handleBlockedNavigation = nextLocation => {
    if (!confirmedNavigation && shouldBlockNavigation(nextLocation)) {
      setModalVisible(true)
      setLastLocation(nextLocation)
      return false
    }
    return true
  }

  const handleConfirmNavigationClick = () => {
    setModalVisible(false)
    setConfirmedNavigation(true)
  }

  return (
    <>
      <Prompt when={when} message={handleBlockedNavigation} />
      <LeaveModal
        modalOpen={modalVisible}
        handleCancel={closeModal}
        handleConfirm={handleConfirmNavigationClick}
      />
    </>
  )
}

export default RouteLeavingGuard

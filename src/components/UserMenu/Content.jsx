import BusinessUnit from './BusinessUnit'
import Profile from './Profile'
import UserCases from './UserCases'
import UserConfig from './UserConfig'
import Version from './Version'
import Footer from './Footer'

const ContentDrawer = ({ userSession, handleCloseSession, handleClose }) => {
  const [account] = userSession.AccountAssigned

  return (
    <>
      <Profile name={userSession.PersonFullName} onClick={handleCloseSession} />
      <BusinessUnit account={account.AccountName} />
      <UserCases userSession={userSession} />
      <UserConfig handleClose={handleClose} />
      <Version />
      <Footer />
    </>
  )
}

export default ContentDrawer

import React, { useEffect } from "react"
import {fetchUser} from 'service/actions/user'
import {connect} from 'react-redux'

const UserPage = ({dispatch, loading, user, hasErrors}) => {
  useEffect(() => {
    dispatch(fetchUser())
  }, [dispatch])

  // Show loading, error, or success state
  const renderUser = () => {
    if (loading) return <p>Loading user...</p>
    if (hasErrors) return <p>Unable to display user.</p>
    return <span className="text-orange-500 text-md">Bonjour, {user.name}</span>
  }

  return (
    <>
    
        <div className="user w-full mb-12 px-4 mt-10">
          {renderUser()}
        </div>
 
	</>
  )
}

const mapStateToProps = (state) => ({
  loading: state.user.loading,
  user: state.user.user,
  hasErrors: state.user.hasErrors,
})

export default connect(mapStateToProps)(UserPage)
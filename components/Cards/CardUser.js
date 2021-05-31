import React, { useEffect } from "react"
import {fetchUser} from '../../service/actions'
import {connect} from 'react-redux'
import useLoggedUser from "../../service/hooks/useLoggedUser";

const CardUser = ({dispatch, loading, hasErrors}) => {

  const {
    isAuthentificated,
    loggedUser
  } = useLoggedUser();

  useEffect(() => {
    if(!isAuthentificated) {
      dispatch(fetchUser())
    }
  }, [dispatch])

  // Show loading, error, or success state
  const renderUser = () => {
    if (loading) return <p>Loading user...</p>
    if (hasErrors) return <p>Unable to display user.</p>
    return <span className="text-orange-500 text-md">Bonjour, {loggedUser?.loggedUser?.name}</span>
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
  loading: state.user?.loading,
  loggedUser: state.loggedUser?.user,
  hasErrors: state.user?.hasErrors,
})

export default connect(mapStateToProps)(CardUser)

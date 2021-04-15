import React from "react";
import Router from "next/router";
import useLoggedUser from 'service/hooks/useLoggedUser';
const UserDropdown = () => {
  const {
    loggedUser,
	logout
  } = useLoggedUser();  
  
   async function onSignOut() {
    await logout();
	Router.push("/");
  }
  
  return (
    <>
      <button
						className="bg-gray-700 text-white active:bg-gray-700 text-sm uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
						type="submit"
						onClick = {onSignOut}
					>
					déconnecter	<i class="fas fa-sign-out-alt"></i>
	   </button>
      
    </>
  );
};

export default UserDropdown;

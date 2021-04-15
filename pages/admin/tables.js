import React from "react";
import UsersPage from "./usersPage";
import Admin from "layouts/Admin.js";

export default function Tables() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
		<div className="w-full mb-12 px-4">
          <UsersPage />
        </div>
        <div className="w-full mb-12 px-4">
        </div>
      </div>
    </>
  );
}

Tables.layout = Admin;

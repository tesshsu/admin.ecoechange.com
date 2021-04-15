import React from "react";
import PostsPage from "./annoncesPage";
import Admin from "layouts/Admin.js";

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-wrap bg-white">
        <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
          <PostsPage />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
Dashboard.layout = Admin;
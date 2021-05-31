import React from "react";
import Admin from "../../layouts/Admin.js";
import IdeasList from "../../components/Ideas/IdeasList";
import {connect} from "react-redux";

const Dashboard = () => {


    return (
        <>
            <Admin>
                <div className="flex flex-wrap bg-white">
                    <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
                        <IdeasList/>
                    </div>
                </div>
            </Admin>
        </>
    );
}

const mapStateToProps = (state) => ({
    loading: state.ideasReducer.loading,
    ideas: state.ideasReducer.ideas,
    current_page: state.ideasReducer.current_page,
    from: state.ideasReducer.from,
    to: state.ideasReducer.to,
    per_page: state.ideasReducer.per_page,
    last_page: state.ideasReducer.last_page,
    total: state.ideasReducer.total,
    hasErrors: state.ideasReducer.hasErrors
});

export default connect(mapStateToProps)(Dashboard);


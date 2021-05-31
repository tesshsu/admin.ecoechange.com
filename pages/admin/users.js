import React, {useEffect, useState} from "react"
import {fetchUsers} from '../../service/actions/users';
import {connect} from 'react-redux'
import Admin from "../../layouts/Admin.js";
import Pagination from '../../components/Table/Pagination';
import {useRouter} from "next/router";
import {UserTableEntry} from '../../components/Users/UserTableEntry'

const Users = ({dispatch, loading, users, current_page, from, to, per_page, last_page, total, hasErrors}) => {
    const [search, setSearch] = useState("");
    const [filteredUsers, setFilteredUsers] = useState([]);

    const {query} = useRouter();

    useEffect(() => {
        dispatch(fetchUsers(query.page, query.perPage))

    }, [dispatch])

    useEffect(() => {
        setFilteredUsers(
            users?.filter((user) =>
                user.name.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search, users]);


    const renderUsers = () => {
        if (loading) return <p>Loading users...</p>
        if (hasErrors) return <p>Unable to display users.</p>
        return filteredUsers?.map((user, idx) => <UserTableEntry key={idx} user={user} {...user}/>)
    }

    return (
        <>
            <Admin>
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                    <div className="rounded-t mb-0 px-4 py-3 border-0">
                        <div className="flex flex-wrap items-center">
                            <div className="relative w-full max-w-full flex-grow flex-1">
                                <h3 className="font-semibold text-base text-center text-gray-800">
                                    Utilisateurs
                                </h3>
                                <div className="relative flex w-full flex-wrap items-stretch">
				  <span
                      className="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
					<i className="fas fa-search"></i>
				  </span>
                                    <input
                                        type="text"
                                        placeholder="Search here..."
                                        className="py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"
                                        onChange={(e) => setSearch(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="block w-full overflow-x-auto">
                        {/* Projects table */}
                        <table className="items-center w-full bg-transparent border-collapse">
                            <thead>
                            <tr>
                                <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                                    Id | Nom <i className="fas fa-user"></i>
                                </th>
                                <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                                    email <i className="fas fa-envelope-open-text"></i>
                                </th>
                                <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                                    Phone <i className="fas fa-phone-square"></i>
                                </th>
                                <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                                    date_cree <i className="fas fa-calendar-alt"></i>
                                </th>
                                <th className="px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                                    action <i className="fas fa-cog"></i>
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {renderUsers()}
                            </tbody>
                        </table>
                        <Pagination transparent
                                    current_page={current_page}
                                    from={from}
                                    to={to}
                                    per_page={per_page}
                                    last_page={last_page}
                                    total={total}
                        />
                    </div>
                </div>
            </Admin>
        </>
    );
}


const mapStateToProps = (state) => ({
    loading: state.usersReducer?.loading,
    users: state.usersReducer?.users,
    current_page: state.usersReducer?.current_page,
    from: state.usersReducer?.from,
    to: state.usersReducer?.to,
    per_page: state.usersReducer?.per_page,
    last_page: state.usersReducer?.last_page,
    total: state.usersReducer?.total,
    hasErrors: state.usersReducer?.hasErrors,
})
export default connect(mapStateToProps)(Users)
Users.layout = Admin;

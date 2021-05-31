import React from "react"
import Moment from 'react-moment';
import useUsers from '../../service/hooks/useUsers';

export const UserTableEntry = ({user}) => {
	const {
		deleteUserList
	} = useUsers();

	const id = user.id
	const handleDelete = async (id) => {
		try {
			//await deleteUserList(id);
			alert(id + ' été bien bloqué dans le backend!');
		} catch (err) {
			console.log(err);
		}
	}

	return (
		<>
			<tr>
				<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
					{user?.id} | {user?.name}
				</td>
				<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
					<a href={`mailto:${user?.email}`}>{user?.email}</a>
				</td>
				<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
					{user?.phone}
				</td>
				<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
					<Moment format="DD/MM/YYYY">{user?.created_at}</Moment>
				</td>
				<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
					<a href="#"
						//onClick={(e) => handleDelete(user?.id)}
					>
						<i className="fas fa-ban"> </i>
					</a>
				</td>
			</tr>
		</>
	)
}


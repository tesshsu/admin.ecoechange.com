import React from 'react'
import Moment from 'react-moment';
import ENVS from '../../environment';
import useLoggedUser from "../../service/hooks/useLoggedUser";
import useAnnonces from "../../service/hooks/useAnnonces";

export const Annonce = ({dispatch,loading,post}) => {
	const {isAuthentificated, loggedUser} = useLoggedUser();
	const {
		deleteIdea
	} = useAnnonces();
	if (loading) {
		return <p>Loading annonces...</p>;
	}

	let annonceId = post.id
	const handleDelete = async (id) => {
		try {
			if (confirm('Voulez vous vraiment supprimer cette annonce?')) {
				await deleteIdea(id, {});
			}
		} catch (err) {
			console.log(err);
		}
	}

  return (
    <>
  <tr>
	<th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center">
	  {post.id} - {post.owner.name}
	  <div className="text-xl text-orange-500 ml-1">
	    {(post?.premium) && (
		   <i class="fas fa-money-check-alt"></i>
		)}
	  </div>
	</th>
	<td className="border-t-0 bg-gray-100 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
	   {post?.category}
	</td>
	<td className="border-t-0 bg-gray-100 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
	   {post?.sub_category} - {post?.usage}
	</td>
	<td className="border-t-0 bg-gray-100 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
	  {post?.experience_eco} - {post?.shop_address}
	</td>
	<td className="border-t-0 bg-gray-100 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
	  {post?.postal_code}
	</td>
	<td className="border-t-0 bg-gray-100 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
	   <Moment format="DD/MM/YYYY">{post?.expire_at}</Moment>
	</td>
	<td className="border-t-0 bg-gray-100 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
	  {post?.owner_type}
	</td>
	<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
	  <a target="_blank" href={post?.own_website}>{post?.own_website}</a>
	</td>
	<td className="border-t-0 bg-gray-100 px-6 align-middle border-l-0 border-r-0 text-xl whitespace-no-wrap p-4">
	  <a href={`mailto:${post?.owner.email}`}><i class="fas fa-envelope-square"></i></a>
	</td>
	<td className="actionPart border-t-0 bg-gray-100 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-right">
		<a target="_blank" href={'/annonce?id=' + annonceId}><i class="fas fa-link"></i></a>
		 <a href="#"
			//onClick={(e) => handleDelete(post?.id)}
				>
				 <i class="fas fa-trash"></i>
		 </a>
	</td>
  </tr>
	</>
  )
}

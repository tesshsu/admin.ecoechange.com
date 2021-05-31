import React, { useState, useEffect } from "react"
import {fetchIdeas} from '../../service/actions';
import {connect} from 'react-redux'
import Admin from "../../layouts/Admin";
import Pagination from '../../components/Table/Pagination';
import {Router, useRouter }  from "next/router";
import {IdeaTableEntry} from "./IdeaTableEntry";

const IdeasList = ({dispatch,
                       loading,
                       ideas,
                       current_page,
                       from, to,
                       per_page,
                       last_page,
                       total,
                       hasErrors}) => {
  const [search, setSearch] = useState("");
  const [filteredIdeas, setFilteredIdeas] = useState([]);

  useEffect(() => {
        dispatch(fetchIdeas(router.query.page, router.query.perPage))
    }, [dispatch])

  useEffect(() => {
     setFilteredIdeas(
      ideas?.filter((idea) =>
        idea.category.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, ideas]);

  const router = useRouter();

  const renderIdeas= () => {
    if (loading) return <p>Loading ideas...</p>
    if (hasErrors) return <p>Unable to display posts.</p>
    return filteredIdeas?.map((idea, idx) => <IdeaTableEntry key={idx} post={idea} {...idea} />)
  }
  return (
    <>
     <div className="flex flex-wrap">
        <div className="rounded-t mb-0 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
			    <div className="relative flex w-full flex-wrap items-stretch">
				  <span className="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
					<i className="fas fa-search"> </i>
				  </span>
				  <input
					type="text"
					placeholder="Search here..."
					className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"
					onChange={(e) => setSearch(e.target.value)}
				  />
                </div>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Ideas table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className="px-6 align-middle bg-gray-100 border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left "
                >
                  Id - nom de vendeur <i className="fas fa-user"></i>
                </th>
				<th
                  className= "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left "
                >
                    category <i className="fas fa-align-justify"></i>
                </th>
                <th
                  className= "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left "
                >
                    sub_category et details <i className="far fa-id-badge"></i>
                </th>
                <th
                  className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left "
                >
                    experience_eco / autre details <i className="fas fa-hand-holding-heart"></i>
                </th>
                <th
                  className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
                >
                    postal_code <i className="fas fa-map-marker-alt"></i>
                </th>
                <th
                  className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left "
                >
                 valable jusqu'au <i className="far fa-calendar-alt"></i>
                </th>
                <th
                  className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left "
                >
				 statu_vendeur <i className="fas fa-user-tie"></i>
				</th>
				<th
                  className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left "
                >
                    own_website <i className="fas fa-store"></i>
				</th>
				<th
                  className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left "
                >
				 email <i className="fas fa-envelope-open-text"></i>
				</th>
				<th
                  className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left "
                >
				 <i className="fas fa-edit"></i>
				</th>
              </tr>
            </thead>
            <tbody>
              {renderIdeas()}
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
	</>
  )
}

const mapStateToProps = (state) => ({
    loading: state.ideasReducer.loading,
    ideas: state.ideasReducer.ideas,
    current_page: state.ideasReducer.current_page,
    from: state.ideasReducer.from,
    to:  state.ideasReducer.to,
    per_page: state.ideasReducer.per_page,
    last_page: state.ideasReducer.last_page,
    total: state.ideasReducer.total,
    hasErrors: state.ideasReducer.hasErrors
})

export default connect(mapStateToProps)(IdeasList);


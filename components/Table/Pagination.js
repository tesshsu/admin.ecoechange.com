import React from "react";
import {create} from "../../service/actions/favorites";
import {useRouter} from "next/router";



export default function Pagination(props) {
	const router = useRouter();

	const nb_pagination_selectors = props.nb_pagination_selectors ? props.nb_pagination_selectors : 3;

	const nb_previous_selectors = Math.floor(nb_pagination_selectors / 2);
	const items = Array.from({ length: nb_pagination_selectors },
		(_, i) => Math.max(1,
			Math.min((props.last_page  ? props.last_page : 1)- nb_pagination_selectors + 1,
				(props.current_page  ? props.current_page : 1) - nb_previous_selectors)
		) + i);

	const onClickPage = (e, page) => {
		e.preventDefault();
		const currentPath = router.pathname;
		const currentQuery = router.query;
		currentQuery.page = page;
		router.push({
			pathname: currentPath,
			query: currentQuery,
		});
	};

	return (
		<>
			<div className="py-2">
				<nav className="block">
					<ul className="flex pl-0 rounded list-none flex-wrap">
						<li>
							<button
								onClick={(e) => onClickPage(e, 1)}
								className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-gray-500 bg-white text-gray-500">
								<i className="fas fa-angle-double-left -mr-px"></i>
							</button>
						</li>
						<li>
							<button
								onClick={(e) => onClickPage(e,(props.current_page  ? props.current_page : 1) -1)}
								className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-gray-500 bg-white text-gray-500">
								<i className="fas fa-chevron-left -ml-px"> </i>
							</button>
						</li>
						{items.map((num) => (
							<li key={num}>
								<button
									onClick={(e) => onClickPage(e, num)}
									className={`first:ml-0 px-4 text-md font-semibold flex w-8 h-8 mx-1 p-0
									rounded-full items-center justify-center leading-tight relative
									border border-solid border-gray-500 text-gray-800
									${num === (props.current_page  ? props.current_page : 1)  ? 'bg-green-500' : 'bg-gray-500'}`} >
									{num}
								</button>
							</li>
						))}
						<li>
							<button
								onClick={(e) => onClickPage(e,(props.current_page  ? props.current_page : 1)  +1)}
								className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-gray-500 bg-white text-gray-500">
								<i className="fas fa-chevron-right -mr-px"></i>
							</button>
						</li>
						<li>
							<button
								onClick={(e) => onClickPage(e,props.last_page  ? props.last_page : 1)}
								className="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-gray-500 bg-white text-gray-500">
								<i className="fas fa-angle-double-right -mr-px"> </i>
							</button>
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
}

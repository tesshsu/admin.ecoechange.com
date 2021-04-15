import React from "react";
import PropTypes from "prop-types";
import TableDropdown from "components/Dropdowns/TableDropdown.js";

const annonces = [
  { id: "1", marque: "Renalut", model: "Grand Scenic IV", vendeur_name: "Tess", date_mit_annonce:"01/01/2021" },
  { id: "1", marque: "Renalut", model: "Grand Scenic IV", vendeur_name: "Tess", date_mit_annonce:"01/01/2021" },
  { id: "1", marque: "Renalut", model: "Grand Scenic IV", vendeur_name: "Tess", date_mit_annonce:"01/01/2021" },
  { id: "1", marque: "Renalut", model: "Grand Scenic IV", vendeur_name: "Tess", date_mit_annonce:"01/01/2021" },
  { id: "1", marque: "Renalut", model: "Grand Scenic IV", vendeur_name: "Tess", date_mit_annonce:"01/01/2021" },
  { id: "1", marque: "Renalut", model: "Grand Scenic IV", vendeur_name: "Tess", date_mit_annonce:"01/01/2021" }
];

export default function CardAnnonceTable({ color }) {
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-gray-800 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-gray-800" : "text-white")
                }
              >
                Card Tables
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Annonces table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "bg-gray-700 text-gray-300 border-gray-600")
                  }
                >
                  Id
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "bg-gray-700 text-gray-300 border-gray-600")
                  }
                >
                  marque
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "bg-gray-700 text-gray-300 border-gray-600")
                  }
                >
                  model
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "bg-gray-700 text-gray-300 border-gray-600")
                  }
                >
                  vendeur_name
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "bg-gray-700 text-gray-300 border-gray-600")
                  }
                >
                  date_mit_annonce
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "bg-gray-700 text-gray-300 border-gray-600")
                  }
                ></th>
              </tr>
            </thead>
            <tbody>
              {annonces.map(annonce => (
				  <tr>
					<th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left flex items-center">
					{annonce.id}
					</th>
					<td className="border-t-0 bg-gray-100 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
					  {annonce.marque}
					</td>
					<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
					  {annonce.model}
					</td>
					<td className="border-t-0 bg-gray-100 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
					  <div className="flex">
						{annonce.vendeur_name}
					  </div>
					</td>
					<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
					  <div className="flex items-center">
						{annonce.date_mit_annonce}         
					  </div>
					</td>
					<td className="border-t-0 bg-gray-100 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-right">
					  <TableDropdown />
					</td>
				  </tr>
               ))}
             
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

CardAnnonceTable.defaultProps = {
  color: "light",
};

CardAnnonceTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-gray-300 pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold">ecoechange.com</h4>
              <h5 className="text-lg mt-0 mb-2 text-gray-700">
                Sécuriser au maximum l'achat de votre véhicule.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <button
                  className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
				  type="button"
                >
                  <a href="https://ecoechange.com/"  target="_blank">
				   <i className="fab fa-twitter"></i>
				  </a>
                </button>
                <button
                  className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <a href="https://ecoechange.com/"  target="_blank">
				   <i className="fab fa-facebook-square"></i>
				  </a>
                </button>
                <button
                    className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                >
                  <a href="https://ecoechange.com/"  target="_blank">
				   <i className="fab fa-instagram"></i>
				  </a>
                </button>
                <button
                  className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <a href="https://ecoechange.com/"  target="_blank">
				   <i className="fab fa-youtube"></i>
				  </a>
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                    À PROPOS
                  </span>
                  <ul className="list-unstyled">
                    <li>
					  <Link href="/footer/about">
						  <a
							className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
							href="#"
						  >
							Qui sommes-nous
						  </a>
					  </Link>
                    </li>
                    <li>
                      <Link href="/footer/contact">
						  <a
							className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
							href="#"
						  >
							contacts
						  </a>
					  </Link>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-2">
                  <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                    Autre
                  </span>
                  <ul className="list-unstyled">
                    <li>
					  <Link href="/footer/policy">
						  <a
							className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
							href="#"
						  >
							Politique de confidentialité
						  </a>
					  </Link>
                    </li>
                    <li>
					  <Link href="/footer/data_personal">
						  <a
							className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
							href="#"
						  >
							Données personnelles
						  </a>
					   </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-400" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-600 font-semibold py-1">
                Copyright © {new Date().getFullYear()} ecoechange.com                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

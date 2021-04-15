import React from "react";
import { createPopper } from "@popperjs/core";

const NotificationDropdown = (props) => {
  const [popoverShow, setPopoverShow] = React.useState(false);
  const btnRef = React.createRef();
  const popoverRef = React.createRef();
  const openTooltip = () => {
    createPopper(btnRef.current, popoverRef.current, {
      placement: "top"
    });
    setPopoverShow(true);
  };
  const closeTooltip = () => {
    setPopoverShow(false);
  };
  const lists = [
  { detail: "1. 01car ne peut toutefois pas garantir de manière absolue l'exactitude et l'exhaustivité de l'ensemble de ces informations." },
  { detail: "2. 01car s'engage dans le cadre de l'accès et de l'utilisation du Site, à traiter les données à caractère personnel des personnes physiques, dans le respect de la règlementation française et européenne en matière de protection des données personnelles." },
  { detail: "3. 01car ne saurait donc être tenue pour responsable d'un quelconque dommage que tout internaute pourrait subir à la suite d'une telle utilisation" }
  ];
  return (
    <>
          <button
            className="bg-green-500 text-white active:bg-gray-600 text-sm px-2 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 animate-bounce" type="button"
            onMouseEnter={openTooltip}
            onMouseLeave={closeTooltip}
            ref={btnRef}
          >
           <i class="fas fa-info-circle"></i>
          </button>
          <div
            className={
              (popoverShow ? "" : "hidden ") +
              "bg-gray-600 border-0 mr-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg"
            }
            ref={popoverRef}
          >
            <div>
              <div
                className="bg-gray-600 text-white opacity-75 font-semibold p-3 mb-0 border-b border-solid border-gray-200 uppercase rounded-t-lg"
              >
			  {props.title}
              </div>
              <div className="text-white p-3">
                <ul className="list-unstyled">
				    {lists.map(list => (
					 <li>
					    {list.detail}
                     </li>
					))}
				</ul>

              </div>
            </div>
          </div>
    </>
  );
};

export default NotificationDropdown;

import React from "react";
import Link from "next/link";
import { createPopper } from "@popperjs/core";

const IndexDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <Link href="/prix">
			<a
				href="#"
				className={
						"text-4xl py-1 px-4 font-normal block w-full whitespace-no-wrap font-bold bg-transparent text-white-500"
						}
			>
				<i className="fas fa-cart-plus"></i>
			</a>						  
	  </Link>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-no-wrap bg-transparent text-gray-500"
          }
        >
          Admin Layout
        </span>
        <Link href="/admin/dashboard">
          <a
            href="#pablo"
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
            }
          >
            Dashboard
          </a>
        </Link>
        <Link href="/admin/settings">
          <a
            href="#pablo"
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
            }
          >
            Settings
          </a>
        </Link>
        <Link href="/admin/tables">
          <a
            href="#pablo"
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
            }
          >
            Tables
          </a>
        </Link>
        <Link href="/admin/maps">
          <a
            href="#pablo"
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
            }
          >
            Maps
          </a>
        </Link>
        <div className="h-0 mx-4 my-2 border border-solid border-gray-200" />
        <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-no-wrap bg-transparent text-gray-500"
          }
        >
          Auth Layout
        </span>
        <Link href="/auth/login">
          <a
            href="#pablo"
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
            }
          >
            Login
          </a>
        </Link>
        <Link href="/auth/register">
          <a
            href="#pablo"
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
            }
          >
            Register
          </a>
        </Link>
        <div className="h-0 mx-4 my-2 border border-solid border-gray-200" />
        <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-no-wrap bg-transparent text-gray-500"
          }
        >
          No Layout
        </span>
		<Link href="/vendre">
          <a
            href="#pablo"
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
            }
          >
            Vendre
          </a>
        </Link>
        <Link href="/prix">
          <a
            href="#pablo"
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
            }
          >
            Prix
          </a>
        </Link>
		<Link href="/annonce">
          <a
            href="#pablo"
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
            }
          >
            Annonce
          </a>
        </Link>
		<Link href="/favoris">
          <a
            href="#pablo"
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
            }
          >
            Favoris
          </a>
        </Link>
      </div>
    </>
  );
};

export default IndexDropdown;

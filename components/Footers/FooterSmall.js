import React from "react";
import Link from "next/link";

export default function FooterSmall(props) {
  return (
    <>
      <footer
        className={
          (props.absolute
            ? "absolute w-full bottom-0 bg-gray-900"
            : "relative") + " pb-6"
        }
      >
        <div className="container mx-auto px-4">
          <hr className="mb-6 border-b-1 border-gray-700" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4">
              <div className="text-sm text-gray-600 font-semibold py-1 text-center md:text-left">
                Copyright © {new Date().getFullYear()}{" "}
                <a
                  href="https://ecoechange.com/"
                  className="text-white hover:text-gray-400 text-sm font-semibold py-1"
                >
                  ecoechange.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

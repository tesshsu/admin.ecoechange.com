import React from "react";

const Alert = (props) => {
  const [showAlert, setShowAlert] = React.useState(true);
  return (
    <>
      {showAlert ? (
        <div
          className="text-orange-500 px-6 py-4 border border-gray-400 p-3 rounded relative bg-white animate-bounce"
        >
          <span className="text-xl inline-block align-middle">
            <i className="fas fa-exclamation-triangle"></i>
          </span>
          <span className="inline-block align-middle">
		   {props.text}
          </span>
          <button
            className="absolute bg-transparent text-2xl text-gray-500 font-semibold leading-none right-0 top-0 outline-none focus:outline-none"
            onClick={() => setShowAlert(false)} 
          >
            <span><i className="far fa-times-circle"></i></span>
          </button>
        </div>
      ) : null}
    </>
  );
};

export default Alert;
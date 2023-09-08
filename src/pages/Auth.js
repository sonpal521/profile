import React from "react";
import { useNavigate } from "react-router-dom";

const Auth = ({ authenticate }) => {
  const navigate = useNavigate();
  const onClick = () => {
    authenticate();
    navigate("dashboard");
  };
  return (
    <div className=" d-flex justify-content-center align-items-center m-5 p-5">
      <div>
        <h2> Please login to continue </h2>
        <div className="text-center m-5">
          <button onClick={onClick} className="btn btn-primary btn-lg">
            Authenticate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;

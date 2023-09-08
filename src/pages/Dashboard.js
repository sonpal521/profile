import React from "react";
import { Link } from "react-router-dom";

const Dashboard = ({ logout }) => {
  return (
    <div className="m-5 p-5">
      <div className="d-flex justify-content-end">
        <button onClick={logout} className="btn btn-danger">
          Logout
        </button>
      </div>
      <h4>Hello, </h4>
      <h1>I am User Name</h1>
      <h5 className="text-primary my-2">Full Stack Developer</h5>
      <Link to="/profile" className="btn btn-primary">
        {" "}
        See my profile
      </Link>
    </div>
  );
};

export default Dashboard;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProfileUpdate from "./ProfileUpdate"; // Import the ProfileUpdate component

const Profile = ({ logout }) => {
  const [profileData, setProfileData] = useState({
    fullName: "User Name", // Initial full name
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero ipsa nam voluptatum enim facilis quisquam quae accusantium rerum ducimus quia velit culpa, ea nobis dolores, sint cupiditate praesentium voluptates cum"

  });

  const [showUpdateForm] = useState(true); // Show the form initially

  const handleUpdateProfile = (newProfileData) => {
    // Update the profile data in the state
    setProfileData({
      ...profileData,
      ...newProfileData,
    });
  };

  return (
    <div className="container mt-5">
       <div className="m-5 p-5">
        <Link className="navbar-brand" to="/dashboard">
          <h4>Dashboard</h4>
        </Link>
        <div className="d-flex justify-content-end">
        <button onClick={logout} className="btn btn-danger">
         <h4>Logout</h4>
        </button>
      </div>
      </div>

      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title">My Profile</h1>
              <hr />

              <div className="text-center">
                <img
                  src="https://simg.nicepng.com/png/small/67-675501_banner-library-male-computer-user-big-image-png.png"
                  alt="Profile"
                  className="img-fluid rounded-circle"
                  style={{ maxWidth: "200px" }}
                />
              </div>

              <div className="mt-4 text-center">
                <h3>{profileData.fullName}</h3>
              </div>

              <div className="mt-3 text-center">
                <p>{profileData.description}</p>
              </div>

              {showUpdateForm && (
                <ProfileUpdate
                  updateProfile={handleUpdateProfile}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

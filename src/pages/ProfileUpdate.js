import React, { useState } from "react";

const ProfileUpdate = ({ updateProfile  }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    description: "",
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCancel = () => {
    // Handle cancel logic here, e.g., clear form fields and hide the form
    setFormData({
      fullName: "",
      description: "",
    });
    setIsFormVisible(false);
  };
  const handleSubmit = () => {
    // Call the updateProfile function to update the profile data
    updateProfile(formData);
    // Clear the form fields
    setFormData({
      fullName: "",
      description: "",
    });
  };

  return  (<div>
  <h2>Update Profile</h2>
  {!isFormVisible ? (
    <button
      className="btn btn-primary"
      onClick={() => setIsFormVisible(true)}
    >
      Update Profile
    </button>
  ) : (
    <div>
      <div className="form-group">
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          className="form-control"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          className="form-control"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <button className="btn btn-primary " onClick={handleSubmit}>
        Update
      </button>
      <button className="btn btn-secondary mr-2" onClick={handleCancel}>
        Cancel
      </button>
    </div>
  )}
</div>
);
};

export default ProfileUpdate;

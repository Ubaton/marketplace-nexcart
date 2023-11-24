import { User } from "lucide-react";
import React from "react";

const Profile = () => {
  const handleUpdateProfile = () => {
    // Placeholder function for updating user profile
    console.log("Updating user profile");
  };

  const handleChangePassword = () => {
    // Placeholder function for changing password
    console.log("Changing password");
  };

  return (
    <div className="bg-object rounded-3xl w-48 h-96">
      <h1 className="flex flex-row items-center justify-center p-2 gap-2 text-lg font-bold">
        User Settings
      </h1>
      <div className="flex flex-col items-center justify-center p-6">
        <div className="flex items-center justify-center bg-primary rounded-full w-20 h-20">
          <User />
        </div>
        <h2 className="text-lg text-bold">Username</h2>
      </div>

      <div className="flex flex-col items-center justify-center space-y-2">
        <button
          className="bg-secondary rounded-3xl w-44 h-10"
          onClick={handleUpdateProfile}
        >
          Update Profile
        </button>
        <button
          className="bg-secondary rounded-3xl w-44 h-10"
          onClick={handleChangePassword}
        >
          Change Password
        </button>
      </div>
    </div>
  );
};

export default Profile;

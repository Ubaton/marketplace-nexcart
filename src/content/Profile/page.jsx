import { User, BadgeCheck } from "lucide-react";
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

  const user = {
    username: "username",
    email: "username@gmail.com",
    verified: (
      <span>
        <BadgeCheck />
      </span>
    ),
  };

  return (
    <div className="bg-object rounded-3xl h-auto">
      <div className="flex flex-col items-center justify-center space-y-2">
        <div className="p-4">
          <h1 className="flex flex-row items-center justify-center p-2 gap-2 text-lg font-bold">
            User Settings
          </h1>
          <div className="flex flex-col items-center justify-center p-6">
            <div className="flex items-center justify-center bg-primary rounded-full p-12">
              <User />
            </div>
            <p className="flex flex-row gap-2 text-lg text-bold">
              <span>{user.username}</span>
              <span>{user.verified}</span>
            </p>
            <p className="text-lg text-bold">{user.email}</p>
          </div>
        </div>
        <div className="flex flex-col p-4">
          <button
            className="bg-secondary rounded-3xl px-4 py-2"
            onClick={handleUpdateProfile}
          >
            Update Profile
          </button>
          <button
            className="bg-secondary rounded-3xl px-4 py-2"
            onClick={handleChangePassword}
          >
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;

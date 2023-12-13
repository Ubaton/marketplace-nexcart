"use client";

import { User, BadgeCheck } from "lucide-react";
import React, { useEffect, useState } from "react";
import { getDoc, doc, getFirestore, collection } from "firebase/firestore";
import { app } from "../../Security/firebase";

const Profile = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    verified: (
      <span className="text-green-600">
        <BadgeCheck />
      </span>
    ),
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userDocRef = doc(getFirestore(app), "users", "your_user_id");
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const userDataFromFirestore = userDocSnap.data();
          setUserData({
            username: userDataFromFirestore.username,
            email: userDataFromFirestore.email,
            verified: (
              <span className="text-green-600">
                <BadgeCheck />
              </span>
            ),
          });
        } else {
          console.log("User document does not exist");
        }
      } catch (error) {
        console.error("Error fetching user data:", error.message);
      }
    };

    fetchUserData();
  }, []);

  const handleUpdateProfile = () => {
    console.log("Updating user profile");
  };

  const handleChangePassword = () => {
    console.log("Changing password");
  };

  return (
    <div className="bg-object rounded-3xl h-auto">
      <div className="flex flex-col items-center justify-center space-y-2">
        <div className="pt-4">
          <h1 className="flex flex-row items-center justify-center gap-2 text-lg font-bold">
            User Settings
          </h1>
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center bg-primary rounded-full p-6 mb-6">
              <User size={40} />
            </div>
            <p className="flex flex-row gap-2 text-lg text-bold text-gray-50">
              <span>{userData.username}</span>
              <span>{userData.verified}</span>
            </p>
            <p className="text-lg text-bold text-gray-50">{userData.email}</p>
          </div>
        </div>
        <div className="flex flex-col p-4 space-y-2">
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

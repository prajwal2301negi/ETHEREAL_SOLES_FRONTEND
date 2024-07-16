import React, { useContext } from "react";
import { Context } from "../main";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useEffect } from "react";

const Profile = () => {
  const { isUserAuthenticated, setIsUserAuthenticated, user } =
    useContext(Context);

  const navigateTo = useNavigate();

  const deleteCustomer = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.delete(
        "http://localhost:8000/api/v1/user/deleteUser",
        {
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setIsUserAuthenticated(false);
      navigateTo("/");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  
  useEffect(() => {
    if(!isUserAuthenticated){
      navigateTo("/login");
    }
  }, [isUserAuthenticated,navigateTo]);


  return (
    <div className="flex items-center justify-center min-h-screen bg-black px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full"
      >
        <div className="flex justify-center py-6 bg-gray-300">
          <motion.img
            src={user.avatar && user.avatar.url ? user.avatar.url : "default-image-url"}
            alt="Profile Image"
            className="h-48 w-48 object-cover shadow-xl rounded-full"
            whileHover={{ scale: 1.05 }}
          />
        </div>
        <div className="py-6 px-6 sm:px-10 bg-gray-400">
          <div className="text-center text-3xl font-bold mb-4">
            {user.name}
          </div>
          <div className="flex flex-col text-gray-800">
            <div className="mb-2">
              <strong>Role:</strong> {user.role}
            </div>
            <div className="mb-2">
              <strong>Email:</strong> {user.email}
            </div>
            <div className="mb-2">
              <strong>Phone:</strong> {user.phone}
            </div>
            <div className="mb-2">
              <strong>Gender:</strong> {user.gender}
            </div>
          </div>
        </div>
        <div className="flex justify-center bg-gray-400 pb-6 space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={deleteCustomer}
            className="flex items-center bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            <RiDeleteBin6Line className="mr-2 text-xl" /> Delete Account
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;

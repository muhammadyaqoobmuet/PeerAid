import React, { useState } from 'react';

import useAuthStore from '@/store/authStore';
import {   Menu  } from 'lucide-react';



const ProfileCard = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { logout, user } = useAuthStore()
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLogout = async () => {
        // Handle logout functionality here
        try {
            await logout();
        } catch (error) {
            console.log(error);
        }
        console.log('Logging out...');
    };

    return (
        <div className="flex items-center space-x-4 px-2 bg-white  rounded-lg max-w-sm mx-auto">
            {/* Profile Image */}
            <img
                src="https://via.placeholder.com/150"
                alt="Profile"
                className="w-8 h-8 rounded-full"
            />

            {/* Name and Dropdown */}
            <div className="flex gap-2 justify-between w-full items-center ">
                <span className="text-sm font-semibold">{user?.name || "loading"}</span>

                {/* Dropdown */}
                <div className="relative">
                    <button
                        onClick={toggleDropdown}
                        className=" px-4 py-2  ml-2rounded-md"
                    >
                        <Menu />
                    </button>

                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-md">
                            <button
                                onClick={handleLogout}
                                className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
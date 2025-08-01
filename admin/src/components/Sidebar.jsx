import React, {useContext} from "react";
import {AdminContext} from "../context/AdminContext";
import {NavLink} from "react-router-dom";
import {assets} from "../assets/assets";
import { DoctorContext } from "../context/DoctorContext";

const Sidebar = () => {
    const {aToken} = useContext(AdminContext);
    const {dToken} = useContext(DoctorContext);

    // Updated icon styling - slightly smaller (w-6 h-6 = 24px)
    const iconClass = "w-6 h-6 min-w-[24px] flex-shrink-0";

    return (
        <div className="min-h-screen bg-white border-r border-gray-200">
            {aToken && (
                <ul className="text-[#515151] mt-5">
                    <NavLink
                        className={({isActive}) => `flex items-center justify-center md:justify-start gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? "bg-[#F2F3FF] border-r-4 border-primary" : ""}`}
                        to={"/admin-dashboard"}
                    >
                        <img src={assets.home_icon} alt="Dashboard" className={iconClass} />
                        <p className="hidden md:block">Dashboard</p>
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => `flex items-center justify-center md:justify-start gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? "bg-[#F2F3FF] border-r-4 border-primary" : ""}`} 
                        to={"/all-appointments"}
                    >
                        <img src={assets.appointment_icon} alt="Appointments" className={iconClass} />
                        <p className="hidden md:block">Appointments</p>
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => `flex items-center justify-center md:justify-start gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? "bg-[#F2F3FF] border-r-4 border-primary" : ""}`} 
                        to={"/add-doctor"}
                    >
                        <img src={assets.add_icon} alt="Add Doctor" className={iconClass} />
                        <p className="hidden md:block">Add Doctor</p>
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => `flex items-center justify-center md:justify-start gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? "bg-[#F2F3FF] border-r-4 border-primary" : ""}`} 
                        to={"/doctor-list"}
                    >
                        <img src={assets.people_icon} alt="Doctors List" className={iconClass} />
                        <p className="hidden md:block">Doctors List</p>
                    </NavLink>
                </ul>
            )}

            {dToken && (
                <ul className="text-[#515151] mt-5">
                    <NavLink
                        className={({isActive}) => `flex items-center justify-center md:justify-start gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? "bg-[#F2F3FF] border-r-4 border-primary" : ""}`}
                        to={"/doctor-dashboard"}
                    >
                        <img src={assets.home_icon} alt="Dashboard" className={iconClass} />
                        <p className="hidden md:block">Dashboard</p>
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => `flex items-center justify-center md:justify-start gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? "bg-[#F2F3FF] border-r-4 border-primary" : ""}`} 
                        to={"/doctor-appointments"}
                    >
                        <img src={assets.appointment_icon} alt="Appointments" className={iconClass} />
                        <p className="hidden md:block">Appointments</p>
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => `flex items-center justify-center md:justify-start gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? "bg-[#F2F3FF] border-r-4 border-primary" : ""}`} 
                        to={"/doctor-profile"}
                    >
                        <img src={assets.people_icon} alt="Profile" className={iconClass} />
                        <p className="hidden md:block">Profile</p>
                    </NavLink>
                </ul>
            )}
        </div>
    );
};

export default Sidebar;
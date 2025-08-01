import React, {useContext, useState, useRef, useEffect} from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
    const navigate = useNavigate();
    const {token, setToken, userData} = useContext(AppContext);
    const [showMenu, setShowMenu] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    const logout = () => {
        setToken(false);
        localStorage.removeItem('token');
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-grey-400">
            <img onClick={() => navigate("/")} className="w-44 cursor-pointer" src={assets.logo} alt="Logo" />
            
            <ul className="hidden md:flex items-start gap-5 font-medium">
                <NavLink to="/">
                    <li className="py-1">HOME</li>
                    <hr className="bg-primary border-none outline-none h-0.5 w-3/5 m-auto hidden" />
                </NavLink>

                <NavLink to="/doctors">
                    <li className="py-1">ALL DOCTORS</li>
                    <hr className="border-none bg-primary outline-none h-0.5 w-3/5 m-auto hidden" />
                </NavLink>

                <NavLink to="/about">
                    <li className="py-1">ABOUT</li>
                    <hr className="border-none bg-primary outline-none h-0.5 w-3/5 m-auto hidden" />
                </NavLink>

                <NavLink to="/contact">
                    <li className="py-1">CONTACT</li>
                    <hr className="border-none bg-primary outline-none h-0.5 w-3/5 m-auto hidden" />
                </NavLink>

                <div>
                    <a 
                        href="https://docmate-panel.onrender.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="rounded-full cursor-pointer px-2 py-2 bg-white border border-primary text-primary"
                    >
                        Admin Panel
                    </a>
                </div>
            </ul>

            <div className="flex items-center gap-4">
                {token && userData ? (
                    <div 
                        className="flex item-center gap-2 cursor-pointer group relative"
                        ref={dropdownRef}
                    >
                        <img 
                            className="w-10 rounded-full" 
                            src={userData.image} 
                            alt="ProfilePic"
                            onClick={() => setShowDropdown(!showDropdown)}
                        />
                        <img className="w-2.5" src={assets.dropdown_icon} alt=""/>
                        <div className={`absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 ${showDropdown ? 'block' : 'hidden'} md:group-hover:block`}>
                            <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                                <p onClick={()=>{navigate("/my-profile"); setShowDropdown(false)}} className="hover:text-black cursor-pointer">My Profile</p>
                                <p onClick={()=>{navigate("/my-appointments"); setShowDropdown(false)}} className="hover:text-black cursor-pointer">My Appointments</p>
                                <p onClick={()=>{logout(); setShowDropdown(false)}} className="hover:text-black cursor-pointer">Logout</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <button
                        onClick={() => navigate("/login")}
                        className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
                    >
                        Create an Account
                    </button>
                )}
                
                <div className="md:hidden">
                    <a 
                        href="https://docmate-panel.onrender.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="rounded-full cursor-pointer px-2 py-2 bg-white border border-primary text-primary"
                    >
                        Admin
                    </a>
                </div>

                <img onClick={()=>setShowMenu(true)} className="w-6 md:hidden" src={assets.menu_icon} alt="" />

                <div className={`${showMenu ? "fixed w-full" : "h-0 w-0"} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
                    <div className="flex items-center justify-between px-5 py-6">
                        <img className="w-36" src={assets.logo} alt="" />
                        <img className="w-7" onClick={()=>setShowMenu(false)} src={assets.cross_icon} alt="" />
                    </div>

                    <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
                        <NavLink onClick={()=>setShowMenu(false)} to="/home"> <p className="px-4 py-2 rounded inline-block">HOME</p></NavLink>
                        <NavLink onClick={()=>setShowMenu(false)} to="/doctors"> <p className="px-4 py-2 rounded inline-block">ALL DOCTORS</p></NavLink>
                        <NavLink onClick={()=>setShowMenu(false)} to="/about"> <p className="px-4 py-2 rounded inline-block">ABOUT</p></NavLink>
                        <NavLink onClick={()=>setShowMenu(false)} to="/contact"> <p className="px-4 py-2 rounded inline-block">CONTACT</p></NavLink>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
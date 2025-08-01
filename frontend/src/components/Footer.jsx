import React from "react";
import {assets} from "../assets/assets";
import {Phone, Mail, MapPin} from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <div className="md:mx-10 px-4 sm:px-0">
            <div className="flex flex-col sm:grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 my-10 mt-40 text-sm">
                {/*---------- Brand Section ------------------- */}
                <div className="max-w-md">
                    <img className="mb-5 w-40" src={assets.logo} alt="DocMate Logo" />
                    <p className="text-gray-600 leading-6">
                        DocMate connects patients with trusted healthcare professionals. 
                        Our mission is to make quality healthcare accessible and convenient for everyone.
                    </p>
                </div>

                {/*---------- Quick Links ------------------- */}
                <div>
                    <p className="text-lg font-semibold mb-5 text-gray-800">Quick Links</p>
                    <ul className="flex flex-col gap-3 text-gray-600">
                        <li className="hover:text-primary transition-colors cursor-pointer">Home</li>
                        <li className="hover:text-primary transition-colors cursor-pointer">About Us</li>
                        <li className="hover:text-primary transition-colors cursor-pointer">Services</li>
                        <li className="hover:text-primary transition-colors cursor-pointer">Blog</li>
                    </ul>
                </div>

                {/*---------- Company ------------------- */}
                <div>
                    <p className="text-lg font-semibold mb-5 text-gray-800">Company</p>
                    <ul className="flex flex-col gap-3 text-gray-600">
                        <li className="hover:text-primary transition-colors cursor-pointer">Careers</li>
                        <li className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</li>
                        <li className="hover:text-primary transition-colors cursor-pointer">Terms of Service</li>
                        <li className="hover:text-primary transition-colors cursor-pointer">Contact Us</li>
                    </ul>
                </div>

                {/*---------- Contact ------------------- */}
                <div>
                    <p className="text-lg font-semibold mb-5 text-gray-800">Contact Us</p>
                    <ul className="flex flex-col gap-3 text-gray-600">
                        <li className="flex items-start gap-2">
                            <MapPin size={16} className="mt-1 text-red-500 flex-shrink-0" />
                            <span>123 Medical Drive, Health City, HC 12345</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <Phone size={16} className="text-green-600 flex-shrink-0" />
                            <a href="tel:+918458005099" className="hover:text-primary transition-colors">
                                +91 8458005009
                            </a>
                        </li>
                        <li className="flex items-center gap-2">
                            <Mail size={16} className="text-blue-600 flex-shrink-0" />
                            <a href="mailto:support@docmate.com" className="hover:text-primary transition-colors">
                                support@docmate.com
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            
            {/* -------------- Copyright ---------------- */}
            <div className="border-t border-gray-200">
                <p className="py-5 text-sm text-center text-gray-500">
                    © {currentYear} DocMate. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;
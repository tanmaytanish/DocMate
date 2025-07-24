import React from "react";
import {assets} from "../assets/assets";
import {Phone, Mail} from "lucide-react";

const Footer = () => {
    return (
        <div className="md:mx-10">
            <div
                className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14
             my-10 mt-40 text-sm"
            >
                {/*---------- Left Section------------------- */}
                <div>
                    <img className="mb-5 w-40" src={assets.logo} alt="" />
                    <p className="w-full md:w-2/3 text-gray-600 leading-6">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est ratione labore perspiciatis et
                        quia ipsa magni quae ullam corporis iure dolores maxime ut nisi aperiam dolor exercitationem,
                        nesciunt iusto. Molestiae.
                    </p>
                </div>

                {/*---------- Middle Section------------------- */}
                <div>
                    <p className="text-xl font-medium mb-5">COMPANY</p>
                    <ul className="flex flex-col gap-2 text-gray-600">
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                {/*---------- Right Section------------------- */}
                <div>
                    <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                    <ul className="flex flex-col gap-2 text-gray-600">
                        <li className="flex items-center gap-2">
                            <Phone size={16} className="text-primary text-green-600" />
                            <a href="tel:+918458005099" className="hover:text-primary">
                                +91 8458005099
                            </a>
                        </li>
                        <li className="flex items-center gap-2">
                            <Mail size={16} className="text-primary text-blue-600" />
                            <a href="mailto:support@docmate.com" className="hover:text-primary">
                                support@docmate.com
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* --------------CopyRight Text--------------- */}
            <div>
                <hr />
                <p className="py-5 text-sm text-center">© 2025 DocMate. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;

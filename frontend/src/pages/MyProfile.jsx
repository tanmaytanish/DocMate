import React, {useState, useContext} from "react";
import {assets} from "../assets/assets";
import {AppContext} from "../context/AppContext";
import axios from "axios";
import {toast} from "react-toastify";

const MyProfile = () => {
    const {userData, setUserData, token, backendUrl, loadUserProfileData} = useContext(AppContext);

    const [isEdit, setIsEdit] = useState(false);
    const [image, setImage] = useState(false);

    const updateUserProfileData = async () => {
        try {
            const formData = new FormData();
            formData.append("name", userData.name);
            formData.append("phone", userData.phone);
            formData.append("address", JSON.stringify(userData.address));
            formData.append("gender", userData.gender);
            formData.append("dob", userData.dob);
            if (image) formData.append("image", image);

            const {data} = await axios.post(backendUrl + "/api/user/update-profile", formData, {headers: {token}});

            if (data.success) {
                toast.success(data.message || "Profile updated successfully ");
                await loadUserProfileData();
                setIsEdit(false);
                setImage(false);
            } else {
                const errorMsg =
                    typeof data.message === "object" ? JSON.stringify(data.message) : data.message || "Unknown error";
                toast.error("Update failed ❌: " + errorMsg);
            }
        } catch (error) {
            console.log(error);
            const fallbackMsg =
                typeof error?.response?.data?.message === "object"
                    ? JSON.stringify(error.response.data.message)
                    : error?.response?.data?.message || error.message || "Something went wrong";
            toast.error("Error ❌: " + fallbackMsg);
        }
    };

    return (
        userData && (
            <div className="max-w-lg flex flex-col gap-2 text-sm">
                {isEdit ? (
                    <label htmlFor="image" className="cursor-pointer">
                        <div className="inline-block relative group">
                            <img
                                className="w-40 h-40 object-cover rounded-lg border-2 border-dashed border-gray-300 group-hover:border-blue-400 transition-all"
                                src={image ? URL.createObjectURL(image) : userData.image}
                                alt="Profile"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                                <img className="w-12" src={assets.upload_icon} alt="Upload" />
                            </div>
                        </div>
                        <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden accept="image/*" />
                    </label>
                ) : (
                    <img className="w-36 rounded" src={userData.image} alt="Profile" />
                )}

                {isEdit ? (
                    <input
                        type="text"
                        className="text-3xl font-medium w-full mt-4 px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={userData.name}
                        onChange={(e) => setUserData((prev) => ({...prev, name: e.target.value}))}
                    />
                ) : (
                    <p className="font-medium text-3xl text-neutral-800 mt-4">{userData.name}</p>
                )}

                <hr className="bg-zinc-400 h-[1px] border-none my-4" />

                <div>
                    <p className="text-neutral-500 underline mt-3 text-lg">CONTACT INFORMATION</p>
                    <div className="grid grid-cols-[1fr_3fr] gap-y-4 mt-4 text-neutral-700">
                        <p className="font-medium text-base">Email ID : </p>
                        <p className="text-blue-500 text-base">{userData.email}</p>

                        <p className="font-medium text-base">Phone : </p>
                        {isEdit ? (
                            <input
                                type="text"
                                className="w-full px-4 py-3 text-base rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                value={userData.phone}
                                onChange={(e) => setUserData((prev) => ({...prev, phone: e.target.value}))}
                            />
                        ) : (
                            <p className="text-blue-400 text-base">{userData.phone}</p>
                        )}

                        <p className="font-medium text-base">Address : </p>
                        {isEdit ? (
                            <div className="space-y-3">
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 text-base rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    onChange={(e) =>
                                        setUserData((prev) => ({
                                            ...prev,
                                            address: {...prev.address, line1: e.target.value},
                                        }))
                                    }
                                    value={userData.address.line1}
                                    placeholder="Address line 1"
                                />
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 text-base rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    onChange={(e) =>
                                        setUserData((prev) => ({
                                            ...prev,
                                            address: {...prev.address, line2: e.target.value},
                                        }))
                                    }
                                    value={userData.address.line2}
                                    placeholder="Address line 2"
                                />
                            </div>
                        ) : (
                            <p className="text-gray-500 text-base">
                                {userData.address.line1} <br /> {userData.address.line2}
                            </p>
                        )}
                    </div>
                </div>

                <div>
                    <p className="text-neutral-500 underline mt-6 text-lg">BASIC INFORMATION</p>
                    <div className="grid grid-cols-[1fr_3fr] gap-y-4 mt-4 text-neutral-700">
                        <p className="font-medium text-base">Gender : </p>
                        {isEdit ? (
                            <select
                                className="w-full px-4 py-3 text-base rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                value={userData.gender}
                                onChange={(e) => setUserData((prev) => ({...prev, gender: e.target.value}))}
                            >
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Others">Others</option>
                            </select>
                        ) : (
                            <p className="text-gray-400 text-base">{userData.gender}</p>
                        )}

                        <p className="font-medium text-base">Date of Birth : </p>
                        {isEdit ? (
                            <input
                                type="date"
                                className="w-full px-4 py-3 text-base rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                onChange={(e) => setUserData((prev) => ({...prev, dob: e.target.value}))}
                                value={userData.dob}
                            />
                        ) : (
                            <p className="text-gray-400 text-base">{userData.dob}</p>
                        )}
                    </div>
                </div>

                <div className="mt-10 flex gap-4">
                    {isEdit ? (
                        <>
                            <button
                                className="border border-primary bg-primary text-white px-8 py-2 rounded-full
                                    hover:bg-primary-dark transition-all text-sm"
                                onClick={updateUserProfileData}
                            >
                                Save Changes
                            </button>
                            <button
                                className="border border-gray-400 px-8 py-2 rounded-full
                                    hover:bg-gray-100 transition-all text-sm"
                                onClick={() => {
                                    setIsEdit(false);
                                    setImage(false);
                                }}
                            >
                                Cancel
                            </button>
                        </>
                    ) : (
                        <button
                            className="border border-primary px-8 py-2 rounded-full
                                hover:bg-primary hover:text-white transition-all text-sm"
                            onClick={() => setIsEdit(true)}
                        >
                            Edit
                        </button>
                    )}
                </div>
            </div>
        )
    );
};

export default MyProfile;
import React, {useContext, useState} from "react";
import {assets} from "../../assets/assets";
import {AdminContext} from "../../context/AdminContext";
import {toast} from "react-toastify";
import axios from "axios";

const AddDoctor = () => {
    const [docImg, setDocImg] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [experience, setExperience] = useState("1 Year");
    const [fees, setFees] = useState("");
    const [about, setAbout] = useState("");
    const [speciality, setSpeciality] = useState("General physician");
    const [degree, setDegree] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const {backendUrl, aToken} = useContext(AdminContext);

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        try {
            if (!docImg) {
                setIsLoading(false);
                return toast.error("Image Not Selected");
            }

            const formData = new FormData();
            formData.append("image", docImg);
            formData.append("name", name);
            formData.append("email", email);
            formData.append("password", password);
            formData.append("experience", experience);
            formData.append("degree", degree);
            formData.append("fees", Number(fees));
            formData.append("about", about);
            formData.append("speciality", speciality);
            formData.append("address", JSON.stringify({line1: address1, line2: address2}));

            const {data} = await axios.post(backendUrl + "/api/admin/add-doctor", formData, {headers: {aToken}});

            if(data.success){
              toast.success(data.message)
              setDocImg(false)
              setName("")
              setPassword("")
              setEmail("")
              setAddress1("")
              setAddress2("")
              setDegree("")
              setAbout("")
              setFees("")
            }else{
              toast.error(data.message)
            }
        } catch (error) {
          toast.error(error.message)
          console.log(error);
        } finally {
          setIsLoading(false);
        }
    };

    return (
        <form onSubmit={onSubmitHandler} className="m-5 w-full">
            <p className="mb-3 text-lg font-medium">Add Doctor</p>

            <div className="bg-white px-8 py-8 border border-gray-300 rounded w-full max-h-[80vh] overflow-y-scroll">
                <div className="flex items-center gap-4 mb-8 text-gray-500">
                    <label htmlFor="doc-img">
                        <img
                            className="w-16 bg-gray-100 rounded-full cursor-pointer"
                            src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
                            alt=""
                        />
                    </label>
                    <input onChange={(e) => setDocImg(e.target.files[0])} type="file" id="doc-img" hidden />
                    <p>
                        Upload Doctor <br /> Image
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-start gap-10 text-gray-600">
                    <div className="w-full lg:flex-1 flex flex-col gap-4">
                        <div className="flex-1 flex flex-col gap-1">
                            <p>Doctor Name</p>
                            <input
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                className="border rounded px-3 py-2"
                                type="text"
                                placeholder="Name"
                                required
                            />
                        </div>

                        <div className="flex-1 flex flex-col gap-1">
                            <p>Doctor Email</p>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                className="border rounded px-3 py-2"
                                type="email"
                                placeholder="Email"
                                required
                            />
                        </div>
                        <div className="flex-1 flex flex-col gap-1">
                            <p>Doctor Password</p>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                className="border rounded px-3 py-2"
                                type="password"
                                placeholder="Password"
                                required
                            />
                        </div>
                        <div className="flex-1 flex flex-col gap-1">
                            <p>Experience</p>
                            <select
                                onChange={(e) => setExperience(e.target.value)}
                                value={experience}
                                className="border rounded px-3 py-2"
                            >
                                <option value="1 Year">1 Year</option>
                                <option value="2 Years">2 Years</option>
                                <option value="3 Years">3 Years</option>
                                <option value="4 Years">4 Years</option>
                                <option value="5 Years">5 Years</option>
                                <option value="6 Years">6 Years</option>
                                <option value="7 Years">7 Years</option>
                                <option value="8 Years">8 Years</option>
                                <option value="9 Years">9 Years</option>
                                <option value="10 Years">10 Years</option>
                            </select>
                        </div>

                        <div className="flex-1 flex flex-col gap-1">
                            <p>Appointment Fee</p>
                            <input
                                onChange={(e) => setFees(e.target.value)}
                                value={fees}
                                className="border rounded px-3 py-2"
                                type="number"
                                placeholder="Fee"
                                required
                            />
                        </div>
                    </div>

                    <div className="w-full lg:flex-1 flex flex-col gap-4">
                        <div className="flex-1 flex flex-col gap-1">
                            <p>Speciality</p>
                            <select
                                onChange={(e) => setSpeciality(e.target.value)}
                                value={speciality}
                                className="border rounded px-3 py-2"
                            >
                                <option value="General physician">General physician</option>
                                <option value="Gynecologist">Gynecologist</option>
                                <option value="Dermatologist">Dermatologist</option>
                                <option value="Pediatricians">Pediatricians</option>
                                <option value="Neurologist">Neurologist</option>
                                <option value="Gastroenterologist">Gastroenterologist</option>
                            </select>
                        </div>

                        <div className="flex-1 flex flex-col gap-1">
                            <p>Education</p>
                            <input
                                onChange={(e) => setDegree(e.target.value)}
                                value={degree}
                                className="border rounded px-3 py-2"
                                type="text"
                                placeholder="Education"
                                required
                            />
                        </div>
                        <div className="flex-1 flex flex-col gap-1">
                            <p>Address</p>
                            <input
                                onChange={(e) => setAddress1(e.target.value)}
                                value={address1}
                                className="border rounded px-3 py-2"
                                type="text"
                                placeholder="Address line 1"
                                required
                            />
                            <input
                                onChange={(e) => setAddress2(e.target.value)}
                                value={address2}
                                className="border rounded px-3 py-2"
                                type="text"
                                placeholder="Address line 2"
                                required
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <p className="mt-4 mb-2">About Doctor</p>
                    <textarea
                        onChange={(e) => setAbout(e.target.value)}
                        value={about}
                        className="w-full px-4 pt-2 border rounded"
                        placeholder="Write about doctor"
                        rows={5}
                        required
                    />
                </div>

                <button 
                    type="submit" 
                    disabled={isLoading}
                    className={`flex items-center justify-center gap-2 bg-primary px-10 py-3 mt-4 text-white rounded-full ${
                        isLoading ? 'opacity-75 cursor-not-allowed' : 'hover:bg-primary-dark'
                    }`}
                >
                    {isLoading ? (
                        <>
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Adding...
                        </>
                    ) : (
                        "Add Doctor"
                    )}
                </button>
            </div>
        </form>
    );
};

export default AddDoctor;
import React, {useContext} from "react";
import {AppContext} from "../context/AppContext";
import {useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import {useEffect} from "react";

const MyAppointments = () => {
    const {backendUrl, token, getDoctorsData} = useContext(AppContext);

    const [appointments, setAppointments] = useState([]);
    const months = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    // Function to add Dr. prefix to name
    const formatDoctorName = (name) => {
        if (name.startsWith('Dr. ') || name.startsWith('Dr ')) {
            return name;
        }
        return `Dr. ${name}`;
    };

    const slotDateFormat = (slotDate) => {
        const dateArray = slotDate.split("_");
        return dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2];
    };

    const getUserAppointments = async (params) => {
        try {
            const {data} = await axios.get(backendUrl + "/api/user/appointments", {headers: {token}});

            if (data.success) {
                setAppointments(data.appointments.reverse());
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    const cancelAppointment = async (appointmentId) => {
        try {
            const {data} = await axios.post(
                backendUrl + "/api/user/cancel-appointment",
                {appointmentId},
                {headers: {token}}
            );
            if (data.success) {
                toast.success(data.message);
                getUserAppointments();
                getDoctorsData();
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    useEffect(() => {
        if (token) {
            getUserAppointments();
        }
    }, [token]);

    return (
        <div>
            <p className="pb-3 mt-12 font-medium text-zinc-700 border-b">My Appointments</p>

            <div>
                {appointments.slice(0, 4).map((item, index) => (
                    <div className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b" key={index}>
                        <div>
                            <img className="w-40 bg-indigo-50" src={item.docData.image} alt="" />
                        </div>
                        <div className="flex-1 text-sm text-zinc-600">
                            {/* Added Dr. prefix here */}
                            <p className="text-neutral-800 font-semibold">{formatDoctorName(item.docData.name)}</p>
                            <p>{item.docData.speciality}</p>
                            <p className="text-zinc-700 font-medium mt-1">Address</p>
                            <p className="text-xs">{item.docData.address.line1}</p>
                            <p className="text-xs">{item.docData.address.line2}</p>
                            <p className="text-xs mt-1">
                                <span className="text-sm text-neutral-700 font-medium">Date & Time :</span>{" "}
                                {item.slotDate ? slotDateFormat(item.slotDate) : "No Date"} ||{" "}
                                {item.slotTime || "No Time"}
                            </p>
                        </div>

                        <div></div>

                        <div className="flex flex-col gap-2 justify-top">
                            {!item.cancelled && !item.isCompleted && (
                                <button
                                    className="text-sm text-stone-500
                                    text-center sm:min-2-48 py-2 border rounded
                                    hover:bg-primary hover:text-white transition-all duration-300"
                                >
                                    Pay Online
                                </button>
                            )}

                            {!item.cancelled && !item.isCompleted && (
                                <button
                                    onClick={() => cancelAppointment(item._id)}
                                    className="text-sm text-stone-500
                                text-center sm:min-2-48 py-2 border rounded 
                                hover:bg-red-600 hover:text-white transition-all duration-300"
                                >
                                    Cancel Appointment
                                </button>
                            )}

                            {item.cancelled && !item.isCompleted && (
                                <button
                                    className="sm:min-w-48 py-2
                                border border-red-500 rounded text-red-500"
                                >
                                    Appointment Cancelled
                                </button>
                            )}

                            {
                                item.isCompleted && <button className="sm:min-w-48 py-2 rounded border border-green-500 text-green-500">Completed</button>
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyAppointments;
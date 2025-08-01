import {createContext} from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {


    const calculateAge = (dob) => {
        if (!dob) return null;

        const [day, month, year] = dob.split("-");
        const birthDate = new Date(`${year}-${month}-${day}`);

        if (isNaN(birthDate)) return null; // handle invalid date

        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();

        const hasBirthdayPassed =
            today.getMonth() > birthDate.getMonth() ||
            (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

        if (!hasBirthdayPassed) age--;

        return age;
    };

    const months = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const slotDateFormat = (slotDate) => {
        const dateArray = slotDate.split("_");
        return dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2];
    };

    const value = {
        calculateAge,
        slotDateFormat
    };

    return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};

export default AppContextProvider;

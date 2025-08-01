import {createContext} from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {


    const calculateAge = (dob) => {
    if (!dob) return null;

    // Try different date formats
    let birthDate;
    
    // Format 1: DD-MM-YYYY
    if (dob.includes('-')) {
        const parts = dob.split('-');
        if (parts.length === 3) {
            // Check if it's DD-MM-YYYY or YYYY-MM-DD
            if (parts[0].length === 4) { // YYYY-MM-DD
                birthDate = new Date(dob);
            } else { // DD-MM-YYYY
                birthDate = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
            }
        }
    }
    // Format 2: Timestamp or ISO string
    else if (!isNaN(new Date(dob).getTime())) {
        birthDate = new Date(dob);
    }

    // If we couldn't parse the date
    if (!birthDate || isNaN(birthDate.getTime())) return null;

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

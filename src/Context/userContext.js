import { createContext, useState } from "react";

export const userContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [data, setData] = useState();
    const [selected, setSelected] = useState(null);
    const [selectedSem, setSelectedSem] = useState(null);
    return <userContext.Provider value={{ user, setUser, selected, setSelected, selectedSem, setSelectedSem, data, setData }}>{children}</userContext.Provider>
}

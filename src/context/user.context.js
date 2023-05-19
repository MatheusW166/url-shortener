import { createContext, useEffect, useState } from "react";
import { getToken } from "../storage/user.storage.js";
import { getMe } from "../services/user.services.js";

export const UserContext = createContext(null);

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = getToken();
    if (!token) return;
    getMe().then(setUser).catch(console.log);
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

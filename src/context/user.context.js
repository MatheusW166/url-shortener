import { createContext, useEffect, useState } from "react";
import { getToken, removeToken } from "../storage/user.storage.js";
import { getMe } from "../services/user.services.js";

export const UserContext = createContext(null);

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = getToken();
    if (!token) return;
    getMe()
      .then(setUser)
      .catch(() => removeToken());
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

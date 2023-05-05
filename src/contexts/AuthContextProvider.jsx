import React, { createContext, useState } from 'react'

const AuthContext = createContext();

function AuthContextProvider({ children }) {

    let [auth, setAuth] = useState(0);

    return (
        <div>

            <AuthContext.Provider value={{auth,setAuth}}>
                {children}
            </AuthContext.Provider>

        </div>
    )
}

export default AuthContextProvider;
export { AuthContext };
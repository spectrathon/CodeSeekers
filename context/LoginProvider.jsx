import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const LoginContext = createContext();

const LoginProvider = (props) =>{
    const [role,setRole] = useState("user");
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const [code,setCode] = useState("");
    const [caretaker, setCaretaker] = useState({name: '', email: '', age: '', gender: '', number: '', });
    return (
        <LoginContext.Provider value={{role,setRole,isLoggedIn,setIsLoggedIn,code,setCode,caretaker,setCaretaker}} >
            {props.children}
        </LoginContext.Provider>
    );
}

export default LoginProvider;

export const useLogin =()=> useContext(LoginContext);
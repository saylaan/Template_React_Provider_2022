import React from "react";
/* ------------- || Providers Imports || ------------- */
import useSurvey from "./SurveyProvider";
/* ------------- || API Client Imports || ------------- */
import { login, register } from "../services/API/Auth/auth.service";

export const authContext = React.createContext();

const useAuth = () => {
  const [isAuth, setIsAuth] = React.useState(false);
  const { init } = useSurvey();

  const Login = async (credentials) => {
    const response = await login(credentials);
    return new Promise((res) => {
      console.log(response);
      if (response.token) {
        setIsAuth(true);
        init();
        res();
      }
    });
  };

  const Register = async (credentials) => {
    const response = await register(credentials);
    return new Promise((res) => {
      console.log(response);
      if (response.data.token) {
        setIsAuth(true);
        init();
        res();
      }
    });
  };
  const logout = () => {
    console.log("logout");
    return new Promise((res) => {
      setIsAuth(false);
      res();
    });
  };

  return { isAuth, Login, logout, Register };
};

export const AuthProvider = ({ children }) => {
  const auth = useAuth();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

const AuthConsumer = () => {
  return React.useContext(authContext);
};

export default AuthConsumer;

import { useState, useCallback, useMemo } from "react";
import useAxios from "../../hooks/useAxios";
import { login, signup,  getUser, getUserData, editUser } from "../services/usersApiService";
import {
  removeToken,
  setTokenInLocalStorage,
} from "../services/localStorageService";
import { useUser } from "../providers/UserProvider";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import normalizeUser from "../helpers/normalization/normalizeUser";


const useUsers = () => {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  const navigate = useNavigate();
  const { user, setUser, setToken } = useUser();

  useAxios();

  const requestStatus = useCallback(
    (loading, errorMessage, user = null) => {
      setLoading(loading);
      setUser(user);
      setError(errorMessage);
    },
    [setUser]
  );

  const handleLogin = useCallback(async (user) => {
    try {
      const token = await login(user);
      setTokenInLocalStorage(token);
      setToken(token);
      const userFromLocalStorage = getUser();
      requestStatus(false, null, userFromLocalStorage);
      navigate(ROUTES.CARDS);
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, [navigate , requestStatus, setToken]);

  const handleLogout = useCallback(() => {
    removeToken();
    setUser(null);
  }, [setUser]);

  const handleSignup = useCallback(
    async (userFromClient) => {
      try {
        const normalizedUser = normalizeUser(userFromClient);
        await signup(normalizedUser);
        await handleLogin({
          email: userFromClient.email,
          password: userFromClient.password,
        });
      } catch (error) {
        requestStatus(false, error, null);
      }
    },
    [requestStatus, handleLogin]
  );



const handleGetUser = useCallback(async () => {
  try {
    setLoading(true);
    const user = await getUserData();
    return user;
  } catch (error) {
    requestStatus(false, error, null);
  }
}, []);

const handleUpdateUser = useCallback(async(user_id, userFromClient) =>{
  try {
    await editUser(user_id, userFromClient);
    setLoading(false);
    navigate(ROUTES.CARDS);
  } catch (error) {
    requestStatus( false, error, null);
  }
},[navigate , requestStatus] )

  const value = useMemo(
    () => ({ isLoading, error, user }),
    [isLoading, error, user ]
  );

  return {
    value,
    handleLogin,
    handleLogout,
    handleSignup,
    handleGetUser,
    handleUpdateUser,

  };
};

export default useUsers;

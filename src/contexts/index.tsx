import React, {
  createContext,
  useContext,
  useReducer,
  useMemo,
  useEffect,
} from "react";
import jwt_decode from "jwt-decode";
import setAuthToken from '../utils/setAuthToken';
import Axios from 'axios';

const AllContext = createContext<any | undefined>(undefined);

export function useAllContext() {
  return useContext(AllContext);
}

function reducer(state: any, { type, payload }: any) {
  return {
    ...state,
    [type]: payload
  }
}

const INIT_STATE = {
  user: {},
  userInfo: {},
  isAuthenticated: false
};

export default function Provider({ children }: any) {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  useEffect(() => {
    setAuthInfo();
  }, [])

  const setAuthInfo = () => {
    if (localStorage.jwtToken) {
      const token = localStorage.jwtToken;
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch({
        type: "isAuthenticated",
        payload: true
      });
      dispatch({
        type: "user",
        payload: decoded
      });
      Axios.post("/api/users/get-one-user", { id: Object(decoded).id })
        .then((res) => {
          dispatch({
            type: "userInfo",
            payload: res.data
          });
        })
      return decoded;
    } else {
      return false;
    }
  }

  const updateTicket = () => {
    Axios.post("/api/users/get-one-user", { id: state.user.id })
      .then((res) => {
        dispatch({
          type: "user",
          payload: {}
        });
      })
  }

  const setLogout = () => {
    localStorage.removeItem("jwtToken");
    // Remove auth header for future requests
    setAuthToken(false);
    dispatch({
      type: "user",
      payload: {}
    });
    dispatch({
      type: "userInfo",
      payload: {}
    });
    dispatch({
      type: "isAuthenticated",
      payload: false
    });
  }

  return (
    <AllContext.Provider
      value={useMemo(
        () => [
          state,
          {
            setAuthInfo,
            updateTicket,
            setLogout
          }
        ],
        [state]
      )}
    >
      {children}
    </AllContext.Provider>
  );
}
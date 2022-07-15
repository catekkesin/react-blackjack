import { createContext, useReducer } from "react";
import { reducer, initialState } from "../reducer/reducer";

const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MainContext.Provider value={{ state, dispatch }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainContext;

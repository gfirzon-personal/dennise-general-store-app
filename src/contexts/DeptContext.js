import { createContext, useContext, useReducer } from "react";
import { useQuery } from "react-query";
import { getDepartmentList } from "../services/GeneralStoreClient";
import reducer from "./deptReducer";

let initialState = {
  departments: [],
  isLoading: false,
};

// countercontext is storing all of our data that we will pass down
// hence it being wrapped below and then providing access
const DeptContext = createContext(0);

function DeptContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { isLoading, isError, data, error, refetch } = useQuery(["repo"], () => {
    let getData = async () => {
      dispatch({ type: "DATA-REQUESTED" });

      const response = await getDepartmentList();

      dispatch({ type: "RECEIVED", payload: response.data.data });
    }

    getData();

  })


  async function getList() {
  }

  return (
    <DeptContext.Provider
      value={{
        state,
        getList,
      }}
    >
      {children}
    </DeptContext.Provider>
  );
}

function useDepts() {
  // we are passing the countercontext to the useContext bc we want to have access to those variables
  const context = useContext(DeptContext);

  if (context == undefined) {
    throw new Error("useDepts must be used within a DeptContextProvider");
  }

  return context;
}

export { DeptContextProvider, useDepts };

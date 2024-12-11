import { useParams } from "react-router-dom";
import { useEffect, useReducer } from "react";
import { getDepartment } from "../../services/GeneralStoreClient";
import DepartmentForm from "./DepartmentForm";

function reducer(state, action) {
  if (action.type == "RECEIVED") {
    return {
      ...state,
      department: action.payload,
      isLoading: false,
    };
  } else if (action.type == "DATA-REQUESTED") {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type == "CREATE") {
    return {
      ...state,
      department: {
        departmentId: -1,
        departmentName: "",
        phone: "",
      },
      isLoading: false,
    };
  }
  return {
    ...state,
  };
}

export default function DepartmentDetails() {
  let initialState = {
    department: null,
    isLoading: false,
  };

  let { id } = useParams();

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    //console.log('Departments component loaded');
    const getData = async () => {
      dispatch({ type: "DATA-REQUESTED" });

      const response = await getDepartment(id);
      //this gets the data from web api/ url
      let dept = response.data.data;
      console.log("getDepartment", response.data.data);
      //setDepartments(() => array);
      dispatch({ type: "RECEIVED", payload: dept });
    };

    //only call getData if id is > 0

    if (id > 0) {
      getData();
    } else {
      //make the state dept an empty object
      dispatch({ type: "CREATE" });
    }
  }, []);

  return (
    <div>
      Details for Department {id}
      {state.department ? (
        <DepartmentForm dept={state.department} />
      ) : (
        <div>No data</div>
      )}
    </div>
  );
}

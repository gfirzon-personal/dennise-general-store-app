import { useEffect, useState } from "react";
import { getEmployeeList } from "../../services/GeneralStoreClient";
import EmployeeTable from "../../components/EmployeeTable";

function Employees() {
  const [employees, setEmployees] = useState([]);
  //this line of code is needed because we want the employees variable to be under state management of react so that if its updated the jsx below would be redrawn
  //change the useState to UseReducer => 

  useEffect(() => {
    const getData = async () => {
      const response = await getEmployeeList();
      let array = response.data.data;
      setEmployees(() => array);
    };

    getData();
  }, []);

  return (
    <div>
      <h1>Employees</h1>
      <p>you have {employees.length} employees</p>
      <EmployeeTable employees={employees}/>
    </div>
  );
}

export default Employees;

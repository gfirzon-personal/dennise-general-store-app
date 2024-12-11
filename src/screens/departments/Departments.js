import { useEffect } from "react";
import { Link } from "react-router-dom";
import DepartmentTable from "../../components/DepartmentTable";
import LoadingSpinner from '../../common/LoadingSpinner/LoadingSpinner'
import { useDepts } from '../../contexts/DeptContext'

function Departments() {
  const { state: { departments, isLoading } } = useDepts();

  return (
    <div>
      <h1>Departments</h1>

      <nav>
        <Link to="/departments/-1">Add Department</Link> |{" "}
      </nav>

      <p>You have {departments.length} departments</p>
      {
        isLoading
          ? <LoadingSpinner />
          : <DepartmentTable departments={departments} />
      }

    </div>
  );
}

export default Departments;

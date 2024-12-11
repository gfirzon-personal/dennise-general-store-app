import EmployeeTableRow from "./EmployeeTableRow";

function EmployeeTable({ employees }) {
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>Employee Id</th>
          <th>Lastname</th>
          <th>Firstname</th>
          <th>*************</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((m, i) => {
          return (
            <EmployeeTableRow key={i} employee={m} i={i} />
            //discuss key
          );
        })}
      </tbody>
    </table>
  );
}

//create a depttablerow component and dump the responsibility of displaying table row.
//go over funfunfunction => map and filter

export default EmployeeTable;

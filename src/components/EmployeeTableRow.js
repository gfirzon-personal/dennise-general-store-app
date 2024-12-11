function EmployeeTableRow({ i, employee }) {
  return (
    <tr key={i}>
      <td>{employee.employeeId}</td>
      <td>{employee.lastname}</td>
      <td>{employee.firstname}</td>
      <td></td>
    </tr>
  );
}

//create a depttablerow component and dump the responsibility of displaying table row.
//go over funfunfunction => map and filter

export default EmployeeTableRow;

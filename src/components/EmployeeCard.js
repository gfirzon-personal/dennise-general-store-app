function EmployeeCard({ employeeId, lastName, firstName }) {

  return (
    <div>
      <div>
        Employee Id: {employeeId}
      </div>
      <div>
        Last Name: {lastName}
      </div>
      <div>
        First Name: {firstName}
      </div>
    </div>
  );
}

export default EmployeeCard;
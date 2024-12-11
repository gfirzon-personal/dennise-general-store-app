import EmployeeCard from "./EmployeeCard";

function EmployeeCardList() {
  const employees = [
    {
      employeeId: "111",
      lastName: "Jones",
      firstName: "Peter",
    },
    {
      employeeId: "222",
      lastName: "Brown",
      firstName: "Mary",
    },
    {
      employeeId: "333",
      lastName: "White",
      firstName: "Barry",
    },
  ];

  return (
    <div>
      {employees.map((emp) => {
        return (
          <EmployeeCard employeeId={emp.employeeId} lastName={emp.lastName} firstName={emp.firstName}></EmployeeCard>
        );
      })}
    </div>
  );
}

export default EmployeeCardList;

//<EmployeeCard employeeId="123" lastName="Jones" ></EmployeeCard>

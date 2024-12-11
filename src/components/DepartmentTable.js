import DepartmentTableRow from "./DepartmentTableRow";

function DepartmentTable({ departments }) {
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>Department Id</th>
          <th>Department Name</th>
          <th>Phone</th>
          <th>*************</th>
        </tr>
      </thead>
      <tbody>
        {departments.map((m, i) => {
          return (
            <DepartmentTableRow key={i} dept={m} i={i}/>
            //discuss key
          );
        })}
      </tbody>
    </table>
  );
}

//create a depttablerow component and dump the responsibility of displaying table row.
//go over funfunfunction => map and filter

export default DepartmentTable;

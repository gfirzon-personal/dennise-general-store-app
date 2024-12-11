import { Link } from "react-router-dom";

export default function DepartmentTableRow({ i, dept }) {
  return (
    <tr key={i}>
      <td><Link to={`/departments/${dept.departmentId}`}>{dept.departmentId}</Link></td>
      <td>{dept.departmentName}</td>
      <td>{dept.phone}</td>
      <td></td>
    </tr>
  );
}
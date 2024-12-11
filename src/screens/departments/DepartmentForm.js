import { useForm } from "react-hook-form";
import { updateDepartment, createDepartment } from "../../services/GeneralStoreClient";

export default function DepartmentForm({ dept }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: dept,
  });

  const save = async function(data) {
    //console.log(data);
    if (data.departmentId > 0) {
      await updateDepartment(data)
    }
    else {
      await createDepartment(data)
    }
  }

  return (

    <form onSubmit={handleSubmit(save)}>
      <div className="mb-3">
        <label htmlFor="">Department Id:</label>
        <input
          className="form-control"
          type="text"
          {...register("departmentId", { required: true })}
          placeholder="Department ID..."
          readOnly
        ></input>
      </div>

      <div className="mb-3">
        <label htmlFor="">Department Name:</label>
        <input
          className="form-control"
          type="text"
          {...register("departmentName", { required: true })}
          placeholder="Department Name..."
        ></input>
      </div>

      <div className="mb-3">
        <label htmlFor="">Department Phone:</label>
        <input
          className="form-control"
          type="text"
          {...register("phone", { required: true })}
          placeholder="Department Phone..."
        ></input>
      </div>

      <button type="submit" className="btn btn-primary">Save</button>
      
    </form>
  );
}

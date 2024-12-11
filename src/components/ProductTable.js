import ProductTableRow from "./ProductTableRow";

function ProductTable({ products }) {
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>Product Id</th>
          <th>Product Name</th>
          <th>Product Type</th>
          <th>Product Price</th>
          <th>*************</th>
        </tr>
      </thead>
      <tbody>
        {products.map((m, i) => {
          return (
            <ProductTableRow key={i} prod={m} i={i} />
            //discuss key
          );
        })}
      </tbody>
    </table>
  );
}

export default ProductTable;

function ProductTableRow({ i, prod }) {
  return (
    <tr key={i}>
      <td>{prod.productId}</td>
      <td>{prod.productName}</td>
      <td>{prod.productType}</td>
      <td>{prod.productPrice}</td>
      <td></td>
    </tr>
  );
}

export default ProductTableRow;

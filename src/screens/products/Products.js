import { useEffect, useState } from "react";
import { getProductList } from "../../services/GeneralStoreClient";
import ProductTable from "../../components/ProductTable";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await getProductList();
      let array = response.data.data;
      setProducts(() => array);
    };

    getData();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <p>you have {products.length} products</p>
      <ProductTable products={products} />
    </div>
  );
}

export default Products;

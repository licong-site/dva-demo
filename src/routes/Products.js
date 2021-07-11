import React from "react";
import ProductList from "../components/ProductList";
import { connect } from "dva";

const Products = ({ dispatch, products }) => {
  function handleDelete(id) {
    dispatch({
      type: "products/deleteAfter1Second",
      payload: id,
    });
  }

  return (
    <div>
      <h2>Products List</h2>
      <ProductList products={products} onDelete={handleDelete}></ProductList>
    </div>
  );
};

/**
 * 监听属性，建立组建和数据的映射关系
 */
// const mapStateToProps = (state) => ({
//   products: state.products,
// });
const mapStateToProps = ({ products }) => ({
  products,
});

export default connect(mapStateToProps)(Products);

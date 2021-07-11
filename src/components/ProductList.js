import React from "react";
import PropTypes from "prop-types";
import { Popconfirm, Table, Button } from "antd";

const ProductList = ({ onDelete, products }) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => {
        return (
          <Popconfirm title="Delete" onConfirm={() => onDelete(record.id)}>
            <Button>Delete</Button>
          </Popconfirm>
        );
      },
    },
  ];

  return <Table columns={columns} dataSource={products} />;
};

ProductList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};

export default ProductList;

import React, { useState } from 'react';
import { products } from '../../data';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import "./Products.css"

export default function Products() {

  const [productsData, setProductsData] = useState(products);

  const productsDelete = (produtsID) => {

    setProductsData(productsData.filter(produts => produts.id !== produtsID));

  }

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "title",
      headerName: "Name",
      width: 200,
      renderCell: (params) => {
        return (
          <Link to={`/products/${params.row.id}`}>
            <div className='userListUser'>
              <img src={params.row.avatar} alt="logo" className='userListImg' />
              {
                params.row.title
              }
            </div>
          </Link>
        )
      }
    },
    {
      field: "price",
      headerName: "Price",
      width: 120,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/products/${params.row.id}`}>
              <button className='userListEdit'>Edit</button>
            </Link>
            <DeleteOutlineIcon className="userListDelete" onClick={() => productsDelete(params.row.id)} />
          </>
        )
      }
    },
  ];
  
  return (
    <div className='userList'>
      <DataGrid
        rows={productsData}
        columns={columns}
        disableRowSelectionOnClick
        pageSize={2}
        checkboxSelection
      />
    </div>
  );
};

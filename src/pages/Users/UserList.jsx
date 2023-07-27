import React, { useState } from 'react';
import { userRows } from "../../data";
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import "./UserList.css"

export default function UserList() {

  const [userData, setUserData] = useState(userRows);

  const userDelete = (userID) => {

    setUserData(userData.filter(user => user.id !== userID));

  }

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <Link to="/">
            <div className='userListUser'>
              <img src={params.row.avatar} alt="logo" className='userListImg' />
              {
                params.row.username
              }
            </div>
          </Link>
        )
      }
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row.id}`}>
              <button className='userListEdit'>Edit</button>
            </Link>
            <DeleteOutlineIcon className="userListDelete" onClick={() => userDelete(params.row.id)} />
          </>
        )
      }
    },
  ];
  
  return (
    <div className='userList'>
      <DataGrid
        rows={userData}
        columns={columns}
        disableRowSelectionOnClick
        pageSize={2}
      />
    </div>
  );
};

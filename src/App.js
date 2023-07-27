import React, { useEffect, useState } from 'react'
import routes from './routes'
import { json, useRoutes } from 'react-router-dom'
import Topbar from './components/topbar/Topbar'
import Sidebar from './components/sidebar/Sidebar'

import './App.css'
import Pagination from './Pagination/Pagination'

export default function App() {

    // console.log(todos);

    let router = useRoutes(routes)

    return (
        <>
            {/* <Topbar />
            <div className="container">
                <Sidebar />
                {router}
            </div> */}
            <Pagination />
        </>
    )
}



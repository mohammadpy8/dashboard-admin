import React from 'react';
import routes from './routes';
import { useRoutes } from 'react-router-dom';
import TopBar from './components/topBar/TopBar';
import SideBar from './components/sideBar/SideBar';
import "./App.css";

function App() {

  const router = useRoutes(routes);

  return (
    <div >
      <TopBar />
      <div className='container'>
        <SideBar />
        {router}
      </div>
    </div>
  );
}

export default App;

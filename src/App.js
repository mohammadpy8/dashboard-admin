import React from 'react';
import routes from './routes';
import { useRoutes } from 'react-router-dom';
import TopBar from './components/topBar/TopBar';
import SideBar from './components/sideBar/SideBar';
import "./App.css";

function App() {

  const router = useRoutes(routes);

  return (
    < >
      <TopBar />
      <div className='container'>
        <SideBar />
        {router}
      </div>
    </>
  );
}

export default App;

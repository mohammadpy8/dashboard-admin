import React from 'react';
import routes from './routes';
import { useRoutes } from 'react-router-dom';
import TopBar from './components/topBar/TopBar';

function App() {

  const router = useRoutes(routes);

  return (
    <div >
      <TopBar />
      {router}
    </div>
  );
}

export default App;

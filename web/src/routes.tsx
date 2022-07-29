import react from 'react';
import { Route, BrouserRouter } from react-router-dom;
import Home from './pages/Home';
import CratePoint from 'pages/CreatePoint';

const Routes () => {
    return (
      <BrouserRouter>

      <Route component={Home} path="/" exact/>
       <Route component={CreatePoint} path="/create-point"/>
      
      
      </BrouserRouter>  )

}

export default Routes;
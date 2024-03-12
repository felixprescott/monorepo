import React, {useState} from 'react';
import { Link, Outlet } from 'react-router-dom';
import {aboutRoutes} from '@packages/shared/src/routes/admin';
import {shopRoutes} from '@packages/shared/src/routes/shop';

export const App = () => {
    const [counter, setCounter] = useState(0);
   
    return (
      <div data-testid={'App.TestId-1'} >
        <h1>PAGE</h1>
        <div>
          <Link to={'/'}>HOME</Link>
        </div>
        <div>
          <Link to={aboutRoutes.about}>ABOUT</Link>
        </div>
        <div>
          <Link to={shopRoutes.main}>SHOP</Link>
        </div>
        <Outlet />
      </div>
    );
};

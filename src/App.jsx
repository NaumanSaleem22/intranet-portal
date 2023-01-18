import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { 
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';

import Layout from './layout';

import { routes } from './config/routes';

function App() {
  return (
    <Router>
      <Layout>
          <Routes>
            {routes.map((each, idx) => React.cloneElement(each.component, { key: idx }))}
          </Routes>
        </Layout>
    </Router>
    
  );
}

export default App;

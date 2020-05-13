import React, {Fragment} from 'react';
import './styles/baseStyle.scss';
import AppRouter from './routes/AppRouter';

function App() {
  return (
    <Fragment>
      <p>Header Will be Here</p>
      <AppRouter />
    </Fragment>
  );
}

export default App;

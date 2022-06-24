import React, { Fragment } from 'react';
import './App.css';

//components
import InputQoute from './components/InputQoute';
import ListQoutes from './components/ListQoutes';

function App() {
  return (
    <Fragment>
      <div className='container'>
        <InputQoute />
        <ListQoutes />
      </div>
    </Fragment>
  );
}

export default App;

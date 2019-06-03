import React from 'react';
import {Provider} from 'mobx-react'
import store from './container'
import Pages from './pages';

type FunctionalComp= React.FC

const App: FunctionalComp = (props : any) => {
  return (
    <Provider {...store}>
      <Pages {...props}/>
    </Provider>
  );
}

export default App;

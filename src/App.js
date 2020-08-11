import React from 'react';
import Pictures from './Components/Pictures'
import { connect } from 'react-redux'



function App() {
  return (
    <div>
      <Pictures/>
    </div>
  );
}

export default connect(null,{})(App);

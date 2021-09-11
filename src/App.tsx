import React from 'react';
import { MyForm } from './MyForm';


function App() {
  return (
    <div className="App" style={{ textAlign: 'center' }}>
      <MyForm onSubmit={({ firstName, lastName, email }) => {
        console.log(firstName, lastName, email);

      }} />
    </div>
  );
}

export default App;
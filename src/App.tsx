import React from 'react';
import './App.css';
import InputField from './components/InputField/InputField';


const App: React.FC = () => {
return <div className="App">
  <span className="header">Todo App with TypeScript</span>
  <InputField/>
</div>
};

export default App;

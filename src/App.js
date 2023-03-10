import './App.css';
import { Link, Routes, Route } from 'react-router-dom';

import TaskEntry1 from './components/TaskEntry';

import TaskHolder from './components/TaskHolder';



function App() {

  return (
   <main>
      <div className='intro'>
        <h1>Welcome to the Task Tracker</h1>
        <h2>Instructions</h2>
        <p>Click on one of the links to get started.</p>
      </div>
      <nav>
        <ul className='links'>
          <button className='buttonLink'><Link to="/entry">Task Entry</Link></button>
          <button className='buttonLink'><Link to="/view">Task View</Link></button>
          
        </ul>
      </nav>
      {/* Route Links to component */}
      <Routes>
        <Route path="/entry" element= {<TaskEntry1 />} />
        <Route path="/view" element={<TaskHolder />} /> 

      </Routes>
   </main>
  );
}


export default App;
import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateUser from './Screens/CreateUser';
import EditUser from './Screens/EditUser';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<CreateUser />} />
        <Route path='/edit' element={<EditUser />} />
      </Routes>
    </Router>
  )
}

export default App
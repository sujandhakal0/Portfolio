import React, { useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import FotgotPassword from './pages/FotgotPassword';
import ManageProjects from './pages/ManageProjects';
import ManageSkills from './pages/ManageSkills';
import ManageTimeline from './pages/ManageTimeline';
import ResetPassword from './pages/ResetPassword';
import ViewProject from './pages/ViewProject';
import UpdateProject from './pages/UpdateProject';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { getUser } from './store/slices/userSlice';
import "./App.css"

const App = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getUser())
  },[])
  return (
    <Router>
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/login' element={<Login />} />
         <Route path='/password/forgot' element={<FotgotPassword />} />
         <Route path='/password/reset/:token' element={<ResetPassword />} />
         <Route path='/manage/skills' element={<ManageSkills />} />
         <Route path='/manage/timeline' element={<ManageTimeline />} />
         <Route path='/manage/projects' element={<ManageProjects />} />
         <Route path='/view/projects/:id' element={<ViewProject />} />
         <Route path='/update/projects/:id' element={<UpdateProject />} />
      </Routes>
      <ToastContainer position='top-center' theme='dark' />
    </Router>
  )
}

export default App

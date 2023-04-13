import { Routes, Route } from 'react-router-dom'

import Layout from './Layout'
import Home from './scenes/Home'
import Dashboard from './scenes/Dashboard'
import Login from './scenes/Login'
import Register from './scenes/Register'
import Profile from './scenes/Profile'
import ChangeProfile from './scenes/ChangeProfile'
import ChangePassword from './scenes/ChangePassword'
import NotFound from './scenes/NotFound'

import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="profile" element={<Profile />} />
        <Route path="change-profile" element={<ChangeProfile />} />
        <Route path="change-password" element={<ChangePassword />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App

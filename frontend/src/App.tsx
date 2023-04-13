import { Routes, Route } from 'react-router-dom'

import Layout from './Layout'
import Home from './Home'
import Dashboard from './Dashboard'
import Login from './Login'
import Register from './Register'
import Profile from './Profile'
import ChangeProfile from './ChangeProfile'
import ChangePassword from './ChangePassword'
import NotFound from './NotFound'

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

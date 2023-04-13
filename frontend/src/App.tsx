import { Routes, Route, Link } from 'react-router-dom'

import Layout from './Layout'
import Home from './Home'
import Dashboard from './Dashboard'
import Login from './Login'
import Register from './Register'
import Profile from './Profile'
import ChangeProfile from './ChangeProfile'
import ChangePassword from './ChangePassword'

import 'bootstrap/dist/css/bootstrap.css'

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

        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  )
}

const NoMatch = () => {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  )
}

export default App

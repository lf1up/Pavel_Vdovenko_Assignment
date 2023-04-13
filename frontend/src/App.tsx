import Cookies from 'js-cookie'

import {
  Routes,
  Route,
  Outlet,
  Link,
  Navigate,
  useLocation,
} from 'react-router-dom'

import { Container } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
// import { NavDropdown } from 'react-bootstrap';

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

const Layout = () => {
  const location = useLocation()
  const accessToken = Cookies.get('access_token')

  if (
    !accessToken &&
    location.pathname !== '/login' &&
    location.pathname !== '/register'
  ) {
    return <Navigate to="/login" />
  }

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">📈 Sales App</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Nav>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/register">Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
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

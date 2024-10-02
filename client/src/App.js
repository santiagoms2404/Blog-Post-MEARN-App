import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Route, Routes } from 'react-router-dom';
import Create from './pages/create';
import Edit from './pages/edit';
import Home from './pages/home';
import Post from './pages/post';
import { useContext } from 'react'; // import useContext from React
import { ThemeContext } from './ThemeContext'; // Import ThemeContext
import './App.css'; 

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext); // Use ThemeContext

  return (
    <div className={theme}> {/* Apply theme class */}
      <Navbar bg={theme === 'dark' ? 'dark' : 'light'} expand="lg" variant={theme}>
        <Container>
          <Navbar.Brand href="/">My Blog</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="me-auto">
            <Nav.Link href="/posts/new">New</Nav.Link>
            <Nav.Link onClick={toggleTheme}>Toggle Theme</Nav.Link> {/* Button to toggle theme */}
          </Nav>
        </Container>
      </Navbar>
      <div className="App-content"> {/* Use App-content to center the main content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<Post />} />
          <Route path="/posts/new" element={<Create />} />
          <Route path="/posts/:id/edit" element={<Edit />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

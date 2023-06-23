// Import React
import React from "react";

// Import Bootstrap
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Import Custom CSS
import "./index.css";

// Import from react-router-dom
import { Route, Link, Routes } from "react-router-dom";

// Import other React Component
import CreateStudent from "./components/createstudent";
import EditStudent from "./components/edit-student.component";
import StudentList from "./components/studentlist";

// App Component
const App = () => {
  return (

    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>
              <Link to={"/create-student"} className="nav-link">
                SMS
              </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">
              {/* <Nav>
                <Link to={"/create-student"} className="nav-link">
                  Create Student
                </Link>
              </Nav> */}

              <Nav>
                <Link to={"/student-list"} style={{fontSize: '20px' , color: '#fff'}} className="nav-link">
                  Student List
                </Link>
              </Nav>
            </Nav>
          </Container>
        </Navbar>
      </header>

      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Routes>
                <Route exact path="/" element={<CreateStudent />} />
                <Route path="/create-student" element={<CreateStudent />} />
                <Route path="/edit-student/:id" element={<EditStudent />} />
                <Route path="/student-list" element={<StudentList />} />
              </Routes>
            </div>
          </Col>
        </Row>
      </Container>
    </div>

  );
};

export default App;

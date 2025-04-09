import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './Login.css';
import { NavLink } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="one">
      <Container>
        <Row className="justify-content-md-center">
          <Col md="4">
            <h2>Login</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <br />
              <Button variant="primary" type="submit">
                Login
              </Button>
              <br />
              <br />
              <div className="text1">
                <p>Don't have an account? <NavLink to="/Signup">Sign up</NavLink></p>
              </div>
              
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;

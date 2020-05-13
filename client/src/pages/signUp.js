import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import { Link } from "react-router-dom";
import { SignIn } from "../components/Sign-In"
// import Button from 'react-bootstrap/Button'

class SignIn extends Component {
    const SignUp = ({ history }) => {
        const handleSignUp = useCallback(async event => {
          event.preventDefault();
          const { email, passwor, name } = event.target.elements;
          try {
            await app
              .auth()
              .createUserWithEmailAndPassword(email.value, password.value);
            history.push("/");
          } catch (error) {
            alert(error);
          }
        }, [history]);


            return (
                <div className= "container">
                       <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
    
                            <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </Form.Row>
    
                        <Form.Group controlId="formGridAddress1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control placeholder="1234 Main St" />
                        </Form.Group>
    \
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        </Form>         
                </div>
  );

};

export default SignIn;


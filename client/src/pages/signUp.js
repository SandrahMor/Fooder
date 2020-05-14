import React, { Component } from 'react'
// import { Col, Row, Container } from "../components/Grid";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Jumbotron from '../components/WelcomJumbotron';
import { Link } from "react-router-dom";


class SignUp extends Component{
    render() {
    return (
        <div>
            <Jumbotron>
                <Form>
                <Form.Row>
                    <Form.Group controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Button variant="primary" type="submit">
                <Link
                  onClick={this.toggleNav}
                  className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                  to="/search" >
                </Link> 
                    Submit
                </Button>
            </Form>  
            </Jumbotron>
            
        </div>   
        
        );
    }
    }

export default SignUp
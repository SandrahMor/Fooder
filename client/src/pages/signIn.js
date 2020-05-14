import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Jumbotron from '../components/WelcomJumbotron';

class SignIn extends Component{
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

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>  
            </Jumbotron>
        </div>    
        );
    }
    }

export default SignIn
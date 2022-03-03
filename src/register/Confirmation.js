import React, { Component } from 'react';
import { Button, Container } from 'react-bootstrap';

const Confirmation = ({ handleChange }) =>{

        return(
            <Container>
                <h1>Confirm your Details</h1>
                <p>Confirm if the following details are correct.</p>
                
                <Button variant="secondary" onClick={this.back}>Back</Button>{' '}
                <Button variant="primary">Confirm</Button>
            </Container>
        )
    }

export default Confirmation;
import React from 'react';
import {Form, Button} from 'react-bootstrap';
const CreateTask: React.FC = props => {
    return (
        <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Title</Form.Label>
                <Form.Control size="sm" type="text" placeholder="New task" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Due Date</Form.Label>
                <Form.Control size="sm" type="date" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control size="sm" as="textarea" rows="3" style={{resize: 'none'}} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Assign To</Form.Label>
                <Form.Control size="sm" as="select">
                <option className="text-muted">(Optional)</option>
                <option>Mohanned Farahat</option>
                <option>Sayed Hamama</option>
                <option>Sameh Sika</option>
                <option>Sayed Byelya</option>
                <option>Hosam Moshkla</option>
                </Form.Control>
            </Form.Group>
            <Button className="primary">Create Task</Button>
        </Form>
    );
}

export default CreateTask;
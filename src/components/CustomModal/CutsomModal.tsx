import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import {CustomModalProps} from './CustomModal.module';

const CustomModal: React.FC<CustomModalProps> = React.memo(props=>{
    return(
        <React.Fragment>
            <Modal show={props.error ? true : false} onHide={props.handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <p>{props.error}</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="warning" onClick={props.handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    )
});

export default CustomModal;
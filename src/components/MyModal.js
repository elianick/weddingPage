import * as React from "react";
import { Modal, Button } from "react-bootstrap";

class MyModal extends React.Component {
    render() {
        return (
            <Modal
                {...this.props}
                bsSize="large"
                aria-labelledby="contained-modal-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Wrapped Text</h4>
                    <p>ssdsdsdsdsd</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
export default MyModal; 
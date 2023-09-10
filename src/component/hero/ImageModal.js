import React from 'react';
import { Modal } from 'react-bootstrap';

const ImageModal = ({ show, onHide, imageUrl }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        {/* <Modal.Title>Image Modal</Modal.Title> */}
      </Modal.Header>
      <Modal.Body>
        <img src={imageUrl} alt="Modal" className="img-fluid" />
      </Modal.Body>
    </Modal>
  );
};

export default ImageModal;

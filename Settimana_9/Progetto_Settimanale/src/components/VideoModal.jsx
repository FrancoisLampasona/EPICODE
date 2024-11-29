import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const VideoModal = ({ show, handleClose, videoTitle, videoUrl }) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{videoTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-black text-white">
        <iframe
          className="w-100"
          height="500px"
          src={videoUrl}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default VideoModal;

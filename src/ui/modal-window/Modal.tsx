import React from "react";

type IMOdal = {
  open: boolean;
  onClose: () => void;
};

const Modal = ({ open, onClose }: IMOdal) => {
  if (!open) return null;

  return (
    <div>
      <div>Modal window</div>
      <button onClick={onClose}>X</button>
    </div>
  );
};

export default Modal;

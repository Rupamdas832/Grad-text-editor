import React, { useState } from "react";
import "./Modal.css";

export const LinkModal = ({ setIsModalOpen, setLink }) => {
  const [text, setText] = useState("");

  return (
    <div className="modal">
      <div className="modal-box">
        <p>Add URL</p>
        <input onChange={(e) => setText(e.target.value)} />
        <div className="modal-footer">
          <button onClick={() => setIsModalOpen(false)} className="modal-btn">
            Cancel
          </button>
          <button onClick={() => setLink(text)} className="modal-btn add">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

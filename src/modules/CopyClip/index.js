import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const CopyClip = (props) => {
  const { search } = useLocation();
  const match = search.match(/q=(.*)/);
  const type = match?.[1];
  const textAreaRef = useRef(null);
  console.log(match, ".......useParams.....", type, "........//....");
  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand("copy");
    e.target.focus();
    toast.success("Great job! Copied.", {
      position: "top-right",
      autoClose: 1800,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return (
    <div style={{ marginTop: "100px" }}>
      <form>
        <textarea ref={textAreaRef} value={type} readOnly />
      </form>
      <div>
        <button className="btn btn-primary" onClick={copyToClipboard}>
          Copy
        </button>
      </div>
    </div>
  );
};

export default CopyClip;

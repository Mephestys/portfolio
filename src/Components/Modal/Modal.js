import React from "react";

import "./Modal.css";

const Modal = (props) => {
  const title = props.project[0];
  const { repoLink, liveLink, longDescription, status } = props.project[1];

  return (
    <div className="Modal-backdrop">
      <div onClick={event => event.stopPropagation()} className="Modal-window">
      <div className="Modal-close-wrapper">
        <div className="Modal-close" onClick={props.toggleModal}>X</div>
      </div>
      <div className="Modal-header">
        <h1 className="Modal-h1">{title}</h1>
      </div>
        <h3>Status: {status}</h3>
        <p className="Modal-p">{longDescription}</p>
        <div className="Modal-links">
          {liveLink.length > 0 ? <a href={liveLink} rel="external noopener noreferrer" target="_blank">Check it out</a> : null}
          {repoLink.length > 0 ? <a href={repoLink} rel="external noopener noreferrer" target="_blank">Get the source</a> : null}
        </div>
      </div>
    </div>
  )
}

export default Modal;

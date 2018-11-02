import React, { Component } from "react";
import Modal from "../Modal/Modal";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

import "./ProjectCard.css";

class ProjectCard extends Component {
  targetElement = null;

  state = {
    modalVisible: false
  }

  componentDidMount() {
    this.targetElement = document.querySelector('#Modal');
  }

  toggleModal = () => {
    this.setState({
      modalVisible: !this.state.modalVisible
    })
    this.state.modalVisible ? enableBodyScroll(this.targetElement) : disableBodyScroll(this.targetElement);
  }
  
  render() {
    const title = this.props.project[0];
    const { image, description } = this.props.project[1];

    return (
      <div className="ProjectCard" onClick={this.toggleModal}>
        {/* <a className="ProjectCard" href={link} rel="external noopener noreferrer" target="_blank"> */}
          <img className="ProjectCard-image" src={image} alt="" />
          <span className="ProjectCard-details">
            <h4 className="ProjectCard-header">{title}</h4>
            <p className="ProjectCard-content">{description}</p>
          </span>
        {/* </a> */}
        {this.state.modalVisible ? <Modal id="Modal" project={this.props.project} toggleModal={this.toggleModal} /> : null}
      </div>
    )
  }
}

export default ProjectCard;

import React, { Component } from "react";
import "./userProfile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default class UserProfile extends Component {
  toggleInfo = (e) => {
    e.target.parentNode.classList.toggle("open");
  };
  render() {
    return (
      <div className="main__userprofile">
        <div className="profile__card user__profile__image">
          <div className="profile__image">
            <img src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png" />
          </div>
          <h4>insert name</h4>
          <p>@insert name</p>
        </div>
        <div className="profile__card">
          <div className="card__header" onClick={this.toggleInfo}>
            <h4>Information</h4>
            <i className="fa fa-angle-down"></i>
          </div>
          <div className="card__content">Nothing here</div>
          <div className="card__header" onClick={this.toggleInfo}>
            <h4>Member</h4>
            <i className="fa fa-angle-down"></i>
          </div>
          <div className="card__content">No one here</div>
          
        </div>
        <button className="leave-btn">
              <FontAwesomeIcon icon="fa-arrow-left"/>
            </button>
      </div>
    );
  }
}

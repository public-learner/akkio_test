import React from 'react';

import { Scrollbars } from "react-custom-scrollbars-2";
import avatar from "../../../assets/face.jpg";

const RightPane = ({ skinGoals }) => {
    return (
      <div className="right-pane">
        <Scrollbars
          className="left-pane-content"
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={200}
        >
          <div className="right-pane-heading">
            <div className="right-pane-heading-avatar">
              <img src={avatar} alt="Avatar" width={70} height={70} />
            </div>
            <div className="right-pane-heading-title">
              Hi {localStorage.getItem("username")}!
            </div>
          </div>

          <div className="right-pane-preferences">
            <ul className="right-pane-preferences-ul">
              {skinGoals
                .filter(skinGoal => {
                  return skinGoal.selected >= 0;
                })
                .map((skinGoal, index) => (
                  <li className="preference-selected" key={index}>
                    {skinGoal.plus}
                    <a href="#" className="preference-selected-a">
                      {skinGoal.value}
                    </a>
                  </li>
                ))}
              {skinGoals
                .filter(skinGoal => {
                  return skinGoal.selected < 0;
                })
                .map((skinGoal, index) => (
                  <li className="preference-not-selected" key={index}>
                    {skinGoal.value}
                  </li>
                ))}
            </ul>
          </div>
        </Scrollbars>
      </div>
    );
};

RightPane.propTypes = {

};

export default RightPane;

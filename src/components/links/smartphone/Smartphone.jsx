import React from "react";
import Styles from "./smartphone.module.css";
import smartPhoneIcon from "../../../assets/images/illustration-phone-mockup.svg";
import arrowR from "../../../assets/images/icon-arrow-right.svg";

import githubIcon from "../../../assets/images/icon-github.svg";
import frontendMentorIcon from "../../../assets/images/icon-frontend-mentor.svg";
import twitterIcon from "../../../assets/images/icon-twitter.svg";
import linkedInIcon from "../../../assets/images/icon-linkedin.svg";
import youtubeIcon from "../../../assets/images/icon-youtube.svg";
import facebookIcon from "../../../assets/images/icon-facebook.svg";
import twitchIcon from "../../../assets/images/icon-twitch.svg";
import devtoIcon from "../../../assets/images/icon-devto.svg";
import codewarsIcon from "../../../assets/images/icon-codewars.svg";
import codepenIcon from "../../../assets/images/icon-codepen.svg";
import freeCodeCampIcon from "../../../assets/images/icon-freecodecamp.svg";
import gitlabIcon from "../../../assets/images/icon-gitlab.svg";
import hashnodeIcon from "../../../assets/images/icon-hashnode.svg";
import stackoverflowIcon from "../../../assets/images/icon-stack-overflow.svg";
import Data from "../../../../Data.json";

export const Smartphone = ({ userPlatforms }) => {
  const smartphoneLinkIcons = [
    { label: "Github", src: githubIcon },
    { label: "Frontend Mentor", src: frontendMentorIcon },
    { label: "Twitter", src: twitterIcon },
    { label: "LinkedIn", src: linkedInIcon },
    { label: "YouTube", src: youtubeIcon },
    { label: "Facebook", src: facebookIcon },
    { label: "Twitch", src: twitchIcon },
    { label: "Dev.to", src: devtoIcon },
    { label: "Codewars", src: codewarsIcon },
    { label: "Codepen", src: codepenIcon },
    { label: "freeCodeCamp", src: freeCodeCampIcon },
    { label: "GitLab", src: gitlabIcon },
    { label: "Hashnode", src: hashnodeIcon },
    { label: "Stack Overflow", src: stackoverflowIcon },
  ];

  const formatLinkStyles = ({ value }) => {
    let background;

    switch (value) {
      case "Github":
        background = "#1A1A1A";
        break;
      case "Frontend Mentor":
        background = "#333";
        break;
      case "Twitter":
        background = "#43B7E9";
        break;
      case "LinkedIn":
        background = "#2D68FF";
        break;
      case "YouTube":
        background = "#EE3939";
        break;
      case "Facebook":
        background = "#2442AC";
        break;
      case "Twitch":
        background = "#EE3FC8";
        break;
      case "Dev.to":
        background = "#333";
        break;
      case "Codewars":
        background = "#8A1A50";
        break;
      case "Codepen":
        background = "black";
        break;
      case "freeCodeCamp":
        background = "#302267";
        break;
      case "GitLab":
        background = "#EB4925";
        break;
      case "Hashnode":
        background = "#0330D1";
        break;
      case "Stack Overflow":
        background = "stackoverflowIcon";
        break;
    }
    return background;
  };

  const handlePlatformClick = (input) => {
    window.open(input, "_blank");
  };

  return (
    <div className={Styles.smartphoneCont}>
      <img
        className={Styles.smartphone}
        src={smartPhoneIcon}
        alt="Smartphone Icon"
      />
      <div className={Styles.platformsArr}>
        {userPlatforms
          ? userPlatforms.map((item, index) => (
              <div
                onClick={() => handlePlatformClick(item.input)}
                style={{ backgroundColor: formatLinkStyles(item) }}
                key={index}
                className={`${Styles.platform} ${item.value}`}
              >
                <div className={Styles.iconAndName}>
                  <img
                    className={Styles.icon}
                    src={
                      smartphoneLinkIcons.find(
                        (icon) => icon.label === item.value
                      )?.src
                    }
                  ></img>
                  <span className={Styles.platformN}>{item.value}</span>
                </div>
                <img
                  className={`${item.value}Arrow`}
                  src={arrowR}
                  alt={`${item.value} Arrow`}
                />
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

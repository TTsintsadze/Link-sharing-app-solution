import React, { useState } from "react";
import Select, { components } from "react-select";
import Styles from "./platform.module.css";
import dragNDrop from "../../../assets/images/icon-drag-and-drop.svg";
import arrowIcon from "../../../assets/images/icon-chevron-down.svg";
import linkIcon from "../../../assets/images/icon-link.svg";

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

const linkRegex =
  /^(https?:\/\/(?:www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}(?:[^\s]*)?)$/;

const platformOptions = [
  { value: "Github", label: "Github" },
  { value: "Frontend Mentor", label: "Frontend Mentor" },
  { value: "Twitter", label: "Twitter" },
  { value: "LinkedIn", label: "LinkedIn" },
  { value: "YouTube", label: "YouTube" },
  { value: "Facebook", label: "Facebook" },
  { value: "Twitch", label: "Twitch" },
  { value: "Dev.to", label: "Dev.to" },
  { value: "Codewars", label: "Codewars" },
  { value: "Codepen", label: "Codepen" },
  { value: "freeCodeCamp", label: "freeCodeCamp" },
  { value: "GitLab", label: "GitLab" },
  { value: "Hashnode", label: "Hashnode" },
  { value: "Stack Overflow", label: "Stack Overflow" },
];

export const Platform = ({
  count,
  currentPlatform,
  platforms,
  setPlatforms,
  showCheckError,
  showEmptyError,
  setShowCheckError,
  setShowEmptyError,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const inputHandler = (event) => {
    const platformData = [...platforms];
    const indexOfData = platformData.findIndex(
      (platform) => platform.id === currentPlatform.id
    );
    const inputValue = event.target.value;

    if (!linkRegex.test(inputValue)) {
      setShowCheckError(true);
      setShowEmptyError(false);
    } else {
      setShowCheckError(false);
    }

    platformData[indexOfData].input = inputValue;
    setPlatforms(platformData);
  };

  const deletePlatform = () => {
    const platformData = [...platforms];
    const indexOfData = platformData.findIndex(
      (platform) => platform.id === currentPlatform.id
    );

    platformData.splice(indexOfData, 1);
    setPlatforms(platformData);
  };

  const selectHandler = (event) => {
    const platformData = [...platforms];
    const indexOfData = platformData.findIndex(
      (platform) => platform.id === currentPlatform.id
    );
    platformData[indexOfData].value = event.value;
    platformData[indexOfData].label = event.label;

    setPlatforms(platformData);
  };

  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <img
          src={arrowIcon}
          alt="Arrow Icon"
          className={
            isMenuOpen
              ? `${Styles.arrowIcon} ${Styles.rotate180}`
              : Styles.arrowIcon
          }
        />
      </components.DropdownIndicator>
    );
  };

  const formatOptionLabel = ({ value, label }) => {
    let iconSrc;

    switch (value) {
      case "Github":
        iconSrc = githubIcon;
        break;
      case "Frontend Mentor":
        iconSrc = frontendMentorIcon;
        break;
      case "Twitter":
        iconSrc = twitterIcon;
        break;
      case "LinkedIn":
        iconSrc = linkedInIcon;
        break;
      case "YouTube":
        iconSrc = youtubeIcon;
        break;
      case "Facebook":
        iconSrc = facebookIcon;
        break;
      case "Twitch":
        iconSrc = twitchIcon;
        break;
      case "Dev.to":
        iconSrc = devtoIcon;
        break;
      case "Codewars":
        iconSrc = codewarsIcon;
        break;
      case "Codepen":
        iconSrc = codepenIcon;
        break;
      case "freeCodeCamp":
        iconSrc = freeCodeCampIcon;
        break;
      case "GitLab":
        iconSrc = gitlabIcon;
        break;
      case "Hashnode":
        iconSrc = hashnodeIcon;
        break;
      case "Stack Overflow":
        iconSrc = stackoverflowIcon;
        break;
    }

    return (
      <div>
        <img
          src={iconSrc}
          alt={`${label} Icon`}
          style={{ marginRight: "8px" }}
        />{" "}
        {label}
      </div>
    );
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: "100%",
      height: "48px",
      borderRadius: "8px",
      border: "1px solid #D9D9D9",
      background: "#FFF",
      appearance: "none",
      paddingLeft: "2.5%",
      marginBottom: "12px",
      boxShadow: "none",
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none",
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: "8px",
      marginTop: "15px",
    }),
    option: (provided, state) => ({
      ...provided,
      height: "48px",
      borderBottom: "1px solid #D9D9D9",
      width: "95%", // Set the separator line width
      marginLeft: "2.5%",

      color: "#333",
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "24px",
    }),
  };

  return (
    <div className={Styles.mainContainer}>
      <div className={Styles.headerCont}>
        <div className={Styles.LinkNumAndIcon}>
          <img
            className={Styles.dragNDrop}
            src={dragNDrop}
            alt="Drag and Drop Icon"
          />
          <h6 className={Styles.linkNum}>Link #{count}</h6>
        </div>
        <h6 className={Styles.removeBtn} onClick={deletePlatform}>
          Remove
        </h6>
      </div>

      <div className={Styles.platformCont}>
        <h6 className={Styles.platformH6}>Platform</h6>
        <Select
          value={currentPlatform}
          onChange={selectHandler}
          options={platformOptions}
          styles={customStyles}
          components={{ DropdownIndicator }}
          formatOptionLabel={formatOptionLabel}
          defaultValue={currentPlatform}
          isSearchable={false}
          menuIsOpen={isMenuOpen}
          onMenuOpen={() => setIsMenuOpen(true)}
          onMenuClose={() => setIsMenuOpen(false)}
        />
        <h6 className={Styles.linkH6}>Link</h6>
        <div className={Styles.linkCont}>
          <div className={Styles.inputAndError}>
            <img className={Styles.linkIcon} src={linkIcon} alt="link icon" />
            {/* <input
              onChange={inputHandler}
              className={`${Styles.linkInput} ${
                showCheckError ? Styles.checkInputError : ""
              }`}
              placeholder="e.g. https://www.github.com/johnappleseed"
              value={currentPlatform.input}
            ></input>
            {showCheckError && (
              <p className={Styles.checkInputErrorText}>Please check the URL</p>
            )}
            {showEmptyError && (
              <p className={Styles.checkInputErrorText}>Can’t be empty</p>
            )} */}
            <input
              onChange={inputHandler}
              className={`${Styles.linkInput} ${
                showCheckError ? Styles.checkInputError : ""
              } ${showEmptyError ? Styles.emptyInputError : ""}`}
              placeholder="e.g. https://www.github.com/johnappleseed"
              value={currentPlatform.input}
            />
            {showCheckError && (
              <p className={Styles.checkInputErrorText}>Please check the URL</p>
            )}
            {showEmptyError && (
              <p className={Styles.checkInputErrorText}>Can’t be empty</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

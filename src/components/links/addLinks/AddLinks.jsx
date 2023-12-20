import React, { useEffect, useState } from "react";
import Styles from "./addLinks.module.css";
import { GetStarted } from "../getStarted/GetStarted";
import { Platform } from "../platform/Platform";
import { Smartphone } from "../smartphone/Smartphone";
import { v4 as uuidv4 } from "uuid";
import Data from "../../../../Data.json";

export const AddLinks = () => {
  const [platforms, setPlatforms] = useState([]);
  const [showGetStarted, setShowGetStarted] = useState(true);
  const [userPlatforms, setUserPlatforms] = useState([]);
  const [showEmptyError, setShowEmptyError] = useState(false);
  const [showCheckError, setShowCheckError] = useState(false);

  function handleAddBtn() {
    const myUUID = uuidv4();
    setShowGetStarted(false);
    setPlatforms([
      ...platforms,
      { value: "Github", label: "Github", input: "", id: myUUID },
    ]);
  }

  const userData = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    const userPlatforms = Data.Links.find(
      (item) => item.userId === userData.UserId
    )?.platforms;
    setUserPlatforms(userPlatforms);
  }, []);

  function handleSaveBtn() {
    const savedPlatforms = platforms.map((platform) => {
      return {
        value: platform.value,
        label: platform.label,
        input: platform.input,
        id: platform.id,
      };
    });

    const indexOfData = Data.Links.findIndex(
      (user) => user.userId === userData.UserId
    );

    if (indexOfData >= 0) {
      Data.Links.splice(indexOfData, 1);
      Data.Links.push({
        userId: userData.UserId,
        platforms: [...savedPlatforms],
      });
    } else {
      Data.Links.push({
        userId: userData.UserId,
        platforms: [...savedPlatforms],
      });
    }
    const currentUserId = JSON.parse(
      localStorage.getItem("currentUser")
    ).UserId;
    const currentLinks = Data.Links.find(
      (item) => item.userId === currentUserId
    );
    setUserPlatforms([...savedPlatforms]);
    console.log(currentLinks);
    const isEmpty = platforms.some((platform) => platform.input === "");

    if (isEmpty) {
      setShowEmptyError(true);
      setShowCheckError(false);
    } else {
      setShowEmptyError(false);
    }
  }

  return (
    <div className={Styles.body}>
      <div className={Styles.mainContainer}>
        <div className={Styles.smartLogoAndContent}>
          <Smartphone userPlatforms={userPlatforms} />
          <div className={Styles.contentAndSaveCont}>
            <div className={Styles.contentContainer}>
              <h1 className={Styles.customizeH1}>Customize your links</h1>
              <p className={Styles.customizeP}>
                Add/edit/remove links below and then share all your profiles
                with the world!
              </p>
              <button onClick={handleAddBtn} className={Styles.addButton}>
                + Add new link
              </button>
              {platforms.map((item, index) => (
                <Platform
                  key={index}
                  count={index + 1}
                  platforms={platforms}
                  setPlatforms={setPlatforms}
                  currentPlatform={item}
                  showCheckError={showCheckError}
                  setShowCheckError={setShowCheckError}
                  showEmptyError={showEmptyError}
                  setShowEmptyError={setShowEmptyError}
                />
              ))}
              {showGetStarted && <GetStarted />}
            </div>
            <div className={Styles.saveContainer}>
              <button
                onClick={handleSaveBtn}
                className={`${Styles.saveButton} ${
                  !showGetStarted ? Styles.visible : ""
                }`}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

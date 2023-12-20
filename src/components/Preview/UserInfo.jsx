import { useEffect, useState } from "react";
import Profile from "../../assets/images/user-profile-image.jpg";
import Styles from "./UserInfo.module.css";
import Github from "../../assets/images/icon-github.svg";
import Arrow from "../../assets/images/icon-arrow-right.svg";
import Data from "../../../Data.json";
const UserInfo = () => {
  const [currentProfile, setCurrentProfile] = useState();
  const currentUserId = JSON.parse(localStorage.getItem("currentUser")).UserId;

  useEffect(() => {
    const currentProfilee = Data.Profile.find(
      (item) => item.userId === currentUserId
    );
    if (currentProfilee) {
      setCurrentProfile(currentProfilee);
    } else {
      setCurrentProfile({
        firstName: "",
        lastName: "",
        email: "",
        imgUrl: "",
      });
    }
  }, []);
  return (
    <div className={Styles.main_container}>
      <div className={Styles.user_info}>
        <img
          src={currentProfile?.imgUrl}
          alt="Profile"
          className={Styles.user_profile_img}
        />
        <h1 className={Styles.user_name}>
          {currentProfile?.firstName + " " + currentProfile?.lastName}
        </h1>
        <h2 className={Styles.user_email}>{currentProfile?.email}</h2>
      </div>

      {/* Socials */}
      <div className={Styles.social}>
        <div>
          <a href="" className={Styles.github}>
            <div style={{ alignItems: "center" }}>
              <img src={Github} alt="Github" className={Styles.github_img} />
              <h2 className={Styles.github_text}>Github</h2>
            </div>
            <img src={Arrow} alt="Arrow" />
          </a>
        </div>

        <div>
          <a href="" className={Styles.github}>
            <div style={{ alignItems: "center" }}>
              <img src={Github} alt="Github" className={Styles.github_img} />
              <h2 className={Styles.github_text}>Github</h2>
            </div>
            <img src={Arrow} alt="Arrow" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;

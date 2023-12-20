import { useForm } from "react-hook-form";
import Styles from "./ProfileImage.module.css";
import UploadImage from "../../../assets/images/icon-upload-image.svg";

const ProfileImage = ({ userImageForMobile, setUserImageForMobile }) => {
  const { handleSubmit } = useForm();

  const onSubmit = (data) => {
    setUserImageForMobile(data.picture);
  };

  const handleImageChange = (event) => {
    setUserImageForMobile(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <>
      <div className={Styles.main}>
        <div className={Styles.container}>
          <h1 className={Styles.title}>Profile picture</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={Styles.image_box_and_rules}>
              <div className={Styles.upload_image_box}>
                <div className={Styles.rame}>
                  {userImageForMobile && (
                    <img
                      className={Styles.user_image}
                      // src={selectedImage}
                      src={userImageForMobile}
                      alt="userImage"
                    />
                  )}
                  <div className={Styles.custom_file_input}>
                    <input
                      className={Styles.image_input}
                      type="file"
                      name="picture"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </div>
                </div>
                <img src={UploadImage} alt="UploadImageIcon" />
                <span className={Styles.upload_image_text}>+ Upload Image</span>
              </div>
              <p className={Styles.upload_rules}>
                Image must be below 1024x1024px. Use PNG or JPG format.
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProfileImage;

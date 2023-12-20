import Styles from "./PreviewHeader.module.css";
import { Link } from "react-router-dom";

const PreviewHeader = () => {
  return (
    <div className={Styles.background}>
      <div className={Styles.buttons}>
        <Link to={"../addlinks"}>
          <a href="" className={Styles.back_to_editor_btn}>
            Back to Editor
          </a>
        </Link>
        <a href="" className={Styles.share_link_btn}>
          Share Link
        </a>
      </div>
    </div>
  );
};

export default PreviewHeader;

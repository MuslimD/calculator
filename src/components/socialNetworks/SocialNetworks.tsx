import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  handleFaceBook,
  handleInstagram,
  handleOK,
  handlevK,
  handleTikTok,
} from "../../store/reducers/configure";

const SocialNetwork = () => {
  const { faceBook, vK, oK, instagram, tikTok } = useAppSelector(
    (state) => state.configures
  );

  const dispatch = useAppDispatch();

  return (
    <div className="social__networks">
      <div
        onClick={() => dispatch(handleFaceBook(!faceBook))}
        className={faceBook ? "social__network_active" : "social__network"}
      >
        <img
          className="social__network__logo"
          width={40}
          height={40}
          src={
            faceBook
              ? "./assets/Facebook_Logo_(2019).png"
              : "./assets/Group 514626.png"
          }
        />
        20p
      </div>
      <div
        onClick={() => dispatch(handlevK(!vK))}
        className={vK ? "social__network_active" : "social__network"}
      >
        <img
          className="social__network__logo"
          width={40}
          height={40}
          src={vK ? "./assets/Group 514622ac.png" : "./assets/Group 514622.png"}
        />
        20p
      </div>
      <div
        onClick={() => dispatch(handleOK(!oK))}
        className={oK ? "social__network_active" : "social__network"}
      >
        <img
          className="social__network__logo"
          width={40}
          height={40}
          src={oK ? "./assets/Group 514628ac.png" : "./assets/Group 514623.png"}
        />
        20p
      </div>
      <div
        onClick={() => dispatch(handleInstagram(!instagram))}
        className={instagram ? "social__network_active" : "social__network"}
      >
        <img
          className="social__network__logo"
          width={40}
          height={40}
          src={
            instagram
              ? "./assets/Group 514624ac.png"
              : "./assets/Group 514624.png"
          }
        />
        60p
      </div>
      <div
        onClick={() => dispatch(handleTikTok(!tikTok))}
        className={tikTok ? "social__network_active" : "social__network"}
      >
        <img
          className="social__network__logo"
          width={40}
          height={40}
          src={
            tikTok ? "./assets/Group 514630ac.png" : "./assets/Group 514625.png"
          }
        />
        60p
      </div>
    </div>
  );
};

export default SocialNetwork;

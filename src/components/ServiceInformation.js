import "./InformationMeStyles.css";
import blackImg from "../assets/13.jpg";
import thumbImg from "../assets/10.jpg";
import InformationAboutData from "./InformationAboutData";
import { PopupButton } from "react-calendly";

const ServiceInformation = () => {
  return (
    <div className="information-me">
      <h1>Trainings</h1>
      <InformationAboutData
        heading="Training and Professional Help!"
        text={
          <>
            All age groups are welcome!!
            <br />
            <br />
            Training will be conducted in small groups (one on one trainings are
            available upon request) and can even be adjusted to bigger groups.
            <br />
            <br />
            Training will be personalized to the client's need / request
            <br />
            <br />
            Different types of training include but not limited to:
            <br />
            - Technical work
            <br />
            - Speed / agility / endurance
            <br />
            - Positional work
            <br />
            - Injury prevention And much more!
            <br />
            <br />
            Other services I will be conducting will be:
            <br />
            - Career guidance
            <br />
            - How to reach out to coaches
            <br />
            - Highlight videos
            <br />
            - Game analysis
            <br />
            - Networking
            <br />
            And much more!
            <br />
            <br />
            The goal is to help the talent within our community reach their
            highest potential!
            <br />
            <br />
            If you have any more questions feel free to reach out to me through
            the contact page!
          </>
        }
        img1={blackImg}
        img2={thumbImg}
      />
      <div className="schedule">
        <h1>Ready To Schedule?</h1>
        <PopupButton
          url="https://calendly.com/hernandez8m"
          /*
           * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
           * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
           */
          rootElement={document.getElementById("root")}
          text="Click here!"
          className="popup-button"
        />
      </div>
    </div>
  );
};

export default ServiceInformation;

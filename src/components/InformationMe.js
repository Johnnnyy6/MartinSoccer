import "./InformationMeStyles.css";
import runImg from "../assets/6.JPG";
import goalImg from "../assets/3.JPG";
import InformationAboutData from "./InformationAboutData";
const InformationMe = () => {
  return (
    <div className="information-me">
      <h1>Background</h1>
      <InformationAboutData
        heading="Playing & Coaching Career"
        text="Hello! My name is Martin Hernandez,  I am a former Chapin High School graduate. During my time at Chapin, I captained the Huskies in their 2019 playoff run. In 2020, I had the honor to be apart of the Kansas Wesleyan University (NAIA) before transferring to Chandler Gilbert CC (NJCAA) for the 2021 season. That same year I played in the UPSL with Sun City Astros from El Paso. I then had the opportunity to travel to Costa Rica and be part of SoccerViza which is a player development center in Puerto Viejo de Talamanca where I played for the country’s third division team. 
        Since then I have transitioned my talent and experience to the coaching side obtaining my USSF D License. Since then I have been coaching for 2 years and am apart of the Locomotive Youth Program. I have also had the honor to be the head coach of the Locomotive Gold 2008 where we have been successful in winning the AZ Arsenal Challenge and reaching the EPPL final. I am excited to work with you and start your journey to greatness. "
        img1={runImg}
        img2={goalImg}
      />
    </div>
  );
};

export default InformationMe;

import Countdown, { zeroPad } from 'react-countdown';
import ProgressBar from "components/progressBar";
import Button from "components/button";

import { RiShareCircleFill } from "react-icons/ri";
import ProjectInfoStyleWrapper from "./ProjectInfo.style";

import projectIcon from "assets/images/project/ninga-image.png"
import coinIcon from "assets/images/project/icon-1.png"
import socialData from "assets/data/social/dataV1"

const ProjectInfo = () => {


  const CountdownRender = ({ days, hours, minutes, seconds, completed }) => {
    return (
      <div className="countdown_wrapper">
        <div>
          {zeroPad(days)}
          <span>D</span>
        </div>
        <div>
          {zeroPad(hours)}
          <span>H</span>
        </div>
        <div>
          {zeroPad(minutes)}
          <span>M</span>
        </div>
        <div>
          {zeroPad(seconds)}
          <span>S</span>
        </div>
      </div>
    )
  }

  return (
    <ProjectInfoStyleWrapper className="live_project_wrapper">
      <div className="game-price-item">
        <div className="game-price-inner">
          <div className="total-price">
            <div className="price-inner d-flex">
              <div className="image-icon">
                <img src={projectIcon} alt="icon" />
              </div>
              <div className="price-details">
                <h3>
                  <a>FCT Abuja Solar Park</a>
                </h3>
                <div className="dsc">PRICE (ENSC) = 0.001282 USD</div>
              </div>
            </div>
            <div className="all-raise">
              Total Raise 0 USD ( 0% )
            </div>
          </div>
          <div className="allocation-max text-center">
            <img src={coinIcon} alt="icon" />
            <div className="allocation">
              Allocation: 500 USD Min
            </div>
          </div>
          <div className="targeted-raise">
            <div className="seles-end-text">Fund Ends In</div>
            <Countdown date="2023-11-01T01:02:03" renderer={CountdownRender} />
            <div className="targeted-raise-amount">
              Targeted Raise 200,000 BUSD
            </div>
          </div>
        </div>
        <div className="progress-inner">
          <ProgressBar progress="0" />
        </div>

        <div className="project_card_footer">
          <Button sm href="# ">
            Fund Project
          </Button>
          <div className="participants">
          <a href="# "> Add ENSC To Metamask <RiShareCircleFill /></a>
 
          <a href="#Financials "> Supporting Documents <RiShareCircleFill /> </a>
          </div>
          <div className="social_links">
            {socialData?.map((profile, i) => (
              <a key={i} href={profile.url}><img src={profile.icon} alt="icon" /></a>
            ))}

          </div>
        </div>
        
      </div>
      
    </ProjectInfoStyleWrapper>
  );
};

export default ProjectInfo;

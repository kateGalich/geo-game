import Button from "../Button";
import { useNavigate } from "react-router-dom";

//This comomponent holds all contents appearing on top of video on home page: GlobeHunch title, description, and play now button

export default function HomePageContents() {

  const navigate = useNavigate();

  const navigateToGame = function() {
    console.log("Click function navigate to game");
    navigate('/game');
  };

  return (
    <>
      <div className="home-container">
        <div className="home-game-title-container">
          <h1 className="home-game-title">
            GlobeHunch
          </h1>
          <h1 className="home-game-title-mobile">Globe<br/>Hunch</h1>
        </div>
        <div className="home-description">
          Survey incredible surroundings, learn about new locations, <br/>all while earning points and climbing the leaderboard.<br /><strong>Free to play!</strong>
        </div>
        <Button className={"button-home-playnow"} title={"Play Now"} onClick={navigateToGame} />
      </div>
    </>
  );
}
import "../styles/FifthPage.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FifthPage = () => {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    setIsClicked(false);
  }, []);
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      {isClicked ? (
        <div className="d-flex flex-column align-items-center">
          <img className="balloon-img" src="/images/catt.webp" alt="" />
          <p className="text-white text-center mt-3 fs-4">
            Awww! You've got a bunch of balloons
          </p>
          <Link to="/specialMsg" className="btn btn-primary mt-3">
            Special Msg
          </Link>
          <div className="balloons-container mx-2">
            <img className="balloons-l" src="/images/balloons.webp" alt="" />
            <img className="balloons-r" src="/images/balloons.webp" alt="" />
          </div>
        </div>
      ) : (
        <>
          <h1 className="text-white mt-3 mb-5"> A big Surprise for you</h1>
          <img
            className="gift-box"
            onClick={() => {
              setIsClicked(!isClicked);
            }}
            src="/images/gift.webp"
            alt="Gift Box"
          />
        </>
      )}
    </div>
  );
};

export default FifthPage;

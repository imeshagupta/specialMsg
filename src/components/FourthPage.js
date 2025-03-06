import "../styles/fourthPage.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const FourthPage = () => {
  const [card1Clicked, setcard1Clicked] = useState(false);

  const [card2Clicked, setcard2Clicked] = useState(false);

  const [card3Clicked, setcard3Clicked] = useState(false);

  const [card4Clicked, setcard4Clicked] = useState(false);

  useEffect(() => {
    setcard1Clicked(false);
    setcard2Clicked(false);
    setcard3Clicked(false);
    setcard4Clicked(false);
  }, []);

  return (
    <div className="container-fluid d-flex flex-column flex-wrap justify-content-center align-items-center">
      <h1 className="text-center text-white mt-5">
        Click on the cards to see the magic
      </h1>
      <div className="row p-2">
        <div className="col-sm-6 mt-2 mb-3 mb-sm-0">
          <div
            className={`card flip-card ${card1Clicked ? "flipped" : ""}`}
            onClick={() => setcard1Clicked(!card1Clicked)}
          >
            <div className="card-body text-center">
              {card1Clicked ? (
                <>
                  <img
                    src="/images/cat1.webp"
                    alt=""
                    style={{ width: "100px" }}
                  />
                  <p className="fs-4 mt-3 text-primary fw-bold">
                    Aww! you're so sweet &#128523;
                  </p>
                </>
              ) : (
                <img
                  className="balloon-img"
                  style={{ width: "100px" }}
                  src="/images/bunch-of-3-balloons.webp"
                  alt=""
                />
              )}
            </div>
          </div>
        </div>
        <div className="col-sm-6 mt-2 mb-3 mb-sm-0">
          <div
            className={`card flip-card ${card2Clicked ? "flipped" : ""}`}
            onClick={() => setcard2Clicked(!card2Clicked)}
          >
            <div className="card-body text-center">
              {card2Clicked ? (
                <>
                  <img
                    src="/images/cat2.webp"
                    alt=""
                    style={{ width: "100px", height: "100px" }}
                  />
                  <p className="fs-4 mt-3 text-primary fw-bold">
                    Can we be besties forever? &#128541;
                  </p>
                </>
              ) : (
                <img
                  className="balloon-img"
                  style={{ width: "100px" }}
                  src="/images/bunch-of-3-balloons.webp"
                  alt=""
                />
              )}
            </div>
          </div>
        </div>
        <div className="col-sm-6 mt-2 mb-3 mb-sm-0">
          <div
            className={`card flip-card ${card3Clicked ? "flipped" : ""}`}
            onClick={() => setcard3Clicked(!card3Clicked)}
          >
            <div className="card-body text-center">
              {card3Clicked ? (
                <>
                  <img
                    src="/images/cat3.webp"
                    alt=""
                    style={{ width: "100px", height: "100px" }}
                  />
                  <p className="fs-4 mt-3 text-primary fw-bold">
                    I'll take care of you now &#129303;
                  </p>
                </>
              ) : (
                <img
                  className="balloon-img"
                  style={{ width: "100px" }}
                  src="/images/bunch-of-3-balloons.webp"
                  alt=""
                />
              )}
            </div>
          </div>
        </div>
        <div className="col-sm-6 mt-2 mb-3 mb-sm-0">
          <div
            className={`card flip-card ${card4Clicked ? "flipped" : ""}`}
            onClick={() => setcard4Clicked(!card4Clicked)}
          >
            <div className="card-body text-center">
              {card4Clicked ? (
                <>
                  <img
                    src="/images/cat4.webp"
                    alt=""
                    style={{ width: "100px", height: "100px" }}
                  />
                  <p className="fs-4 mt-3 text-primary fw-bold">
                    This is for you &#128525;
                  </p>
                </>
              ) : (
                <img
                  className="balloon-img"
                  style={{ width: "100px" }}
                  src="/images/bunch-of-3-balloons.webp"
                  alt=""
                />
              )}
            </div>
          </div>
        </div>

        <div className="col-sm-12 mt-4 px-4 py-2 text-center">
          <button className="btn btn-primary">
            <Link to="/fifthPage" className="text-white text-decoration-none">
              Go next
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FourthPage;

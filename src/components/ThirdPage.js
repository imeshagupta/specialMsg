import { Link } from "react-router-dom";
import "../styles/home.css";

const ThirdPage = () => {
  return (
    <div className="card home-card" style={{ width: "25rem", height: "25rem" }}>
      <div className="card-body text-center">
        <p className="card-text text-dark fs-5">
          I know your mood is messed up.
        </p>
        <p className="card-text text-white fs-3">
          So this song is dedicated only for you... &#x2665;
        </p>
        <div className="p-2">
          <label
            htmlFor="song-name"
            className="text-dark fs-5 bg-warning px-4 py-2 mb-2 rounded-pill"
          >
            Aankhon mein teri...
          </label>
          <audio controls controlsList="nodownload" className="audio-player">
            <source src="/music/ajab-si.wav" type="audio/wav" />
            The audio can't be played due to technical issues.
          </audio>
        </div>
        <Link
          to="/fourthPage"
          className="btn btn-warning text-center text-dark fw-bold mb-2"
        >
          Continue!
        </Link>
      </div>
    </div>
  );
};

export default ThirdPage;

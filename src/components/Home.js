import { Link } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="card home-card" style={{ width: "25rem", height: "25rem" }}>
      <div className="card-body text-center">
        <h1 className="card-title pop-up-heart">&#x2665;</h1>

        <p className="card-text text-white fs-3">
          I want to tell you something!
        </p>
        <Link
          to="/secondPage"
          className="btn btn-warning text-center text-dark fw-bold"
        >
          Lessssss Go!!
        </Link>
      </div>
    </div>
  );
};

export default Home;

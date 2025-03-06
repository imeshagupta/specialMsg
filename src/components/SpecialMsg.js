import { useState } from "react";
import { Link } from "react-router-dom";

const SpecialMsg = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="text-center mt-5">
      <button
        className="btn btn-warning  fw-bold fs-5"
        onClick={() => setShowModal(true)}
      >
        Open Special Message Box &#10084;
      </button>

      {showModal && (
        <div className="modal fade show d-block" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-center">
                  💝 A Special Message for You! 💝
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body text-center">
                <h4 className="my-2 text-success">
                  ✨ You Make the World Brighter! ✨
                </h4>
                <p className="fs-5 my-2">
                  Just like stars light up the night, <br />
                  You light up the lives of those around you! 🌟 Keep smiling
                  and spreading happiness! 🌟
                </p>
              </div>
              <div className="my-2">
                <Link to="/">
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => setShowModal(false)}
                  >
                    Go Back
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpecialMsg;

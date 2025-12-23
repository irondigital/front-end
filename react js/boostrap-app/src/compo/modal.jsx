import { useState } from "react";

function StaticModal() {
  const [show, setShow] = useState(false);

  return (
    <>
      {/* Button trigger modal */}
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setShow(true)}
      >
        Launch static backdrop modal
      </button>

      {/* Modal */}
      {show && (
        <div
          className="modal fade show"
          style={{ display: "block" }}
          tabIndex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">

              <div className="modal-header">
                <h1 className="modal-title fs-5">
                  Modal title
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShow(false)}
                ></button>
              </div>

              <div className="modal-body">
                This is a static backdrop modal
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShow(false)}
                >
                  Close
                </button>

                <button
                  type="button"
                  className="btn btn-primary"
                >
                  Understood
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {show && <div className="modal-backdrop fade show"></div>}
    </>
  );
}

export default StaticModal;

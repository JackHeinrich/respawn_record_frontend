import AuthenticationInput from "../AuthInput";

export default function LoginModal() {
  return (
    <div
      className="modal fade"
      id="loginModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <AuthenticationInput
                  label="Email"
                  placeholder="Enter your email"
                />
                <AuthenticationInput
                  label="Password"
                  placeholder="Enter your password"
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

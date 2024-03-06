import { useState } from "react";

import AuthenticationInput from "../AuthInput";

import login from "../../../../../functions/users/login";

import { refreshPage } from "../../../../../util/refreshPage";

export default function LoginModal() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loginResult, setLoginResult] = useState({});

  const submitLoginForm = async (email: string, password: string) => {
    const result = await login(email, password);
    setLoginResult(result);
    if (result?.status === "Success") {
      setEmail("");
      setPassword("");
      refreshPage();
    }
  };

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
                  setValue={setEmail}
                  value={email}
                  type="text"
                />
                <AuthenticationInput
                  label="Password"
                  placeholder="Enter your password"
                  setValue={setPassword}
                  value={password}
                  type="password"
                />
              </div>
            </form>
            {!loginResult && <p className="text-danger">No server response</p>}
            {loginResult &&
              loginResult?.message &&
              loginResult?.status === "Success" && (
                <p className="text-success">{loginResult?.message}</p>
              )}
            {loginResult &&
              loginResult?.message &&
              loginResult?.status === "Failed" && (
                <p className="text-danger">{loginResult?.message}</p>
              )}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                submitLoginForm(email, password);
              }}
            >
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

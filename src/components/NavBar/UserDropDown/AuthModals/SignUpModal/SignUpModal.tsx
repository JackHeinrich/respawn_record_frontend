import create_user from "../../../../../functions/users/create_account";

import { useState } from "react";

import AuthInput from "../AuthInput";

export default function SignUpModal() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [signUpResult, setSignUpResult] = useState({});

  const isValidEmail = (input: string) => {
    if (input) {
      return input.includes("@") && input.endsWith(".com");
    } else {
      return false;
    }
  };

  const isValidUsername = (input: string) => {
    if (input) {
      return true;
    } else {
      return false;
    }
  };

  const isValidPassword = (input: string) => {
    if (input) {
      return true;
    } else {
      return false;
    }
  };

  const submitSignupForm = async (
    email: string,
    username: string,
    password: string
  ) => {
    console.log(password);
    console.log(isValidPassword(password));
    if (
      isValidEmail(email) &&
      isValidUsername(username) &&
      isValidPassword(password)
    ) {
      const result = await create_user(email, username, password);
      setSignUpResult(result);
    } else {
      setSignUpResult({
        status: "Failed",
        message: "One or more fields contains an invalid entry",
      });
    }
  };

  return (
    <div
      className="modal fade"
      id="signUpModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Join Respawn Record
            </h1>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <AuthInput
                  label="Email"
                  placeholder="Enter your email"
                  setValue={setEmail}
                  invalidValueMessage="Please enter a valid email"
                  isValidConditionals={isValidEmail}
                  type="text"
                  value={email}
                />
                <AuthInput
                  label="Username"
                  placeholder="Enter your username"
                  setValue={setUsername}
                  invalidValueMessage="Please enter a valid username"
                  isValidConditionals={isValidUsername}
                  type="text"
                  value={username}
                />

                <AuthInput
                  label="Password"
                  placeholder="Enter your password"
                  setValue={setPassword}
                  invalidValueMessage="Please enter a valid password"
                  isValidConditionals={isValidPassword}
                  type="password"
                  value={password}
                />
              </div>
            </form>
            {signUpResult.message && signUpResult.status === "Success" && (
              <p className="text-success">{signUpResult.message}</p>
            )}
            {signUpResult.message && signUpResult.status === "Failed" && (
              <p className="text-danger">{signUpResult.message}</p>
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
              onClick={() => submitSignupForm(email, username, password)}
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

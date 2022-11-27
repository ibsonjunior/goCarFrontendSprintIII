import React from "react";

import SignInForm from "../components/SignIn/SignIn_Form";

import "../styles/SignIn.css";

import { useLocation } from "react-router-dom";

import { WarningCircle } from "phosphor-react";

function SignIn() {
  const location = useLocation();

  return (
    <>
      <div className="login">
        {location.state ? (
          <div className="booking_login_warning">
            <p>
              {" "}
              <WarningCircle
                size={32}
                className="booking_login_warning-item"
              />{" "}
              Para fazer uma reserva você precisa estar logado
            </p>
          </div>
        ) : null}
        <SignInForm />
      </div>
    </>
  );
}

export default SignIn;
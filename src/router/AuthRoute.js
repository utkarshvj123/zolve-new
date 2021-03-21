import React from "react";
import { Route, Redirect } from "react-router-dom";
import Home from "../modules/Home";
import CopyClip from "../modules/CopyClip";
import NavBar from "../components/NavBar";
import CameraRecord from "../modules/CameraRecord";

import { useDispatch, useSelector } from "react-redux";
import { authenticateUserAction } from "../modules/Login/actions";

export default function AuthRoute(props) {
  const { isValidUser } = props;
  const dispatch = useDispatch();
  return (
    <div>
      {isValidUser ? (
        <>
          <NavBar
            logout={() => dispatch(authenticateUserAction(false))}
            heading={"Zolve"}
            buttonName={"Logout"}
            buttonClass="btn btn-primary"
          />
          <Route exact path="/home" component={Home} />
          <Route exact path="/camera" component={CameraRecord} />
          <Route exact path="/" component={CopyClip} />
        </>
      ) : (
        <Redirect to="/login" />
      )}
    </div>
  );
}

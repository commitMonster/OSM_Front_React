import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import DashboardLayout from "../../../components/admin/dashboard/DashboardLayout";
import { initialUser, signout } from "../../../modules/user";

const DashboardLayoutContainer = ({ children }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(signout());
    dispatch(initialUser());
    history.push("/");
  };
  return <DashboardLayout children={children} onLogout={onLogout} />;
};

export default DashboardLayoutContainer;

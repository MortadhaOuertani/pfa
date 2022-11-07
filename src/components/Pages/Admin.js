import React, { useEffect, useState } from "react";
import RowDetails from "../Rowdetails";
import "../css/admin.css";
import { useDispatch, useSelector } from "react-redux";
import { GetProfiles } from "../../redux/action/profileactions";
import Navbarloggedin from "../navbarLoggedin";

const Admin = () => {
  const auth = useSelector((state) => state.auth);
  const user = {
    isConnected: auth.isConnected,
    role: auth.user.role,
  };
  const profiles = useSelector((state) => state.profiles);
  const dispatch = useDispatch();
  const profile = profiles.profiles;
  useEffect(async () => {
    await dispatch(GetProfiles());
  }, []);

  return (
    <>
      <Navbarloggedin user={user} />
      <div class="container p-4 mt-4">
        <div class="row justify-content-evenly mt-4">
          <div class="col-lg-12 col-md-12 mt-4">
            <div class="d-flex">
              <i class="fa fa-user fa-2x" aria-hidden="true"></i>{" "}
              <h2>Profiles list</h2>
            </div>
            <div
              class="shadow-lg p-3 mb-5 bg-body rounded"
              style={{ backgroundColor: "white" }}
            >
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">name</th>
                    <th scope="col">email</th>
                    <th scope="col">role</th>
                  </tr>
                </thead>
                <tbody>
                  {profile.map(({ _id, user,title }) => (
                    <RowDetails id={_id} title={title} user={user} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;

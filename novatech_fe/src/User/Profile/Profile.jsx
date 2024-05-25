import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Input, Typography, avatar } from "@material-tailwind/react";
import { NavLink, Route, Router, Routes } from "react-router-dom";

const Profile = ({routes}) => {
  return (
    <div>
      {routes.map(({ layout, pages }, key) => (
        <ul key={key} className="mb-4 flex flex-col gap-1">
          {pages.map(({ icon, name, path }) => (
            <li key={name}>
              <NavLink to={`/${layout}/${path}`}>
                {({ isActive }) => (
                  <Button
                    variant={isActive ? "gradient" : "text"}
                    className="flex gap-3 px-2 capitalize"
                    fullWidth
                  >
                    {icon}
                    <Typography
                      color="black"
                      className="font-medium capitalize p-2 bg-[#fff] hover:shadow-md"
                    >
                      {name}
                    </Typography>
                  </Button>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};

export default Profile;

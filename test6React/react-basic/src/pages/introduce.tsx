import React from "react";
import {Link, Outlet} from "react-router-dom";

export default function Introduce() {
  return (<div>
    <h1>Introduce</h1>
    {/*<Link to="/introduce/cursor">cursor frame</Link>*/}
    <Link to="/introduce/cube">cube frame</Link>
    <Outlet/>
  </div>)
};
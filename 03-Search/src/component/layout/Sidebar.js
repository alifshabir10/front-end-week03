import React from "react";
import { Link } from "react-router-dom";
// import {map} from ''



const Sidebar = (props) => {
  const { menus } = props;
  return (
    <div className="nav-side">
      <ul>
        {
        menus.map(value => {
          return (
            <li>
              <Link to={value.path} className="nav-side-link">
                {value.name}
              </Link>
            </li>
          );
        })
        }
      </ul>
    </div>
  );
};

export default Sidebar;

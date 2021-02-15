import React from "react";
// import { Link } from "react-router-dom";
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
              <a href={value.path}>
                #{value.id}-{value.name}
              </a>
            </li>
          );
        })
        }
      </ul>
    </div>
  );
};

export default Sidebar;

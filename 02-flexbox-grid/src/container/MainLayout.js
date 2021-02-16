import React from "react";
import "../container/MainLayout.css";
import AppNavbar from "../component/layout/AppNavbar";
import Sidebar from "../component/layout/Sidebar";
import Home from "../component/layout/Home";
import Footer from "../component/layout/Footer";
import { sidemus } from "./../data/routing";
// tambahkan module baru
import { Route, Switch } from "react-router-dom";
// import komponen yang dicall oleh <Route/>
import Counter from "../component/layout/pages/Counter";
import List from "../component/layout/pages/list/List";
import Todo from "../component/layout/pages/todo/Todo";
import Error404 from "../component/layout/pages/Error404";
import ratinglist from "../rating/RatingList";

import Listmovies from "../movies/Listmovies";

const MainLayout = () => {
  return (
    <div className="container">
      <AppNavbar />
      <Sidebar menus={sidemus} />
      {/* <Sidebar/> */}
      <Footer />
      <div className="main-content">
        <Switch>
          <Route path="/home" component={Home} exact />
          {/* <Route path="/home" component={Home} exact /> */}
          <Route path="/counter" component={Counter} exact />
          <Route path="/Movies" component={Listmovies} exact />
          <Route path="/Rating" component={ratinglist} exact />
          <Route path="/List" component={List} exact />
          <Route component={Error404} />
        </Switch>
      </div> 
    </div>
  );
};

export default MainLayout;

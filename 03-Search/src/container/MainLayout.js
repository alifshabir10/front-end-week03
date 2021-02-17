import React from "react";
import "../container/MainLayout.css";
import AppNavbar from "../component/layout/AppNavbar";
import Sidebar from "../component/layout/Sidebar";
import Home from "../component/layout/Home";
import Footer from "../component/layout/Footer";
import { sidemus } from "./../data/routing";
// tambahkan module baru
import { Route, Switch } from "react-router-dom";
import About from "../component/layout/pages/About";
import Error404 from "../component/layout/pages/Error404";
import ratinglist from "../rating/RatingList";
import filterList from "../filter/filterList";
import Listmovies from "../movies/Listmovies";
import Liststudent from "../student/ListStudent";
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
          <Route path="/about" component={About} exact />
          <Route path="/Movies" component={Listmovies} exact />
          <Route path="/Rating" component={ratinglist} exact />
          <Route path="/filter" component={filterList} exact />
          <Route path="/student" component={Liststudent} exact />
          <Route component={Error404} />
        </Switch>
      </div> 
    </div>
  );
};

export default MainLayout;

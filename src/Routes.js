import React, { Fragment } from "react";
// React Router Stuff
import { Route, Redirect } from "react-router-dom";
// React Loadable stuff
import Loadable from "react-loadable";
// Loading Component
import LoadingComponent from "./LoadingComponent";

const Routes = () => {
  const Home = {
    route: "/",
    path: "./components/Home"
  };
  const WhatWeDo = {
    route: "/what-we-do/",
    path: "./components/WhatWeDo"
  };
  const OurStory = {
    route: "/our-story/",
    path: "./components/OurStory"
  };
  const ProjectEmpower = {
    route: "/project-empower/",
    path: "./components/ProjectEmpower"
  };
  const SchoolFund = {
    route: "/school-fund/",
    path: "./components/SchoolFund"
  };
  const Donate = {
    route: "/donate/",
    path: "./components/Donate"
  };
  const Yoga = {
    route: "/yoga/",
    path: "./components/Yoga"
  };
  const YogaTeachers = {
    route: "/yoga-teachers/",
    path: "./components/YogaTeachers"
  };
  const Expertise = {
    route: "/expertise/",
    path: "./components/Expertise"
  };
  const AmbassadorPrograms = {
    route: "/ambassador-programs/",
    path: "./components/AmbassadorPrograms"
  };
  const Contact = {
    route: "/contact/",
    path: "./components/Contact"
  };
  const Routes = {
    Home,
    WhatWeDo,
    OurStory,
    ProjectEmpower,
    SchoolFund,
    Donate,
    Yoga,
    YogaTeachers,
    Expertise,
    AmbassadorPrograms,
    Contact
  };
  return (
    <Fragment>
      <Route exact path="/rr_site" render={() => <Redirect to="/" />} />
      {Object.values(Routes).map(e => {
        return (
          <Route
            key={e.route}
            path={e.route}
            exact
            component={Loadable({
              loader: () => import(`${e.path}`),
              loading: LoadingComponent
            })}
          />
        );
      })}
    </Fragment>
  );
};

export default Routes;

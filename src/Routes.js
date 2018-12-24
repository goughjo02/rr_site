import React, { Fragment } from "react";
// React Router Stuff
import { Route, Redirect } from "react-router-dom";
// React Loadable stuff
import Loadable from "react-loadable";
// Loading Component
import LoadingComponent from "./LoadingComponent";
// Material UI icons
import HomeIcon from "@material-ui/icons/Home";
import MailIcon from "@material-ui/icons/Mail";
import SchoolIcon from "@material-ui/icons/School";
import PeopleIcon from "@material-ui/icons/People";
import PublicIcon from "@material-ui/icons/Public";

const Home = {
  title: "Home",
  icon: <HomeIcon />,
  route: "/",
  path: "./components/Home"
};
const WhatWeDo = {
  title: "What We Do",
  icon: <HomeIcon />,
  route: "/what-we-do/",
  path: "./components/WhatWeDo"
};
const OurStory = {
  title: "Our Story",
  icon: <PublicIcon />,
  route: "/our-story/",
  path: "./components/OurStory"
};
const ProjectEmpower = {
  title: "Project Empower",
  icon: <PeopleIcon />,
  route: "/project-empower/",
  path: "./components/ProjectEmpower"
};
const SchoolFund = {
  title: "School Fund",
  icon: <SchoolIcon />,
  route: "/school-fund/",
  path: "./components/SchoolFund"
};
const Donate = {
  title: "Donate",
  icon: <HomeIcon />,
  route: "/donate/",
  path: "./components/Donate"
};
const Yoga = {
  title: "Yoga",
  icon: <HomeIcon />,
  route: "/yoga/",
  path: "./components/Yoga",
  hidden: true
};
const YogaTeachers = {
  title: "Yoga Teachers",
  icon: <HomeIcon />,
  route: "/yoga-teachers/",
  path: "./components/YogaTeachers"
};
const Expertise = {
  title: "Expertise",
  icon: <HomeIcon />,
  route: "/expertise/",
  path: "./components/Expertise"
};
const AmbassadorPrograms = {
  title: "Ambassador Programs",
  icon: <HomeIcon />,
  route: "/ambassador-programs/",
  path: "./components/AmbassadorPrograms"
};
const Contact = {
  title: "Contect",
  icon: <MailIcon />,
  route: "/contact/",
  path: "./components/Contact"
};
const RoutingInformation = {
  Home,
  About: {
    WhatWeDo,
    OurStory,
    ProjectEmpower,
    SchoolFund
  },
  GetInvolved: {
    Yoga,
    Expertise,
    AmbassadorPrograms
  },
  YogaTeachers,
  Contact,
  Donate
};
export { RoutingInformation };

const Routes = () => {
  return (
    <Fragment>
      <Route exact path="/rr_site" render={() => <Redirect to="/" />} />
      {Object.values(RoutingInformation).map(e => {
        if (!e.route) {
          return Object.values(e).map(f => {
            return (
              <Route
                key={f.route}
                path={f.route}
                exact
                component={Loadable({
                  loader: () => import(`${f.path}`),
                  loading: LoadingComponent
                })}
              />
            );
          });
        } else {
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
        }
      })}
    </Fragment>
  );
};

export default Routes;

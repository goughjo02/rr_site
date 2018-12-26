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
  path: "./modules/Home"
};
const WhatWeDo = {
  title: "What We Do",
  icon: <HomeIcon />,
  route: "/what-we-do/",
  path: "./modules/WhatWeDo"
};
const OurStory = {
  title: "Our Story",
  icon: <PublicIcon />,
  route: "/our-story/",
  path: "./modules/OurStory"
};
const ProjectEmpower = {
  title: "Project Empower",
  icon: <PeopleIcon />,
  route: "/project-empower/",
  path: "./modules/ProjectEmpower"
};
const SchoolFund = {
  title: "School Fund",
  icon: <SchoolIcon />,
  route: "/school-fund/",
  path: "./modules/SchoolFund"
};
const Donate = {
  title: "Donate",
  icon: <HomeIcon />,
  route: "/donate/",
  path: "./modules/Donate"
};
const Yoga = {
  title: "Yoga",
  icon: <HomeIcon />,
  route: "/yoga/",
  path: "./modules/Yoga"
};
const YogaTeachers = {
  title: "Yoga Teachers",
  icon: <HomeIcon />,
  route: "/yoga-teachers/",
  path: "./modules/YogaTeachers",
  hidden: true
};
const Expertise = {
  title: "Expertise",
  icon: <HomeIcon />,
  route: "/expertise/",
  path: "./modules/Expertise"
};
const AmbassadorPrograms = {
  title: "Ambassador Programs",
  icon: <HomeIcon />,
  route: "/ambassador-programs/",
  path: "./modules/AmbassadorPrograms"
};
const Contact = {
  title: "Contact",
  icon: <MailIcon />,
  route: "/contact/",
  path: "./modules/Contact"
};
const RoutingInformation = {
  Home,
  About: {
    title: "About",
    children: {
      WhatWeDo,
      OurStory,
      ProjectEmpower,
      SchoolFund
    }
  },
  Get_Involved: {
    title: "Get Involved",
    children: {
      Yoga,
      Expertise,
      AmbassadorPrograms
    }
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
          return Object.values(e.children).map(f => {
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

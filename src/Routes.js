import React from "react";
// React Router Stuff
import { Route, Redirect } from "react-router-dom";
// React Loadable stuff
import Loadable from "react-loadable";
// Loading Component
import LoadingComponent from "./LoadingComponent";
// Material UI stuff
import { withStyles } from "@material-ui/core/styles";
// Material UI icons
import HomeIcon from "@material-ui/icons/Home";
import WhatWeDoIcon from "@material-ui/icons/ShowChart";
import OurStoryIcon from "@material-ui/icons/Public";
import ProjectEmpowerIcon from "@material-ui/icons/Business";
import SchoolFundIcon from "@material-ui/icons/School";
import DonateIcon from "@material-ui/icons/LocalAtm";
import YogaIcon from "@material-ui/icons/DirectionsWalk";
import ExpertiseIcon from "@material-ui/icons/People";
import AmbassaorProgramsIcon from "@material-ui/icons/PeopleOutline";
import ContactIcon from "@material-ui/icons/Mail";

const Home = {
  title: "Home",
  icon: <HomeIcon />,
  route: "/",
  path: "./modules/Home"
};
const WhatWeDo = {
  title: "What We Do",
  icon: <WhatWeDoIcon />,
  route: "/what-we-do/",
  path: "./modules/WhatWeDo"
};
const OurStory = {
  title: "Our Story",
  icon: <OurStoryIcon />,
  route: "/our-story/",
  path: "./modules/OurStory"
};
const ProjectEmpower = {
  title: "Project Empower",
  icon: <ProjectEmpowerIcon />,
  route: "/project-empower/",
  path: "./modules/ProjectEmpower"
};
const SchoolFund = {
  title: "School Fund",
  icon: <SchoolFundIcon />,
  route: "/school-fund/",
  path: "./modules/SchoolFund"
};
const Donate = {
  title: "Donate",
  icon: <DonateIcon />,
  route: "/donate/",
  path: "./modules/Donate"
};
const Yoga = {
  title: "Yoga",
  icon: <YogaIcon />,
  route: "/yoga/",
  path: "./modules/Yoga"
};
const YogaTeachers = {
  title: "Yoga Teachers",
  icon: <YogaIcon />,
  route: "/yoga-teachers/",
  path: "./modules/YogaTeachers",
  hidden: true
};
const Expertise = {
  title: "Expertise",
  icon: <ExpertiseIcon />,
  route: "/expertise/",
  path: "./modules/Expertise"
};
const AmbassadorPrograms = {
  title: "Ambassador Programs",
  icon: <AmbassaorProgramsIcon />,
  route: "/ambassador-programs/",
  path: "./modules/AmbassadorPrograms"
};
const Contact = {
  title: "Contact",
  icon: <ContactIcon />,
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

const Routes = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
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
    </div>
  );
};

const styles = theme => ({
  root: {
    flex: 1
  }
})

export default withStyles(styles, { withTheme: true })(Routes);

import Dashboard from "dynamicComponents/Dashboard.jsx";
import AboutUs from "dynamicComponents/AboutUs.jsx";
import StudentSearch from "dynamicComponents/StudentSearch.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Home",
    icon: "fa fa-fw fa-home",
    component: Dashboard,
    layout: "/srp"
  },
  {
    path: "/studentSearch",
    name: "Student",
    icon: "glyphicon glyphicon-search",
    component: StudentSearch,
    layout: "/srp"
  },
  {
    path: "/aboutUs",
    name: "About Us",
    icon: "glyphicon glyphicon-user",
    component: AboutUs,
    layout: "/srp"
  }
];

export default dashboardRoutes;

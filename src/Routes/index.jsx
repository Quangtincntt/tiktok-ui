// Layout
import DefaultLayout from "./../components/layouts/DefaultLayout/index";
import HeaderOnly from "../components/layouts/HeaderOnly";

//Page
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Following from "../pages/Following";
import Upload from "./../pages/Upload";
import Search from "./../pages/Search/index";
import routesConfig from "./../configs/routes";

//Public Routes
export const publicRoutes = [
  { path: routesConfig.home, component: Home, layout: DefaultLayout },
  { path: routesConfig.following, component: Following, layout: DefaultLayout },
  { path: routesConfig.profile, component: Profile, layout: DefaultLayout },
  { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
  { path: routesConfig.search, component: Search, layout: null },
];

export const privateRoutes = [];

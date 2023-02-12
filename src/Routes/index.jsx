
// Layout

//Page
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Following from "../pages/Following";
import Upload from "./../pages/Upload";
import Search from "./../pages/Search/index";
import routesConfig from "./../configs/routes";
import DefaultLayout from './../components/layouts/DefaultLayout/index';
import HeaderOnly from './../components/layouts/HeaderOnly/index';
import { Config } from './../configs/index';


//Public Routes
export const publicRoutes = [
  { path: Config.routes.home, component: Home, layout: DefaultLayout },
  { path: Config.routes.following, component: Following, layout: DefaultLayout },
  { path: Config.routes.profile, component: Profile, layout: DefaultLayout },
  { path: Config.routes.upload, component: Upload, layout: HeaderOnly },
  { path: Config.routes.search, component: Search, layout: null },
];

export const privateRoutes = [];

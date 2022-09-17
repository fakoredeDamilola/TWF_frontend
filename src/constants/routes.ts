import Client from "../components/Client/Client";
import Clothes from "../pages/Clothes/Clothes";
import Dashboard from "../pages/Dashboard/Dashboard";
import DashboardClient from "../pages/Dashboard/DashboardClient";
import DashboardClothes from "../pages/Dashboard/DashboardClothes";
import Store from "../pages/Dashboard/Store";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login"
import Signup from "../pages/signup/Signup";
import Cloth from "../pages/store/Cloth";
import StoreOrderPage from "../pages/store/StoreOrderPage";



export interface AppRoutes {
path:string;
exact:boolean;
component:any
}

export const authenticatedRoutes:AppRoutes[] = [
    {path:"/dashboard",exact:true,component:Dashboard},
    {path:"/dashboard/clients",exact:true,component:DashboardClient},
    {path:"/dashboard/clothes",exact:true,component:DashboardClothes},
    {path:"/dashboard/client/:id",exact:true,component:Client},
    {path:"/dashboard/clothes/:id",exact:true,component:Clothes},
    {path:"/dashboard/store",exact:true,component:Store},
]

export const routes:AppRoutes[] = [
    {path:"/login",exact:true, component: Login},
    {path:"/signup",exact:true,component:Signup},
    {path:"/",exact:true,component:Home},
    {path:"/store/cloth/:clothID",exact:true,component:Cloth},
    {path:"/store/order/:tx_id",exact:true,component:StoreOrderPage}
]

export const navList = ["New in","Clothing","Sale","Blog","About","Contact"]
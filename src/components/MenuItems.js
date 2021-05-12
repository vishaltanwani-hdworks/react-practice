import React from "react"
import Dashboard from "./Dashboard/Index"
import Requests from "./Requests/Index"
import Explore from "./Explore/Index"
import MyLibrary from "./MyLibrary/Index"
import Profile from "./Profile/Index"
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import SyncAltOutlinedIcon from '@material-ui/icons/SyncAltOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
export default [
    {
        menuName: 'Explore',
        link: '/explore',
        component: Explore,
        icon: <ExploreOutlinedIcon />
    },
    {
        menuName: 'My Library',
        link: '/mylibrary',
        component: MyLibrary,
        icon: <LibraryBooksOutlinedIcon />
    },
    {
        menuName: 'Dashboard',
        link: '/dashboard',
        component: Dashboard,
        icon: <DashboardOutlinedIcon />
    },
    {
        menuName: 'Requests',
        link: '/requests',
        component: Requests,
        icon: <SyncAltOutlinedIcon />
    },
    {
        menuName: 'Profile',
        link: '/profile',
        component: Profile,
        icon: <PersonOutlineOutlinedIcon />
    }
]
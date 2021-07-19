import React from 'react';
import SidebarOption from "./SidebarOption";
import "./Sidebar.css";
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useStateValue} from './StateProvider';

const Sidebar = () => {
    const [{user},dispatch]=useStateValue();
    return (
        <div className="sidebar">
          <SidebarOption 
           avatarsrc={user.photoURL}
           online
           text="home"
           
            />
            
            <SidebarOption  Icon={LocalHospitalIcon} text="covid-19 info center"/>
             <SidebarOption  Icon={EmojiFlagsIcon} text="Pages"/>
             <SidebarOption  Icon={PeopleIcon} text="Friends"/>
             
             <SidebarOption  Icon={ChatIcon} text="Messanger"/>
             <SidebarOption  Icon={StorefrontIcon} text="Marketplace"/>
             <SidebarOption  Icon={VideoLibraryIcon} text="Videos"/>
             <SidebarOption  Icon={ExpandMoreIcon} text="Marketplace"/>
             
            
        </div>
    )
}

export default Sidebar;

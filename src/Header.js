import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import Avatar from '@material-ui/core/Avatar';
import AddIcon from '@material-ui/icons/Add';
import { IconButton } from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useStateValue} from "./StateProvider";


const Header = () => {
    const [{user},dispatch]=useStateValue();
    return (
        <div className="header">
        <div className="header__left">
            <img src="https://tse2.mm.bing.net/th?id=OIP.KVmwgL6NoiD29PNqnYC7cQHaHu&pid=Api&P=0&w=300&h=300" alt="not found" />
            <div className="header__left_input">
               <SearchIcon/>
               <input type="text" placeholder="Search facebook " />
            </div>
        </div>
        <div className="header__center">
               <div className="header__center__optionsIcon active_class">
                   <HomeIcon  fontSize="large" />
               </div>
               <div className="header__center__optionsIcon">
                   <FlagIcon fontSize="large" />
               </div>
               <div className="header__center__optionsIcon">
                   <SubscriptionsIcon fontSize="large" />
               </div>
               <div className="header__center__optionsIcon">
                   <StorefrontIcon fontSize="large" />
               </div>
               <div className="header__center__optionsIcon">
                   <SupervisedUserCircleIcon fontSize="large" />
               </div>
        </div>
        <div className="header__right">
            <div className="header__right__info">
                <Avatar src={user.photoURL}/>
                <h3>{user.displayName}</h3>
            </div>
            <div className="header__right__icon">
                    <IconButton>
                        <AddIcon/>
                    </IconButton>
                    <IconButton>
                        <ForumIcon/>
                    </IconButton>
                    <IconButton>
                        <NotificationsActiveIcon/>
                    </IconButton>
                    <IconButton>
                        <ExpandMoreIcon/>
                    </IconButton>

            </div>
        </div>
            
        </div>
    )
}

export default Header;

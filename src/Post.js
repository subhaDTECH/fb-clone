import { Avatar } from '@material-ui/core';

import "./Post.css";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useStateValue} from "./StateProvider";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import React, { forwardRef } from 'react';

const Post = forwardRef(({key,imageurl,profileurl,message,username,timestamp},ref) => {
    const [{user},dispatch]=useStateValue();
    return (
        <div ref={ref} key={key} className="post">
        <div className="post__header">
        <div className="post_left">
        <FiberManualRecordIcon style={{color:"green",marginleft:"20px"}}/>
        {/* <Avatar src={user.photoURL}/> */}
        <Avatar src={profileurl}/>
       
               {/* <h2>{user.displayName}</h2> */}
              
               <h2>{username}</h2><br /><br />
                 <p>{new  Date(timestamp?.toDate()).toUTCString()}</p>
               
             
                 
        </div>
             
               <div className="post_header_right">

                  <p>
                   {message}
                  </p>
                  
               </div>
        </div>
         <div className="post__body">
                 <img src={imageurl} alt="not found" />
         </div>
           <div className="post_footer">
              <div className="footer_icons">
                <ThumbUpAltIcon/>
                <p>Like</p>
              </div>
              <div className="footer_icons">
                <ChatBubbleIcon/>
               <p>comment</p>

              </div>
              <div className="footer_icons">
                  <NearMeIcon/>
                  <p>share</p>
             </div>
             <div className="footer_icons">
                 <AccountCircleIcon/>
                  <ExpandMoreIcon/>
             </div>

           </div>
            
        </div>
    )
});

export default Post;


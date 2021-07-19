import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Story.css";

const Story = ({profilesrc,title,imagesrc}) => {
    return (
        <div className="story" style={{backgroundImage:`url(${imagesrc})`}}>
            <Avatar className="story__avatar" src={profilesrc}/>
            <p>{title}</p>
        </div>
    )
}

export default Story;

import { Avatar } from '@material-ui/core';
import React from 'react';
import "./StoryReels.css";
import Story from "./Story";

const StoryReels = () => {
    return (
        <div className="stroyreels">
            <Story
                profilesrc="https://cdn.pixabay.com/photo/2015/07/20/12/53/gehlert-852762_960_720.jpg"
                title="duley.subha"
                imagesrc="https://cdn.pixabay.com/photo/2016/01/19/17/57/car-1149997_1280.jpg"
            />
            <Story
                profilesrc="https://cdn.pixabay.com/photo/2015/07/20/12/53/gehlert-852762_960_720.jpg"
                title="duley.subha"
                imagesrc="https://cdn.pixabay.com/photo/2016/03/11/02/08/speedometer-1249610__340.jpg"
            />
            <Story
                profilesrc="https://cdn.pixabay.com/photo/2015/07/20/12/53/gehlert-852762_960_720.jpg"
                title="duley.subha"
                imagesrc="https://cdn.pixabay.com/photo/2019/09/04/05/53/moon-4450739__340.jpg"
            />
            <Story
                profilesrc="https://cdn.pixabay.com/photo/2015/07/20/12/53/gehlert-852762_960_720.jpg"
                title="duley.subha"
                imagesrc="https://cdn.pixabay.com/photo/2013/05/11/08/28/sunset-110305__340.jpg"
            />
           
        </div>
    )
}

export default StoryReels;

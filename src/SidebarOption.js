import React from 'react';
import "./SidebarOption.css";
import Avatar from '@material-ui/core/Avatar';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const SidebarOption = ({online,avatarsrc,Icon,text}) => {
    return (
        <div className="sidebaroption">
          {avatarsrc && <Avatar src={avatarsrc}/>  
          }
          {
            online &&  <FiberManualRecordIcon style={{color:"green"}}/>
          }
          {Icon && <Icon/> }
          <h3>{text}</h3>
            
        </div>
    )
}

export default SidebarOption;

import React from 'react';
import "./Sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVerticon from "@material-ui/icons/MoreVert";
import { Avatar, IconButton } from '@material-ui/core';
import {SearchOutlined} from "@material-ui/icons"
import SidebarChat from './SidebarChat';
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar src='https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/90523410_2966468926749078_4324246487488790528_o.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=GSvqGjOwccUAX8RkI4h&_nc_ht=scontent-vie1-1.xx&oh=5addf77a7630379a10ef41cf3b314ddb&oe=5F8661D5'/>
                <div className="sidebar_headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVerticon />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                    <SearchOutlined/>
                    <input placeholder="Search or start new chat" type="text" />
                </div>
            </div>
          <div className="sidebar_chats">
              <SidebarChat/>
              <SidebarChat />
              <SidebarChat />
            </div>  
        </div>
    )
}

export default Sidebar

import React from "react";
import * as C from "./styles"
import SidebarChats from "./../SidebarChats";
import SidebarHeader from "./../SidebarHeader";

const Sidebar = ({ setUserChat, userChat }) => {
  return (
    <C.Container>
      <SidebarHeader setUserChat={setUserChat} />
      <SidebarChats setUserChat={setUserChat} userChat={userChat} />
    </C.Container>
  );
};

export default Sidebar;

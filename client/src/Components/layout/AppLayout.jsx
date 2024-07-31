import React from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Title from "../shared/Title";
import { Grid } from "@mui/material";
import ChatList from "../specific/ChatList";
import { SampleChats } from "../constants/sampleData";

const AppLayout = (title, description) => (WrappedComponent) => {
  return (props) => {
    const { chatId } = useParams();
    const handleDeleteChat = (e, _id, groupChat) => {
      e.preventDefault();
      console.log("DeleteChat", _id, groupChat);
    };

    return (
      <>
        <Title title={title} description={description} />
        <Header />
        <Grid container style={{ height: "calc(100vh - 4rem)" }}>
          <Grid
            item
            sm={4}
            md={3}
            sx={{ display: { xs: "none", sm: "block" } }}
            style={{ height: "100%" }}
          >
            <ChatList
              chats={SampleChats}
              chatId={chatId}
              handleDeleteChat={handleDeleteChat}
            />
          </Grid>
          <Grid item xs={12} sm={8} md={5} lg={6} style={{ height: "100%" }}>
            <WrappedComponent {...props} />
          </Grid>
          <Grid
            item
            md={4}
            lg={3}
            sx={{ display: { xs: "none", md: "block" } }}
            style={{
              height: "100%",
              padding: "2rem",
              backgroundColor: "rgba(0,0,0,0.85)",
            }}
          >
            Third
          </Grid>
        </Grid>
      </>
    );
  };
};

export default AppLayout;

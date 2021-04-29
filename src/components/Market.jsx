import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@material-ui/core";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import NftThumb from "./NftThumb";

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

const Market = ({ nftItems }) => {
  return (
    <React.Fragment>
      <Header />
      <Grid container>
        <Grid item xs={2}>
          <List component="nav" aria-label="main mailbox folders">
            <ListItem button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItem>
          </List>
          <Divider />
          <List component="nav" aria-label="secondary mailbox folders">
            <ListItem button>
              <ListItemText primary="Trash" />
            </ListItem>
            <ListItemLink href="#simple-list">
              <ListItemText primary="Spam" />
            </ListItemLink>
          </List>
        </Grid>
        <Grid container item xs={10} sx={{ justifyContent: "center" }}>
          {nftItems.map((nft) => (
            <Box sx={{ padding: "0.5rem" }}>
              <NftThumb nft={nft} />
            </Box>
          ))}
        </Grid>
      </Grid>
      <Footer />
    </React.Fragment>
  );
};

export default Market;

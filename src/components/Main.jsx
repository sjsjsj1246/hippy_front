import * as React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import PaletteIcon from "@material-ui/icons/Palette";
import Header from "./Header";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost.jsx";
import Sidebar from "./Sidebar";
import Footer from "./Footer.jsx";
import {
  Box,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  ListSubheader,
  makeStyles,
  Paper,
  Stack,
  Tabs,
  Typography,
} from "@material-ui/core";
import NftThumb from "./NftThumb";
import { fontSize } from "@material-ui/system";

const mainFeaturedPost = {
  title: "share your piece",
  description: "희귀한 디지털 아이템을 거래 또는 탐색해보세요",
  image: "https://source.unsplash.com/1200x200/?block",
  imageText: "main image description",
};

const featuredPosts = [
  {
    title: "Featured post",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
  },
  {
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
  },
];

const sidebar = {
  title: "About",
  description:
    "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
  archives: [
    { title: "March 2020", url: "#" },
    { title: "February 2020", url: "#" },
    { title: "January 2020", url: "#" },
    { title: "November 1999", url: "#" },
    { title: "October 1999", url: "#" },
    { title: "September 1999", url: "#" },
    { title: "August 1999", url: "#" },
    { title: "July 1999", url: "#" },
    { title: "June 1999", url: "#" },
    { title: "May 1999", url: "#" },
    { title: "April 1999", url: "#" },
  ],
  social: [
    { name: "GitHub", icon: GitHubIcon },
    { name: "Twitter", icon: TwitterIcon },
    { name: "Facebook", icon: FacebookIcon },
  ],
};

export default function Main({ products, onCreate, onDelete }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header title="Hippy" />
      <Container maxWidth="lg">
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          {["Digital Art", "Animation", "Virtual Reality"].map((tag) => (
            <Box>
              <Grid
                container
                sx={{ borderBottom: "1px solid #E6E6E6", margin: "1.5rem 0" }}
              >
                <Grid item xs={10}>
                  <Typography
                    component="h2"
                    sx={{
                      fontSize: "1.5rem",
                    }}
                  >
                    {tag}
                  </Typography>
                </Grid>
                <Grid
                  container
                  item
                  xs={2}
                  justifyContent="flex-end"
                  alignItems="center"
                >
                  <Typography sx={{ fontSize: "1.1rem" }}>모두 보기</Typography>
                  <ArrowForwardIosIcon color="primary" fontSize="small" />
                </Grid>
              </Grid>

              <ImageList
                gap={18}
                sx={{
                  display: "flex",
                  flexWrap: "nowrap",
                  overflowX: "auto",
                  width: "100%",
                  height: "370px",
                }}
              >
                {products.map((product) =>
                  product.tag === tag ? (
                    <ImageListItem
                      key={product.id}
                      sx={{
                        flex: "0 0 auto",
                      }}
                    >
                      <NftThumb product={product} />
                    </ImageListItem>
                  ) : null
                )}
              </ImageList>
            </Box>
          ))}
        </main>
      </Container>
      <Footer title="Hippy" description="Hippy" />
    </React.Fragment>
  );
}

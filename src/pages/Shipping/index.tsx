import React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

// import stylesheets
import "./shipping.scss";

// import sub components
import TopMenuBar from "../../components/TopMenuBar";
import ShippingBox from "./ShippingBox";
import { Helmet } from "react-helmet";

const Shipping = () => {
  return (
    <>
      <Helmet>
        <title>
          Design your stylish labels for your home-brewed beer or wine
        </title>
        <meta
          name="description"
          content="If you make juice, beer, schnapps or wine yourself, you can give the bottles a nice look by putting your own labels on the bottles."
        />
        <meta
          name="keywords"
          content="beer label, wine label, cider label, jam label, create your own, order labels online, home brewer, label your beer batches, stickers, label, decal, wine labels, jam labels, word template, free shipping, brewed beer, custom labels"
        />
      </Helmet>
      <div className="shipping">
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="xl">
            <TopMenuBar />
            <ShippingBox />
            {/* {status === "Sign In" ? <Login /> : ""} */}
          </Container>
        </React.Fragment>
      </div>
    </>
  );
};

export default Shipping;

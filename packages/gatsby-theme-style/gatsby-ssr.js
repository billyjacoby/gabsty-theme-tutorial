import React from "react";
import Layout from "./src/components/layout";

export const wrapPageElement = ({ element, props }, themeOptions) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  if (themeOptions.wrapRootElement) {
    return <Layout {...props}>{element}</Layout>;
  } else {
    return;
  }
};

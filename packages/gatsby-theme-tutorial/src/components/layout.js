import React from "react";

const Layout = ({ children }) => {
  return (
    <div
      style={{
        margin: -15,
        padding: 15,
        backgroundColor: "tomato",
        fontFamily: "sans-serif",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {children}
    </div>
  );
};

export default Layout;

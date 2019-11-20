import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Navbar from "./navbar";

import "../styles/header.css";

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          navigationPages {
            name
            title
            path
          }
        }
      }
    }
  `);

  return (
    <div className="header">
      <Link to="/" className="no-style">
        <h1 className="site-heading">{data.site.siteMetadata.title}</h1>
        <h4>{data.site.siteMetadata.description}</h4>
      </Link>
      <Navbar navigationPages={data.site.siteMetadata.navigationPages} />
    </div>
  );
};

export default Header;

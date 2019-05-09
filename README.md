# Building a GatsbyJS Theme - Part Two

## Designing and configuring our Layout

This is part two in a multi-part tutorial series on building your own Gatsby theme from scratch.

Please checkout the [Introduction]() and [Part One]() of this series if you haven't yet, as we will be picking up right where we left off at the end of part one.

### Create your layout component

So the first step in styling our theme is going to be building a main Layout component. For the purposes of this tutorial, we will do this the same way you would build any other Layout component in Gatsby.

In your theme directory create a file named `layout.js` in a `gatsby-theme-tutorial/src/components/` directory.

Layout components in Gatsby take in a `{children}` object, build their layout around this object, and render the children passed into the Layout component. This is how you would do some basic styling in a Layout component in gatsby:

### layout.js

```JAVASCRIPT
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

```

After we have our Layout component built we can go ahead and import it into our Index page component, and wrap our page content in the Layout component to see the style changes:

### index.js

```JAVASCRIPT
import React from "react";
import Layout from "../components/layout";

export default () => (
  <Layout>
    <h1>Hello World!</h1>
  </Layout>
);

```

This is great, we now have our layout working as expected in our Gatsby theme.

Lets go ahead and create a new page in our `site/` folder.

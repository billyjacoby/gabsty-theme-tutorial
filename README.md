# Building a GatsbyJS Theme - Part One

## Setting up our theme development environment

Welcome to part one of the tutorial. If you don't know what Gatsby themes are, or why you would use them, you can refer to part one of this tutorial[here.](https://billyjacoby.dev/intro-to-gatsby-themes)

This tutorial is aimed for developers who either want to create themes to release to other users, or want to create themes that they could use across a number of their own projects.

That being said, here are a few things that we will have to tackle in this part of the tutorial to get our dev environment for building themes up and running:

- Initialize an 'umbrella' NPM package to contain both our theme package, as well as our development site
- Initialize an NPM package that will contain all of our theme files and configurations
- Initialize an NPM package that will act as a user site consuming our theme

Now bear with me, because when I first started building this theme this all seemed a little daunting, and repetitive to me.

For development purposes we will be initially building the NPM packages as private. This is so that we can use `yarn`'s workspaces feature.

### NPM Init (Thrice)

Okay so the first thing we'll do is make a directory that holds our entire theme development environment, and `cd` into the directory.

`mkdir gatsby-theme-tutorial-development`

`cd gatsby-theme-tutorial-development`

Once in this folder we'll run `npm init` for the first time. You don't need to worry about filling in the information that NPM asks you for just now. If you hit enter all the way through you should have a `package.json` file that looks like this:

package.json

```JSON
{
  "name": "gatsby-theme-tutorial-development",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "MIT"
}
```

Now we need to make two changes to this file in order configure and allow us to use yarn's workspaces feature. Add the following lines to the bottom of your `package.json` file:

/gatsby-theme-tutorial-development/package.json

```JSON
...
"private": true,
"workspaces": [
    "site",
    "packages/*"
  ]
```

After this is complete we need to add the mentioned directories in our `gatsby-theme-tutorial` folder.

`mkdir packages`

`mkdir site`

Now we `cd` into the `packages/` folder and create the directory for our theme

`cd packages`

`mkdir gatsby-theme-tutorial`

Our folder structure will look like this so far:

```TREE
gatsby-theme-tutorial-development/
--packages/
  |--gatsby-theme-tutorial/
--site/
--package.json
```

Now run the `npm init` command again in the `gatsby-theme-tutorial` folder, as well as the `site` folder. We can just hit enter through all of the prompts and worry about filling the information in later. This will make our directory structure look like this:

```TREE
gatsby-theme-tutorial-development/
--packages/
  |--gatsby-theme-tutorial/
    |--package.json
--site/
  |--package.json
--package.json
```

Okay, now that all of that is out of the way we can begin installing the necessary dependencies for our theme. We'll be doing all of this from the main directory of our development environment, in this tutorial it will be `/gatsby-theme-tutorial-development`.

From this directory add the necessary dependencies to our theme workspace for Gatsby.

`yarn workspace gatsby-theme-tutorial add -D gatsby react react-dom`

You should see a `node_modules/` folder in your gatsby theme folder once this is complete.

Now we need to copy our devDependencies to peerDependencies in the gatsby theme package.json file.

The `package.json` file should look like this once this is complete:

/gatsby-theme-tutorial-development/gatsby-theme-tutorial/package.json

```JSON
{
  "name": "gatsby-theme-tutorial",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "MIT",
  "devDependencies": {
    "gatsby": "^2.4.2",
    "react": "^16.8.6",
    "react-dom": "^16.8.6"
  },
  "peerDependencies": {
    "gatsby": "^2.4.2",
    "react": "^16.8.6",
    "react-dom": "^16.8.6"
  }
}
```

Next we need to add our theme package, and our gatsby scripts to our site's package.json file. We will add this like so:

/gatsby-theme-tutorial-development/site/package.json

```JSON
{
  "name": "site",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    /// NEW LINES
    "develop": "gatsby develop",
    "build": "gatsby build"
  },
  "author": "",
  "license": "MIT",
  /// NEW LINES
  "dependencies": {
    "gatsby-theme-tutorial": "*"
  }
}
```

The last thing we should need to do here is add our Gatsby and React dependencies to our site workspace.

`yarn workspace site add gatsby react react-dom`

The final `package.json` for our `site` directory should look like this now:

```JSON
{
  "name": "site",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "develop": "gatsby develop",
    "build": "gatsby build"
  },
  "author": "",
  "license": "MIT",
  "dependencies": {
    "gatsby": "^2.4.2",
    "gatsby-theme-tutorial": "*",
    "react": "^16.8.6",
    "react-dom": "^16.8.6"
  }
}
```

Okay, take a deep breath and know that all of our boilerplate folder configuration is finally complete!

Next we just have to configure our `gatsby-config.js` files in order to be ready to start building!

We need to install `gatsby-plugin-page-creator` into our theme. To do this run the following command.

`yarn workspace gatsby-theme-tutorial add gatsby-plugin-page-creator`

In our `gatsby-theme-tutorial` folder create a `gatsby-config.js` file that looks like this:

`gatsby-theme-tutorial/gatsby-config.js`

```JAVASCRIPT
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`
      }
    }
  ]
};
```

We also need to add an `index.js` file into this folder so that our site recognizes this folder as an NPM package. This file doesn't need to contain anything except for a comment for now.

`gatsby-theme-tutorial/index.js`

```JAVASCRIPT
// no-op
```

And in out `site` folder we need to create a super simple config file that tells our site to use our new theme!

`site/gatsby-config.js`

```JAVASCRIPT
module.exports = {
  __experimentalThemes: ["gatsby-theme-tutorial"]
};
```

Now lets create a basic index page in our theme folder and see if everything is working as expected.

`gatsby-theme-tutorial/src/pages/index.js`

```JAVASCRIPT
import React from 'react';

export default () => (
  <h1>Hello World!</h1>
);
```

Now to check our work...

Run `yarn` one last time, from our `gatsby-theme-tutorial/` directory to make sure all of our packages are correctly installed.

Then run `yarn workspace site develop` and you will hopefully see our index page in a web browser!

### The Result

Now if you're anything like me, you're probably thinking something along the lines of "Wow we needed to do all of that work just to setup an index page?"

The magic of Gatsby themes is that we can create all of our boilerplate pages and styles inside of our theme package, and any gatsby build that will be using this theme will have access to those files!

Furthermore, if we need to update a component or some styles we can do so in our theme then push the update to NPM and any other project using that theme simply has to update our theme package in order to see those updates!

### What's next

In part two of this tutorial we will begin diving into how we can style the layout component of our theme, and see all of those changes propagate to our development site that is using our theme.

It's going to get very interesting from here on out, so stay tuned and tweet at me or leave a comment if you get hung up on anything or have any questions!

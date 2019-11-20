<!-- ### What's Next (FROM PART TWO)

In part three of this tutorial we will begin building different styles for different sections of our theme (blog, store, etc...), as well as how we can override styles and whole components from the site that is using our theme.

The possibilities are endless when it comes to end-user customization with Gatsby themes. We'll also see how little boilerplate code we need to build full websites on a Gatsby theme! -->

# Building a GatsbyJS Theme - Part Three

## Making our existing theme composable

This is part three in a multi-part tutorial series on building your own Gatsby theme from scratch.

Please checkout the [Introduction](https://billyjacoby.dev/intro-to-gatsby-themes), [Part One](https://billyjacoby.dev/building-a-gatsbyjs-theme-part-one), and [Part Two](https://billyjacoby.dev/building-a-gatsbyjs-theme-part-two) of this series if you haven't yet, as we will be picking up right where we left off at the end of part Two.

The finished code for this portion of the tutorial can be found on my github repo [here.](https://github.com/billyjacoby/gabsty-theme-tutorial/tree/part-three)

<!-- MAKE SURE THIS WORKS BEFORE PUBLISHING -->

The end goal of this tutorial is to break down some common website functions into their own respective themes in order to allow us to use them as _basically_ their own components. That means that we need to make sure that each component plays nicely with each other. We'll have to change a few things in our theme to do this.

Here's what we'll be tackling in this part of the tutorial:

- Change existing theme name
- Update our project's dependencies
- Add the ability to take options into our theme
- Export components from our theme to be used in our site
- Add configurable options to our theme

### Change existing theme name

The theme we have been working on this far we have named `gatsby-theme-tutorial`. the first thing that we'll do here is change this name to reflect the goal of this theme. We'll change this directory name to `gatsby-theme-style` for now. After doing this our folder structure will look like this:

```
gatsby-theme-tutorial-development/
--packages/
  |--gatsby-theme-style/
    |--package.json
    ...
--site/
  |--package.json
--package.json
```

We'll also need to update our `packages/gatsby-theme-style/package.json` and `site/package.json` file to change the name of our theme from `gatsby-theme-tutorial` to `gatsby-theme-style`.

Before we can continue with this build and run our development site again, we have to do a few other things.

### Update our dependencies

Next, we will need to update out gatsby-config.js in our site directory, but before we do this lets go ahead and update all of our packages by running `yarn upgrade` in our root project directory.

We're doing this mainly because it's been a while since we've done any work on this tutorial and we want to be sure we're using the most up to date packages.

After everything has been updated, lets import our theme as a plugin rather than using the `__experimental` tag that we're been using.

### site/gatsby-config.js

```
module.exports = {
  siteMetadata: {
    title: `New Gatsby Site`,
    description: `A website using our Gatsby theme!`
  },
  plugins: [
    {
      resolve: "gatsby-theme-style",
    options: {
      // blank for now, but we;ll be coming back to this
    }
  }
  ]
};

```

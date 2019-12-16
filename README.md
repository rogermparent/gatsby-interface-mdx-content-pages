# Gatsby Interface: MDX Content Pages

This is an extremely simple Gatsby plugin that does two things:

1. Adds an interface node type when added to `gatsby-config.js`
2. Exports its name and fields for use in inheritance or implementation.

The plugin takes no options, and because of the way Gatsby's Theme plugin resolution works this means only one instance will be added regardless of how many plugins or theme have it in their `gatsby-config`.

All this interface really is is a convenient way to access the `body` and `frontmatter` of an MDX-based `ContentPage`, allowing for swappable MDX sources that aren't necessarily `gatsby-plugin-mdx`.

If you need fields from the MDX type besides `body` and `frontmatter`, you can reach into the parent Node for them.

For example: 

```graphql
contentPage {
  ... on IMdxContentPage {
    body
  }
  parent {
    ... on Mdx {
      timeToRead
    }
  }
}
```

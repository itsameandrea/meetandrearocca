










const Prismic = require("prismic-javascript");
const DOM = require("prismic-dom");

const GhostContentAPI = require('@tryghost/content-api')

const marked = require('marked')
const moment = require('moment')

const prismicConfig = {
  apiEndpoint: 'https://meetandrearocca.cdn.prismic.io/api/v2',
  apiToken: process.env.PRISMIC_TOKEN
}

const ghostConfig = {
  baseUrl: 'https://ghost.meetandrearocca.com',
  apiKey: process.env.GHOST_API_TOKEN
}

module.exports = function (api) {
  api.loadSource(async ({ addCollection }) => {
    const postsCollection = addCollection({ typeName: 'Post' })
    const projectsCollection = addCollection({ typeName: "Project" })
    const pagesCollection = addCollection({ typeName: 'StaticPage' })
    const socialsCollection = addCollection({ typeName: 'Social' })

    // Posts coming from Ghost
    const contentApi = new GhostContentAPI({
      url: ghostConfig.baseUrl,
      key: ghostConfig.apiKey,
      version: 'v3'
    })
    
    const posts = await contentApi.posts
      .browse({ include: 'tags,authors' })

    posts.forEach(post => {
      postsCollection.addNode({
        path: `/blog/${post.slug}`,
        slug: post.slug,
        tags: post.tags,
        author: {
          name: post.authors[0].name,
          avatar: post.authors[0].profile_image,
        },
        createdAt: post.published_at,
        createdAtFormatted: moment(post.published_at).format(
          "DD/MM/YYYY"
        ),
        updatedAt: moment(post.updated_at).format(
          "DD/MM/YYYY"
        ),
        image: post.feature_image,
        title: post.title,
        excerpt: post.excerpt,
        content: post.html,
      })
    })

    // Projects, static pages and socials from Prismic
    const prismic = await Prismic.getApi(prismicConfig.apiEndpoint, {
      accessToken: prismicConfig.apiToken,
    });

    const { results } = await prismic.query("");

    results.forEach(
      ({
        type,
        data,
        slugs,
        first_publication_date,
      }) => {
        if (type === "project") {
          projectsCollection.addNode({
            path: `/projects/${slugs[0]}`,
            slug: slugs[0],
            client: {
              name: DOM.RichText.asText(data.client_name),
              logo: data.client_logo.url,
            },
            createdAt: first_publication_date,
            image: data.image.url,
            url: DOM.RichText.asText(data.url),
            technologies: DOM.RichText.asText(
              data.project_technologies
            ).split(","),
            description: marked(DOM.RichText.asText(data.project_description)),
          });
        } else if (type === "static_page") {
          pagesCollection.addNode({
            path: `/${slugs[0]}`,
            slug: slugs[0],
            title: DOM.RichText.asText(data.title),
            content: marked(DOM.RichText.asText(data.content))
          });
        } else if (type === "social") {
          socialsCollection.addNode({
            title: data.title[0].text,
            url: data.url[0].text,
            icon: data.icon[0].text
          });
        }
      }
    );
  })
}

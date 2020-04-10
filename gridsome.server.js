const Prismic = require("prismic-javascript");
const DOM = require("prismic-dom");
const marked = require('marked')

const apiEndpoint = "https://meetandrearocca.cdn.prismic.io/api/v2";
const apiToken = process.env.PRISMIC_TOKEN;

module.exports = function (api) {
  api.loadSource(async ({ addCollection }) => {
    const posts = addCollection({ typeName: 'Post' })
    const projects = addCollection({ typeName: "Project" })
    const pages = addCollection({ typeName: 'StaticPage' })
    const socials = addCollection({ typeName: 'Social' })

    const api = await Prismic.getApi(apiEndpoint, {
      accessToken: apiToken,
    });

    const { results } = await api.query("", {
      fetchLinks: ["author.name", "author.avatar"],
    });

    results.forEach(
      ({
        type,
        data,
        slugs,
        tags,
        first_publication_date,
        last_publication_date,
      }) => {
        if (type === "project") {
          projects.addNode({
            path: `/projects/${slugs[0]}`,
            slug: slugs[0],
            client: {
              name: DOM.RichText.asText(data.client_name),
              logo: data.client_logo.url,
            },
            image: data.image.url,
            technologies: DOM.RichText.asText(
              data.project_technologies
            ).split(","),
            description: marked(DOM.RichText.asText(data.project_description)),
          });
        } else if (type === "post") {
          const { author } = data;

          posts.addNode({
            path: `/blog/${slugs[0]}`,
            slug: slugs[0],
            tags,
            author: {
              name: author.data.name[0].text,
              avatar: author.data.avatar.url,
            },
            createdAt: first_publication_date,
            updatedAt: last_publication_date,
            image: data.image.url,
            title: DOM.RichText.asText(data.title),
            excerpt: DOM.RichText.asText(data.excerpt),
            content: marked(DOM.RichText.asText(data.content))
          });
        } else if (type === "static_page") {
          pages.addNode({
            path: `/${slugs[0]}`,
            slug: slugs[0],
            title: DOM.RichText.asText(data.title),
            content: marked(DOM.RichText.asText(data.content))
          });
        } else if (type === "social") {
          socials.addNode({
            title: data.title[0].text,
            url: data.url[0].text,
            icon: data.icon[0].text
          });
        }
      }
    );
  })
}

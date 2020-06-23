require("dotenv").config();

module.exports = {
  siteName: "Andrea Rocca | Web Development Consultant",
  templates: {
    Post: "/blog/:slug",
    Project: "/projects/:slug",
    StaticPage: "/:slug",
  },
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss",
      options: {
        shouldPurge: false,
      }
    }
  ],
};

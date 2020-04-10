<template>
  <Layout>
    <portfolio-block
      title="My projects"
      :projects="projects"
    />
  </Layout>
</template>

<script>
import PortfolioBlock from '@/components/PortfolioBlock'

export default {
  name: 'ProjectsPage',
  components: {
    PortfolioBlock,
  },
  computed: {
    projects() {
      return this.$page.projects.edges.map(e => e.node)
    }
  }
}
</script>
<page-query>
  query Project {
    projects: allProject {
      edges {
        node {
          technologies
          image
          path
          slug
          description
          client {
            name
            logo
          }
        }
      }
    }
  }
</page-query>

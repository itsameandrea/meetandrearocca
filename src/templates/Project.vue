<template>
  <Layout>
    <div class="outer">
      <div class="inner">
        <article class="post post-full flex flex-col justify-start pt-3">
          <header class="post-header">
            <h1 class="post-title line-top">{{ project.client.name }}</h1>
            <div class="project-technologies">
              <div>
                <span
                  v-for="(tech, index) in project.technologies"
                  :key="index"
                  :class="`py-1 px-2 mr-1 text-xs ${getTechnologyBackground(tech)}`"
                >
                  {{ tech.toLowerCase() }}
                </span>
              </div>
              <div>
                <a :href="project.url" target="_blank">Have a look</a>
              </div>
            </div>
          </header><!-- .post-header -->
          <div class="flex flex-col lg:flex-row">
            <div class="post-thumbnail w-full lg:w-1/2">
              <img :src="project.image" :alt="project.client.name" />
            </div><!-- .post-thumbnail -->
            <div class="post-content text-base px-0 lg:px-3 w-full lg:w-1/2" v-html="project.description">
            </div><!-- .post-content -->
          </div>
        </article><!-- .post -->
      </div><!-- .inner -->
    </div><!-- .outer-->
  </Layout>
</template>

<script>
import { TECHNOLOGIES_BACKGROUNDS } from '@/constants'

export default {
  name: 'ProjectTemplate',
  computed: {
    project() {
      return this.$page.project
    }
  },
  methods: {
    getTechnologyBackground(tech) {
      const formattedTech = tech.toLowerCase().trim().replace(/ /g, '-')
      console.log(formattedTech)
      return TECHNOLOGIES_BACKGROUNDS[formattedTech]
    }
  }
}
</script>

<style lang="scss" scoped>
  .project-technologies {
    display: flex;
    justify-content: space-between;
  }
</style>

<page-query>
  query Project ($path: String!) {
    project: project (path: $path) {
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
</page-query>

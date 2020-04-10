<template>
  <section class="portfolio-block block outer">
    <div class="inner">
      <div class="block-header">
        <h2 class="block-title line-top">{{ title }}</h2>
        <p v-if="subtitle" class="block-subtitle">
          {{ subtitle }}
        </p>
      </div><!-- .block-header -->
      <div class="block-content">
        <div class="portfolio-feed layout-mosaic">
          <article v-for="(project, index) in projects" :key="index" class="post project">
            <g-link
              :to="project.path"
              class="post-link"
            >
              <div class="post-thumbnail">
                <img class="thumbnail" :src="project.image" :alt="project.name" />
              </div>
              <header class="post-header">
                <h3 class="post-title">{{ project.client.name }}</h3>
              </header>
            </g-link><!-- .post-link -->
          </article><!-- .post -->
        </div><!-- .portfolio-feed -->
      </div><!-- .block-content -->
    </div><!-- .inner -->
  </section><!-- .block -->
</template>
<script>
export default {
  name: 'PortfolioBlock',
  props: {
    title: {
      type: String,
      default: 'Portfolio'
    },
    subtitle: {
      type: String,
      default: ''
    },
    projects: {
      type: Array,
      default: () => []
    }
  }
}
</script>

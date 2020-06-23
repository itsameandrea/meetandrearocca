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
          <g-link
            v-for="(project, index) in projects"
            :key="index"
            :to="project.path"
            class="post-link"
          >
            <article class="post project">
                <div class="post-thumbnail">
                  <img class="thumbnail" :src="project.image" :alt="project.name" />
                </div>
                <header class="post-header">
                  <h3 class="post-title">{{ project.client.name }}</h3>
                </header>
            </article><!-- .post -->
          </g-link><!-- .post-link -->
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

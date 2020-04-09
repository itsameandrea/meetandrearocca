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
            <!-- <a
              v-if="index === projects.length -1"
              :href="`/projects/${project.slug}`"
              class="post-link"
            >
              <div class="post-thumbnail">
                <img class="thumbnail" :src="project.image" :alt="project.title" />
              </div>
              <span class="view-all">{{ include_dict.section.view_all_text | default("View All", true) }}</span>
            </a> -->
            <a
              :href="`/projects/${project.slug}`"
              class="post-link"
            >
              <div class="post-thumbnail">
                <img class="thumbnail" :src="project.image" :alt="project.name" />
              </div>
              <header class="post-header">
                <h3 class="post-title">{{ project.name }}</h3>
              </header>
            </a><!-- .post-link -->
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

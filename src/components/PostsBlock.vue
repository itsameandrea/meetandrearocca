<template>
  <section class="posts-block block outer">
    <div class="inner">
      <div class="block-inside">
        <div class="block-header">
          <h2 class="block-title line-top">{{ title }}</h2>
          <p v-if="subtitle" class="block-subtitle">
            {{ subtitle }}
          </p>
        </div><!-- .block-header -->
        <div class="block-content">
          <div class="post-feed">
            <article
              v-for="(post, index) in posts"
              :key="index"
              class="post"
            >
              <g-link class="post-thumbnail" :to="post.path">
                <img
                  class="thumbnail"
                  :src="post.image"
                  :alt="post.title"
                />
              </g-link>
              <header class="post-header">
                <h3 class="post-title">
                  <g-link :href="post.path" rel="bookmark">
                    {{ post.title }}
                  </g-link>
                </h3>
                <div class="post-meta">
                  <time class="published" datetime="post.createdAt">
                    {{ post.createdAtFormatted }}
                  </time>
                </div>
              </header>
              <div v-if="post.excerpt" class="post-excerpt">
                <p>{{ post.excerpt }}</p>
              </div>
            </article><!-- .post -->
          </div><!-- .portfolio-feed -->
        </div><!-- .block-content -->
      </div><!-- .block-inside -->
    </div><!-- .inner -->
  </section><!-- .block -->
</template>
<script>
export default {
  name: 'PostsBlock',
  props: {
    title: {
      type: String,
      default: 'Blog posts'
    },
    subtitle: {
      type: String,
      default: ''
    },
    posts: {
      type: Array,
      default: () => []
    }
  }
}
</script>

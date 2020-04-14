<template>
  <Layout>
    <div class="outer">
      <div class="inner">
        <article class="post post-full">
          <div class="post-thumbnail inner-small">
            <img :src="post.image" :alt="post.title" />
          </div>
          <header class="post-header inner-small">
            <h1 class="post-title line-top">{{ post.title }}</h1>
            <div class="post-meta">
              <time class="published" :datetime="post.createdAtFormatted">
                {{ post.createdAt }}
              </time>
            </div><!-- .post-meta -->
            <div class="post-subtitle">
              {{ post.excerpt }}
            </div><!-- .post-subtitle -->
          </header><!-- .post-header -->
          <div class="post-content inner-small" v-html="post.content">
          </div><!-- .post-content -->
        </article><!-- .post -->
      </div><!-- .inner -->
    </div><!-- .outer-->
  </Layout>
</template>

<script>
export default {
  name: 'ProjectTemplate',
  computed: {
    post() {
      return this.$page.post
    }
  },
  mounted() {
    const pres = document.querySelectorAll('pre')

    pres.forEach(pre => {
      const code = pre.querySelector('code')

      if (code) {
        const lang = code.classList[0]
        pre.classList.add(lang)
      }
    })
  }
}
</script>

<page-query>
  query Post ($path: String!) {
    post: post (path: $path) {
      path
      slug
      author {
        name
        avatar
      }
      createdAtFormatted
      updatedAt
      image
      title
      excerpt
      content
    }
  }
</page-query>

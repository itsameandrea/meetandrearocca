<template>
  <Layout>
    <div class="outer">
      <div class="inner">
        <article class="post post-full pt-3">
          <header class="post-header">
            <h1 class="post-title line-top">{{ page.title }}</h1>
          </header><!-- .post-header -->

          <div class="post-content" v-html="page.content">
          </div><!-- .post-content -->
        </article><!-- .post -->
      </div><!-- .inner -->
    </div><!-- .outer-->
  </Layout>
</template>

<script>
export default {
  name: 'StaticPageTemplate',
  computed: {
    page() {
      return this.$page.staticPage
    }
  }
}
</script>

<page-query>
  query StaticPage ($path: String!) {
    staticPage: staticPage (path: $path) {
      title
      content
    }
  }
</page-query>

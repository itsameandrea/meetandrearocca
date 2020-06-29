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
import Prism from 'prismjs'

import "prismjs/components/prism-scss"
import "prismjs/components/prism-markup"
import "prismjs/components/prism-ruby"
import "prismjs/plugins/toolbar/prism-toolbar"
import "prismjs/plugins/autolinker/prism-autolinker";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/plugins/line-highlight/prism-line-highlight";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard";
import "prismjs/plugins/highlight-keywords/prism-highlight-keywords";
// import "prismjs/plugins/show-language/prism-show-language";
import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace";

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
        pre.classList.add(lang, 'line-numbers')
      }

      const parent = document.createElement('div')
      parent.classList.add('prism')

      pre.parentNode.insertBefore(parent, pre)

      parent.appendChild(pre)
    })

    Prism.highlightAll()
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


<style lang="scss">
  @import "@/assets/styles/prism.scss";

  .post-content {
    ul {
      list-style: disc;
    }
  }
</style>
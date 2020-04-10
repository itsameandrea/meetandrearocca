<template>
  <layout>
    <posts-block
      title="Blog"
      :posts="posts"
    />
  </layout>
</template>
<script>
import PostsBlock from '@/components/PostsBlock'
export default {
  name: 'BlogPage',
  components: {
    PostsBlock
  },
  computed: {
    posts() {
      return this.$page.posts.edges.map(e => e.node)
    }
  }
}
</script>
<page-query>
  query Post {
    posts: allPost {
      edges {
        node {
          path
          slug
          author {
            name
            avatar
          }
          createdAt
          updatedAt
          image
          title
          excerpt
          content
        }
      }
    }
  }
</page-query>

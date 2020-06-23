<template>
  <footer id="colophon" class="site-footer outer">
    <div class="inner">
      <div class="site-footer-inside">
        <p class="site-info">
          © {{ new Date().getFullYear() }} @ilrock
        </p><!-- .site-info -->
        <ul class="social-links">
          <li v-for="(social, index) in socials" :key="index">
            <a
              :href="social.url"
              target="_blank"
              rel="noopener"
            >
              <font-awesome :icon="['fab', social.icon]"/>
            </a>
          </li>
        </ul><!-- .social-links -->
      </div><!-- .site-footer-inside -->
    </div><!-- .inner -->
  </footer><!-- .site-footer -->
</template>
<script>
export default {
  name: 'Footer',
  computed: {
    socials() {
      return this.$static.socials.edges.map(e => e.node)
    }
  }
}
</script>

<static-query>
query Social {
  socials: allSocial {
    edges {
      node {
        title
        url
        icon
      }
    }
  }
}
</static-query>

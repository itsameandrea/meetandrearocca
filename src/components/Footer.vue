<template>
  <footer id="colophon" class="site-footer outer">
    <div class="inner">
      <div class="site-footer-inside">
        <p class="site-info">
          @ilrock
          &nbsp;
        </p><!-- .site-info -->
        <ul class="social-links">
          <li v-for="(social, index) in socials" :key="index">
            <a
              :href="link.url"
              target="_blank"
              rel="noopener"
            >
              <span
                :class="`fab ${link.icon}`"
                aria-hidden="true"
              />
              <span class="screen-reader-text">
                {{ link.title }}
              </span>
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
  props: {
    socials: {
      type: Array,
      default: () => []
    }
  }
}
</script>

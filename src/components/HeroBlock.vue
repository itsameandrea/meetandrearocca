<template>
  <section class="block hero-block outer">
    <div class="inner-small">
      <div class="block-header">
        <h2 class="block-title"> {{ title }} </h2>
      </div><!-- .block-header -->
      <div class="block-content">
        <div class="block-copy">
          {{ subtitle }}
        </div>
        <div class="block-cta">
          <a class="button mt-3" href="mailto:hello@meetandrearocca.com" target="_blank">
            Get in touch
          </a>
        </div>
      </div><!-- .block-content -->
    </div><!-- .inner -->
  </section><!-- .block -->
</template>
<script>
export default {
  name: 'HeroBlock',
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    }
  }
}
</script>

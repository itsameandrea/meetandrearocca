<template>
  <div id="page" class="site palette-light accent-pink">
    <site-header />
    <main id="content" class="site-content">
      <slot />
    </main>
    <site-footer />
  </div>
</template>
<script>
import SiteHeader from '@/components/Header'
import SiteFooter from '@/components/Footer'
export default {
  components: {
    SiteHeader,
    SiteFooter
  }
}
</script>

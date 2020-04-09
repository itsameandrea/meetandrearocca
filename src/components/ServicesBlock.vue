<template>
  <section class="block services-block outer">
    <div class="inner">
      <div class="block-inside">
        <div class="block-header">
          <h2 class="block-title line-top">{{ title }}</h2>
          <p v-if="subtitle" class="block-subtitle">
            {{ subtitle }}
          </p>
        </div><!-- .block-header -->
        <div class="block-content">
          <div class="services-list">
            <div v-for="(service, index) in services" :key="index" class="service">
              <span class="service-counter" aria-hidden="true">{{ index + 1 }}.</span>
              <h3 class="service-title">{{ service.title }}</h3>
              <div class="service-text">
                {{ service.content }}
              </div>
            </div><!-- .service -->
          </div><!-- .services-list -->
        </div><!-- .block-content -->
      </div><!-- .block-inside -->
    </div><!-- .inner -->
  </section><!-- .block -->
</template>
<script>
export default {
  name: 'ServicesBlock',
  props: {
    title: {
      type: String,
      default: 'Services'
    },
    subtitle: {
      type: String,
      default: ''
    },
    services: {
      type: Array,
      default: () => []
    }
  }
}
</script>

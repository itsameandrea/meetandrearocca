<template>
  <header id="masthead" class="site-header outer">
    <div class="inner">
      <div class="site-header-inside">
        <div class="site-branding">
          <p class="site-logo">
            <a href="/">
              <img :src="logo" alt="Logo" />
            </a>
          </p><!-- .site-logo -->
          <!-- {% if page.template == "home" or page.template == "blog" %}
          <h1 class="site-title"><a href='{{ "/" | relative_url }}'>{{ site.params.header.title }}</a></h1>
          {% else %}
          <p class="site-title"><a href='{{ "/" | relative_url }}'>{{ site.params.header.title }}</a></p>
          {% endif %} -->
        </div><!-- .site-branding -->
        <nav id="main-navigation" class="site-navigation" aria-label="Main Navigation">
          <div class="site-nav-inside">
            <button id="menu-close" class="menu-toggle"><span class="screen-reader-text">Open Menu</span><span class="icon-close" aria-hidden="true"></span></button>
            <ul class="menu">
              <li
                v-for="(link, index) in links"
                :key="index"
                class="menu-item"
                :class="{ 'current-menu-item': link.url === $route.path  }">
                <g-link :to="link.url">{{ link.label }}</g-link>
              </li>
            </ul><!-- .menu -->
          </div>
        </nav><!-- .site-navigation -->
        <button id="menu-open" class="menu-toggle"><span class="screen-reader-text">Close Menu</span><span class="icon-menu" aria-hidden="true"></span></button>
      </div><!-- .site-header-inside -->
    </div><!-- .inner -->
  </header><!-- .site-header -->
</template>
<script>
import logo from '@/assets/images/logo.png'

export default {
  data() {
    return {
      logo,
      links: [
        { label: 'Home', url: '/' },
        { label: 'About', url: '/about-me'},
        { label: 'Projects', url: '/projects'},
        { label: 'Blog', url: '/blog'}
      ]
    }
  }
}
</script>

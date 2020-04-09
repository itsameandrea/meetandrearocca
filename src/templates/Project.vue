<template>
  <div class="outer">
    <div class="inner">
      <article class="post post-full">
        <header class="post-header inner-small">
          <h1 class="post-title line-top">{{ page.params.title }}</h1>
          <div class="post-meta">
            <time class="published"
              datetime="{{page.date | date_format("%Y-%m-%d %H:%M") }}">{{ page.date | date_format("%B %d, %Y") }}</time>
          </div><!-- .post-meta -->
          {% if page.params.subtitle %}
          <div class="post-subtitle">
            {{ page.params.subtitle | safe }}
          </div><!-- .post-subtitle -->
          {% endif %}
        </header><!-- .post-header -->
        {% if page.params.content_img_path %}
        <div class="post-thumbnail">
          <img src="{{ page.params.content_img_path | relative_url }}" alt="{{ page.params.title }}" />
        </div><!-- .post-thumbnail -->
        {% endif %}
        <div class="post-content inner-small">
          {{ page.content }}
        </div><!-- .post-content -->
      </article><!-- .post -->
    </div><!-- .inner -->
  </div><!-- .outer-->
</template>

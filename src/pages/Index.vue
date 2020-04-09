<template>
  <Layout>
    <hero-block
      title="Hi, I'm Andrea Rocca"
      subtitle="I'm a web development consultant specialised in full-stack Javascript and Rails applications"
    />
    <portfolio-block
      title="Recent Work"
      subtitle="These are some of the clients that have been happy to work with me"
      :projects="projects"
    />
    <services-block
      title="What I Can Help You With"
      subtitle="These are the services that I offer to my clients"
      :services="services"
    />
    <posts-block
      title="Latest from the Blog"
      :posts="posts"
    />
  </Layout>
</template>

<script>
import HeroBlock from '@/components/HeroBlock'
import PortfolioBlock from '@/components/PortfolioBlock'
import ServicesBlock from '@/components/ServicesBlock'
import PostsBlock from '@/components/PostsBlock'

export default {
  name: 'HomePage',
  components: {
    HeroBlock,
    PortfolioBlock,
    ServicesBlock,
    PostsBlock
  },
  data() {
    return {
      projects: [
        {
          name: 'Lacerba',
          slug: 'lacerba',
          image: 'https://themes.stackbit.com/demos/exto/images/1_thumb.jpg'
        },
        {
          name: 'Faraday',
          slug: 'faraday',
          image: 'https://themes.stackbit.com/demos/exto/images/2_thumb.jpg'
        }
      ],
      services: [
        {
          title: 'Rapid MVP prototyping',
          content: 'I can help you build a functional first version of your product to show your investors or test with your users. I have a proven track record of MVPs built for my clients that ended up being successful.'
        },
        {
          title: 'Full-stack Web Development',
          content: `I can help you build, improve and add functionalities to your Javascript or Rails app. I have many years of experience working with Rails, Vue and Nodejs.`
        }
      ],
      posts: [
        {
          title: 'Guide to action cable',
          excerpt: 'Actioncable is hard, I make it easy',
          image: 'https://themes.stackbit.com/demos/exto/images/1_thumb.jpg',
          createdAt: new Date()
        }
      ]
    }
  }
}
</script>

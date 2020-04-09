import DefaultLayout from '@/layouts/Default.vue'
import "@/assets/styles/main.scss"

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  head.link.push({
    rel: "stylesheet",
    href: 'https://fonts.googleapis.com/css2?family=Muli&display=swap"'
  });
  Vue.component('Layout', DefaultLayout)
}

import DefaultLayout from '@/layouts/Default.vue'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config, library } from "@fortawesome/fontawesome-svg-core"
import { faGithub, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons"

import "@fortawesome/fontawesome-svg-core/styles.css";
import "@/assets/styles/main.scss"

config.autoAddCss = false
library.add(faGithub, faTwitter, faLinkedin)

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  head.link.push({
    rel: "stylesheet",
    href: 'https://fonts.googleapis.com/css2?family=Muli&display=swap"'
  });
  Vue.component('Layout', DefaultLayout)
  Vue.component("font-awesome", FontAwesomeIcon)
}

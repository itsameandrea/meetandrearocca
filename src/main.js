import DefaultLayout from '@/layouts/Default.vue'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config, library } from "@fortawesome/fontawesome-svg-core"
import { faGithub, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons"

import "prismjs"
import "dracula-prism/js/prism"
import "dracula-prism/css/dracula-prism.css"
import "prismjs/components/prism-scss.min";
import "prismjs/plugins/autolinker/prism-autolinker.min";
import "prismjs/plugins/autolinker/prism-autolinker.css";
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

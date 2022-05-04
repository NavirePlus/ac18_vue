import { createApp } from 'vue'
import App from './App.vue'
import VueScrollTo from 'vue-scrollto'

const IMAGE_CDN_URL = process.env.VUE_APP_IMAGE_CDN_URL
function getImageSource(path) {
  if (IMAGE_CDN_URL.startsWith("http")) {
    return `${IMAGE_CDN_URL}${path}`;
  } else {
    return require(`@/${IMAGE_CDN_URL}${path}`);
  }
}

const app = createApp(App)
app.config.globalProperties.$IMAGE_CDN_URL = IMAGE_CDN_URL
app.config.globalProperties.$getImageSource = getImageSource
app.provide('$IMAGE_CDN_URL', IMAGE_CDN_URL)
app.provide('$getImageSource', getImageSource)
app.use(VueScrollTo, {
    container: 'body',
    duration: 800,
    offset: -60,
    easing: 'ease-in-out'
  })
app.mount('#app')

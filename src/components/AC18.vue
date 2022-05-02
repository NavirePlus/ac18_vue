<template>
  <div id="whole">
    <page-header />

    <about-section />

    <members-section />

    <page-footer />
  </div>
</template>

<script>
// import page component
import PageHeader from './PageHeader.vue'
import AboutSection from './AboutSection.vue'
import MembersSection from './MembersSection.vue'
import PageFooter from './PageFooter.vue'

export default {
  name: 'AC18',
  components: {
    PageHeader,
    AboutSection,
    MembersSection,
    PageFooter
  },
  created() {
    window.addEventListener('scroll', this.onScroll)
  },
  unmounted() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      // ナビゲーションメニューの表示
      const navElem = document.getElementById('navContainer')
      let navElemOffcetTop = navElem.getBoundingClientRect().top+window.pageYOffset
      if (navElemOffcetTop > 100) {
        navElem.classList.remove('hide-navbar')
        navElem.classList.add('display-navbar')
      } else {
        navElem.classList.remove('display-navbar')
        navElem.classList.add('hide-navbar')
      }

      // ページTOPボタンの表示
      const overlayNavElem = document.getElementsByClassName('overlay-navigation')[0]
      const scrollTopBtn = document.getElementsByClassName('scroll-to-top')[0]
      if (window.scrollY > 100 && !overlayNavElem.classList.contains('overlay-active')) {
        scrollTopBtn.style.display = 'block'
      } else {
        scrollTopBtn.style.display = 'none'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import 'https://fonts.googleapis.com/css?family=Lato:400,700';
@import 'https://fonts.googleapis.com/css?family=Noto+Sans+JP';
@import '../assets/css/styles.css';
@import '../assets/css/ac18.css';
@import '../assets/css/menu.css';
</style>

<template>
  <footer class="footer text-center">
    <div class="container">
      <div class="row">
        <!-- Footer Social Icons-->
        <div class="col-lg-6 mb-5 mb-lg-0">
          <h4 class="text-uppercase mb-4" style="letter-spacing:0.1em">Contact</h4>
          <a class="btn btn-social btn-twitter-outline mx-1" href="https://twitter.com/cielo_fox" target="_blank">
            <icon-base viewBox="0 0 512 512" addClass="fab fa-fw fa-twitter"><icon-twitter /></icon-base>
          </a>
        </div>
        <!-- Footer About Text-->
        <div class="col-lg-6">
          <h4 class="text-uppercase mb-4" style="letter-spacing:0.1em">About</h4>
          <p class="lead mb-0">
            Template created by <a href="http://startbootstrap.com" target="_blank">Start Bootstrap</a>.
          </p>
        </div>
      </div>
    </div>
  </footer>

  <!-- Copyright Section-->
  <div class="copyright py-4 text-center">
    <div class="container">
      本サイトに掲載のイラストを含むコンテンツの無断転載・二次利用は禁止します。<br />
      Reposting all or any part of the contents is prohibited.
    </div>
  </div>

  <!-- Scroll to Top Button (Only visible on small and extra-small screen sizes)-->
  <div class="scroll-to-top d-lg-none position-fixed">
    <a v-scroll-to="'#page-top'" v-on:click="moveSection" href="#" class="js-scroll-trigger d-block text-center text-white rounded">
      <icon-base viewBox="0 0 448 512" addClass="fab fa-fw fa-chevron-up"><icon-chevron-up /></icon-base>
    </a>
  </div>
</template>

<script>
import IconBase from './IconBase.vue'
import IconChevronUp from './icons/IconChevronUp.vue'
import IconTwitter from './icons/IconTwitter.vue'
import { moveSection } from '../assets/js/ac18'

export default {
  components: {
    IconBase,
    IconChevronUp,
    IconTwitter
  },
  methods: {
    "moveSection": moveSection
  }
}
</script>

<template>
  <!-- Error for IE -->
  <div id="ie-error" style="display:none;margin-top:30px;width:100%;text-align:center;">
    本サイトはInternet Explorerには対応しておりません。<br />
    お手数ですが、Microsoft EgdeやGoogleChrome、Firefoxなど別のブラウザで閲覧ください。
  </div>

  <div id="whole">
    <page-header />

    <page-contents />

    <page-footer />
  </div>
</template>

<script>
import PageHeader from './components/PageHeader.vue'
import PageContents from './components/PageContents.vue'
import PageFooter from './components/PageFooter.vue'

export default {
  name: 'App',
  components: {
    PageHeader,
    PageContents,
    PageFooter
  },
  created() {
    function check_is_ie() {
      var userAgent = window.navigator.userAgent.toUpperCase();
      // IEでなければ何もしない
      if (userAgent.indexOf('MSIE') === -1 && userAgent.indexOf('TRIDENT') === -1) {
        return false;
      }

      return true;
    }
    if (check_is_ie()) {
      // IEだったらエラー画面を表示して終了
      document.getElementById("whole").style.display = 'none'
      document.getElementById("ie-error").style.display = 'block'
    }
  }
}
</script>

<style scoped>
@import 'https://fonts.googleapis.com/css?family=Lato:400,700';
@import 'https://fonts.googleapis.com/css?family=Noto+Sans+JP';
@import '@/assets/css/styles.css';
@import '@/assets/css/custom.css';
</style>

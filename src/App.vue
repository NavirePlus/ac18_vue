<template>
  <!-- Error for IE -->
  <div id="ie-error" style="display:none;margin-top:30px;width:100%;text-align:center;">
    本サイトはInternet Explorerには対応しておりません。<br />
    お手数ですが、Microsoft EgdeやGoogleChrome、Firefoxなど別のブラウザで閲覧ください。
  </div>
  <AC18 />
</template>

<script>
import AC18 from './components/AC18.vue'

export default {
  name: 'App',
  components: {
    AC18
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

<template>
  <!-- 概要 Section-->
  <content-about />

  <!-- 頒布情報 Section-->
  <content-book />

  <!-- 参加者・サンプル Section-->
  <content-members />

</template>

<script>
import ContentAbout from './contents/ContentAbout.vue'
import ContentBook from './contents/ContentBook.vue'
import ContentMembers from './contents/ContentMembers.vue'

export default {
  name: 'PageContents',
  components: {
    ContentAbout,
    ContentBook,
    ContentMembers
  }
}
</script>

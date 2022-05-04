<template>
  <div id="image-overlay" @click="$emit('close')">
    <div id="image-content">
      <img :src="img_src" class="my-0 mx-auto img-fluid" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageModal',
  props: ['img_src']
}
</script>

<style scoped>
#image-overlay {
  z-index: 1043;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
}
#image-content {
  z-index: 1044;
  width: 90%;
  padding: 5em auto;
  text-align: center;
}
</style>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" :viewBox="viewBox" :class="addClass">
    <slot />
  </svg>
</template>

<script>
export default {
  props: {
    viewBox: {
      type: String,
      default: '0 0 256 256'
    },
    addClass: {
      type: String,
      default: ''
    }
  }
}
</script>


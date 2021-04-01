<template>
  <span class="reference">
    <a :href="link" target="_blank">{{ link }}</a>
  </span>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Reference',
  props: {
    link: {
      type: String,
      required: true,
    },
  },
})
</script>
<style lang="scss" scoped>
.reference {
  font-size: 14px;
  text-align: center;
}
</style>

<template>
  <button class="tag">
    {{ tag }}
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Tag',
  props: {
    tag: {
      type: String,
      required: true,
    },
  },
})
</script>
<style lang="scss" scoped>
.tag {
  padding: 6px;
  color: #000;
  background: #fff;
  border: solid 1px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: bold;
  display: block;
  text-align: center;
  outline: none;
  min-height: 35px;
  max-height: 35px;
  pointer-events: none;
}
</style>

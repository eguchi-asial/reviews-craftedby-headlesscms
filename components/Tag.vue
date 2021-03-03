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
      required: true
    }
  }
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
  min-width: 65px;
  text-align: center;
  outline: none;

  &:active {
    background: #27ae60;
    border: none;
    outline: none;
    opacity: 0.5;
  }
}
</style>

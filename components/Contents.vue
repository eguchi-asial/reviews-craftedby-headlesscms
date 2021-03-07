<template>
  <ul class="items">
    <li
      class="item"
      v-for="(content, index) in contents" :key="index">
      <Content :content="content" />
    </li>
  </ul>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Contents',
  props: {
    contents: Array
  }
})
</script>
<style lang="scss" scoped>
.items {
  .item {
    border: solid 1px;
    margin-bottom: 10px;
  }
}
</style>

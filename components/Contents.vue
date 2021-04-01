<template>
  <ul class="items">
    <li v-for="(content, index) in contents" :key="index" class="item">
      <Content
        :content="content"
        @click-tag="(tag) => $emit('click-tag', tag)"
      />
    </li>
  </ul>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Contents',
  props: {
    contents: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
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

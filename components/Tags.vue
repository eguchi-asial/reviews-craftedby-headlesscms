<template>
  <div class="tags">
    <span class="tag" v-for="(tag, index) in tags" :key="index">
      <Tag :tag="tag" :no-link="noLink" @click-tag="(tag) => $emit('click-tag', tag)" />
    </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Tags',
  props: {
    tags: {
      type: Array,
      default: () => ['tag']
    },
    noLink: {
      type: Boolean,
      default: () => false
    }
  }
})

</script>
<style lang="scss" scoped>
.tags {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: fit-content;
  width: 100%;
  padding: 10px 0;
  flex-wrap: wrap;

  .tag {
    margin: 2px;
  }
}
</style>

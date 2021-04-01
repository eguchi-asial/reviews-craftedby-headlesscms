<template>
  <div class="references">
    <h2 class="title">参考リンク</h2>
    <ul class="reference-list">
      <li
        v-for="(link, index) in links"
        :key="index"
        class="reference-list-item"
      >
        <Reference :link="link" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'References',
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
})
</script>
<style lang="scss" scoped>
.references {
  width: calc(100vw - 20px);
  padding: 10px 0;
  margin-top: 10px;
  border-top: 1px dashed;

  .title {
    width: 100vw;
  }

  .reference-list {
    padding: 0;
    padding-left: 15px;
    list-style: none;

    &-item {
      margin: 5px;
    }
  }
}
</style>

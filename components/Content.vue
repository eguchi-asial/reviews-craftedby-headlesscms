<template>
  <nuxt-link class="nuxt-link" :to="content.path">
    <div class="left">
      <img
        v-if="content.eyecatch"
        :src="`/${content.eyecatch}`"
        class="eyecatch"
      />
      <img v-else src="/noimage-gray.png" class="eyecatch" />
    </div>
    <div class="right">
      <div class="title">{{ content.title }} {{ content.yyyymmdd }}</div>
      <div class="description">{{ content.description }}</div>
      <Rating :rating="content.rating" />
      <Tags :tags="content.category" class="category" />
    </div>
  </nuxt-link>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Content',
  props: {
    content: {
      type: Object,
      required: false,
      default: () => {},
    },
  },
})
</script>
<style lang="scss" scoped>
$eyecatch-height: 120px;
.nuxt-link {
  display: flex;
  color: #000;
  text-decoration: none;

  .eyecatch {
    padding: 10px;
    width: $eyecatch-height;
    height: auto;
  }

  .right {
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: calc(100% - #{$eyecatch-height});
    height: 100%;

    .title {
      font-weight: bold;
      font-size: 18px;
      width: 100%;
      height: auto;
    }

    .description {
      font-size: 16px;
      width: 100%;
      height: auto;
    }

    .category {
      z-index: 199999;
    }
  }
}
</style>

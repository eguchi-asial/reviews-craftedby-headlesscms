<template>
  <div class="container">
    <div><h2>{{ content.title }}</h2></div>
    <div>{{ content.description }}</div>
  </div>
</template>
<script lang="ts">
import { IContentDocument } from '@nuxt/content/types/content'
import Vue from 'vue'

export default Vue.extend({
  name: 'Review',
  async asyncData ({ $content, route }) {
    const content: IContentDocument | IContentDocument[] = await $content(`review/${route.params.id}`)
      .only(['id', 'category', 'title', 'description', 'yyyymmdd'])
      .fetch()
    return {
      content
    }
  },
})
</script>
